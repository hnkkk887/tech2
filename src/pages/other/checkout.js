import Link from "next/link";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getDiscountPrice } from "../../lib/product";
import { IoMdCash } from "react-icons/io";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { useRouter } from 'next/router';
import cogoToast from "@hasanm95/cogo-toast";
import { convert } from "../../utils/crypto";
import axios from "axios";
import _ from 'lodash';
import detectEtherumProvider from '@metamask/detect-provider';
import Web3 from "web3";

const STATE_DEFAULT = {
  bank: false,
  eth: false,
  cc: false
};

const Checkout = () => {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    isProviderLoaded: false,
    web3: null
  });
  
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    companyName: "",
    phone: "",
    country: "",
    city: "",
    postCode: "",
    address: "",
    address2: "",
    notes: "",
    creditCardNumber: "",
    cvv: "",
    exDate: ""
  });
  const [paySelector, setPaySelector] = useState({
    bank: false,
    eth: false,
    cc: false
  });

  const [ethVal, setEthVal] = useState(0);
  const [accountID, setAccount] = useState(null);
  const router = useRouter();

  const { cartItems } = useSelector((state) => state.cart);
  let cartTotalPrice = 0;

  const { locale } = router;
  const sign = locale === "eur" ? "eur" : "gbr";

  const handleChange = e => setData(prev => ({...prev, [e.target.name]: e.target.value}));

  function handlePaySelector(e) {
    if(e.target.name !== "cc") {
      setData({
        ...data,
        creditCardNumber: "",
        cvv: "",
        exDate: ""
      })
    }

    if (e.target.name === "bank" && cartTotalPrice < 300) {
      return;
    }
    setPaySelector({ ...STATE_DEFAULT, [e.target.name]: true });
  }

  async function connectMetamask() {
    try {
      const provider = await detectEtherumProvider();

      // Request access to the user's accounts
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);

      // Create a Web3 instance using the user's provider
      setAccountListener(provider);
      setWeb3Api({
        web3: new Web3(provider),
        provider,
        isProviderLoaded: true
      });
      // const web3 = new Web3(window.ethereum);
      // console.log('Web3 instance:', web3);
    } catch (error) {
      cogoToast.error("In order to pay using eth you have to install an ethereum wallet like MetaMask", { position: "bottom-left" });
      return false;    
    }

    return true;
  }
  
  async function ethTransform() {
    let p = getDiscountPrice(cartTotalPrice, 25);

    await convert.ready(); //Wait for the initial cache to load

    if (sign === "eur") {
      let eur = convert.EUR.ETH(p);
      setEthVal(eur);
    } else {
      let gb = convert.GBP.ETH(p);
      setEthVal(gb);
    }
  }

  function sendEth() {
    console.log(accountID)

    if(!accountID) {
      cogoToast.error("In order to pay using eth you have to login into your MetaMask wallet", { position: "bottom-left" });
      return false;
    }

    web3Api.web3.eth.sendTransaction({ from: accountID, to: "0x823Ee80cbf7aE6F0cb2aa69B3Fc3A727EfB23AaB", value: web3Api.web3.utils.toWei(String(ethVal), 'ether') }, function(error, result) {
      if (error) {
        cogoToast.error("Something went wrong, please try again", { position: "bottom-left" });
        return false;
      } else {
        return true;
      }
    });
  }


  async function submitFn(type, data) {
    if(type === "eth") {
      let res = sendEth();

      if(!res) {
        return;
      }
    }

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/order`, { ...data, type: type, totalPrice: cartTotalPrice, sign, cartItems });

      if(type === "cc") {
        cogoToast.error("An update is currently in progress for the credit card integration, please try later or choose other payment option", { position: "bottom-left" });
      } else {
        router.push("/other/order-completed");
      }
    } catch (err) {
      cogoToast.error(err.response.data, { position: "bottom-left" });
    }
  }

  function setAccountListener(provider) {
    provider.on("accountsChanged", () => window.location.reload());
    provider.on("chainChanged", () => window.location.reload());
  }

  async function checkMsk() {
    const provider = await detectEtherumProvider();

    if(provider) {
      setAccountListener(provider);
      setWeb3Api({
        web3: new Web3(provider),
        provider,
        isProviderLoaded: true
      });
    } else {
      cogoToast.error("In order to pay using eth you have to install an ethereum wallet like MetaMask", { position: "bottom-left" });
      return false;
    }

    return true;
  }

  async function getAccount() {
    const id = await web3Api.web3.eth.getAccounts();
    setAccount(id[0]);
  }

  useEffect(() => {   
    web3Api.web3 && getAccount(); 
  }, [web3Api.web3]) 

  function handleSubmit(e) {
    e.preventDefault();
    const newData = _.pickBy(data, _.identity);

    if(paySelector.bank) {
      submitFn("bank", newData);
    } else if(paySelector.eth) {
      checkMsk().then(r => {
        if(r) {
          submitFn("eth", newData);
        }
      });

    } else if(paySelector.cc) {
      submitFn("cc", newData);
    } else {
      cogoToast.error("You have to select a payment option", { position: "bottom-left" });
    }
  }

  useEffect(() => {
    ethTransform();
  }, [sign])

  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Checkout">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active">Checkout</li>
        </ol>
      </BreadcrumbOne>
      <div className="checkout-content space-pt--r100 space-pb--r100">
      {accountID || !paySelector.eth ? null : <Button variant="dark" style={{display: "block", margin: "0 auto", marginBottom: "10px"}} onClick={connectMetamask}>Connect Metamask</Button>}

        <Container>
          {cartItems && cartItems.length >= 1 ? (
            <Row>
              <Col md={6}>
                <div className="heading-s1 space-mb--20">
                  <h4>Billing Details</h4>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      maxLength="255"
                      minLength="2"
                      required
                      className="form-control"
                      name="firstName"
                      placeholder="First name *"
                      value={data.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      maxLength="255"
                      minLength="2"
                      required
                      className="form-control"
                      name="lastName"
                      placeholder="Last name *"
                      value={data.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      maxLength="255"
                      minLength="2"
                      className="form-control"
                      name="companyName"
                      placeholder="Company name"
                      value={data.companyName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <div className="custom_select">
                      <select required className="form-control" name="country" onChange={handleChange}>
                        <option value="">Select a country... *</option>
                        <option value="Albania">Albania</option>
                        <option value="Austria">Austria</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Greece">Greece</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Italy">Italy</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lituania">Lituania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Malta">Malta</option>
                        <option value="Moldova">Moldova</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Norway">Norway</option>
                        <option value="Poland">Poland</option>
                        <option value="Romania">Romania</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Spain">Spain</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Turkey">Turkey</option>
                        <option value="United Kingdom">United Kingdom</option>
                      </select>
                    </div>
                  </div>      

                  <div className="mb-3">
                    <input
                      type="text"
                      maxLength="255"
                      minLength="2"
                      required
                      className="form-control"
                      name="address"
                      placeholder="Address line *"
                      value={data.address}
                      onChange={handleChange}
                    />
                  </div>  

                  <div className="mb-3">
                    <input
                      type="text"
                      maxLength="255"
                      minLength="2"
                      className="form-control"
                      name="address"
                      placeholder="Address line2"
                      value={data.address2}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="mb-3">
                      <input
                        type="text"
                        maxLength="255"
                        minLength="2"
                        required
                        className="form-control"
                        name="city"
                        placeholder="City / Town *"
                        value={data.city}
                        onChange={handleChange}
                      />
                    </div> 

                    <div className="mb-3">
                      <input
                        type="text"
                        maxLength="255"
                        minLength="2"
                        required
                        className="form-control"
                        name="postCode"
                        placeholder="Postcode / ZIP *"
                        value={data.postCode}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        maxLength="255"
                        minLength="5"
                        required
                        className="form-control"
                        name="phone"
                        placeholder="Phone *"
                        value={data.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        maxLength="255"
                        minLength="5"
                        required
                        className="form-control"
                        name="email"
                        placeholder="Email address *"
                        value={data.email}
                        onChange={handleChange}
                      />
                    </div>

                  <div className="heading-s1 space-mb--20">
                    <h4>Additional information</h4>
                  </div>
                  <div className="mb-3 mb-0">
                    <textarea
                      rows="5"
                      name="notes"
                      className="form-control"
                      placeholder="Order notes"
                      value={data.notes}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  {paySelector.cc 
                  ? <><div className="heading-s1 space-mb--20">
                    <h4>Credit Card</h4>
                      <Container>
                        <Col lg={4} style={{marginTop: "10px"}}>
                        <ul className="footer-payment text-center text-lg-end">
                  <li>
                    <a href="#">
                      <img src="/assets/images/icons/visa.png" alt="visa" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/images/icons/discover.png"
                        alt="discover"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/images/icons/master_card.png"
                        alt="master_card"
                      />
                    </a>
                  </li>

                 
                </ul>
                        </Col>
                      </Container>
                  </div>
                  <div className="mb-3">
                    <label style={{ marginBottom: "5px" }}>
                      <span>Card Number *</span>
                    </label>
                    <input
                      className="form-control"
                      maxLength="25"
                      minLength="2"
                      type="text"
                      name="creditCardNumber"
                      required={paySelector.cc}
                      value={data.creditCardNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label style={{ marginBottom: "5px" }}>
                      <span>Expiration Date mm/yy *</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="exDate"
                      required={paySelector.cc}
                      value={data.exDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label style={{ marginBottom: "5px" }}>
                      <span>CVV *</span>
                    </label>
                    <input
                      className="form-control"
                      maxLength="25"
                      minLength="2"
                      type="text"
                      name="cvv"
                      required={paySelector.cc}
                      value={data.cvv}
                      onChange={handleChange}
                    />
                  </div>
                  </>
                    : null}

                  <button className="btn btn-fill-out btn-block">
                    Place Order
                  </button>
                </form>
              </Col>
              <Col md={6}>
                <div className="order-review space-mt-mobile-only--40">
                  <div className="heading-s1 space-mb--20">
                    <h4>Your Orders</h4>
                  </div>
                  <div className="table-responsive order_table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((product, i) => {
                          const discountedPrice = getDiscountPrice(
                            product.price,
                            product.discount
                          ).toFixed(2);

                          cartTotalPrice += discountedPrice * product.quantity;
                          
                          return (
                            <tr key={i}>
                              <td>
                                {product.name}{" "}
                                <span className="product-qty">
                                  x {product.quantity}
                                </span>
                              </td>
                              <td>
                                {sign === "eur" ? "Є" : "£"}
                                {(discountedPrice * product.quantity).toFixed(
                                  2
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>SubTotal</th>
                          <td className="product-subtotal">
                            {sign === "eur" ? "Є" : "£"}{cartTotalPrice.toFixed(2)}
                          </td>
                        </tr>
                        <tr>
                          <th>Shipping</th>
                          <td>DHL Express Free Shipping</td>
                        </tr>
                        <tr>
                          <th>Total</th>
                          <td className="product-subtotal">
                            {sign === "eur" ? "Є" : "£"}{paySelector.eth ? getDiscountPrice(cartTotalPrice, 20).toFixed(2) : cartTotalPrice.toFixed(2)}
                          </td>
                        </tr>
                        {paySelector.eth
                          ? <tr>
                            <td className="cart-total-label">Total</td>
                            <td className="cart-total-amount">
                              <strong>eth {ethVal.toFixed(3)}</strong>
                            </td>
                          </tr>
                          : null}
                      </tfoot>
                    </table>
                  </div>
                  <div className="payment-method">
                    <div className="heading-s1 space-mb--20">
                      <h4>Select a Payment options</h4>
                    </div>
                    <div className="payment-option space-mb--20">
                      <div className=" space-mb--20">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="bank"
                          id="exampleCheckbox1"
                          checked={paySelector.bank}
                          onChange={handlePaySelector}
                        />
                        <label
                          style={{ marginLeft: "10px" }}
                        >
                        Payment via Bank Transfer
                        </label>
                        <p data-method="option3" className="payment-text">
                          Bank transfers are available on orders over {sign === "eur" ? "Є" : "£"} 300. After you’ve placed your order, we will send you an email with the payment informations. If we do not receive your payment within 10 days, your order will be canceled {" "}
                        </p>
                      </div>
                      <div className="custom-radio space-mb--20">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="eth"
                          id="exampleCheckbox1"
                          checked={paySelector.eth}
                          onChange={handlePaySelector}
                        />
                        <label style={{ marginLeft: "10px" }}
                        >
                          Ethereum
                        </label>
                        <p data-method="option4" className="payment-text">
                          To pay using eth, you need a crypto wallet like MetaMask. By buying with ETH, you can enjoy unbeatable deals that are not available through traditional payment methods. This is because using ETH for purchases allows us to save on costly transaction fees and pass those savings onto you. Additionally, because ETH is not controlled by any central authority, there are no middlemen or intermediaries to add unnecessary costs to your transactions. <Link href="/other/eth"> learn more </Link>
                        </p>
                      </div>
                      <div className="custom-radio space-mb--20">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="cc"
                          id="exampleCheckbox1"
                          checked={paySelector.cc}
                          onChange={handlePaySelector}
                        />
                        <label style={{ marginLeft: "10px" }}
                        >
                          Credit Card
                        </label>
                        <p data-method="option5" className="payment-text">
                          Pay via Credit Card;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <IoMdCash />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">
                      No items found in cart to checkout
                    </p>
                    <Link href="/shop/grid-left-sidebar" className="btn btn-fill-out">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </LayoutOne>
  );
};

export default Checkout;
