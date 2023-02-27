import { useState, Fragment, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQuantity, deleteFromCart, deleteAllFromCart } from "../../store/slices/cart-slice";
import { getDiscountPrice, cartItemStock } from "../../lib/product";
import { Container, Row, Col } from "react-bootstrap";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { IoIosClose } from "react-icons/io";
import { useRouter } from 'next/router';
import { convert } from "../../utils/crypto";

const Cart = () => {
  const [ethCheck, setEthCheck] = useState(false);
  const [ethVal, setEthVal] = useState(0);
  const [quantityCount] = useState(1);
  
  const dispatch = useDispatch();
  const router = useRouter();

  const { locale } = router;
  const sign = locale === "eur" ? "eur" : "gbr";

  const { cartItems } = useSelector((state) => state.cart);
  let cartTotalPrice = 0;

  async function ethTransform() {
    let p = getDiscountPrice(cartTotalPrice, 20);

    await convert.ready(); //Wait for the initial cache to load
    
    if(sign === "eur") {
      let eur = convert.EUR.ETH(p);
      setEthVal(eur);
    } else {
      let gb = convert.GBP.ETH(p);
      setEthVal(gb);
    }
  }

  useEffect(() => {
    ethTransform();
  }, [sign])

  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Shopping Cart">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active">Shopping Cart</li>
        </ol>
      </BreadcrumbOne>
      {/* cart content */}
      <div className="cart-content space-pt--r100 space-pb--r100">
        <Container>
          {cartItems && cartItems.length >= 1 ? (
            <Fragment>
              <Row>
                <Col lg={12}>
                  <div className="table-responsive shop-cart-table">
                    <table className="table mb-0">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">&nbsp;</th>
                          <th className="product-name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-subtotal">Total</th>
                          <th className="product-remove text-center">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((product, key) => {
                          let v = getDiscountPrice(
                            product.price,
                            product.discount
                          ).toFixed(2);

                          if(sign !== "eur") {
                            v = getDiscountPrice(
                              product.priceGBP,
                              product.discount
                            ).toFixed(2);    
                          }

                          const discountedPrice = v;

                          cartTotalPrice += discountedPrice * product.quantity;
                          return (
                            <tr key={key}>
                              <td className="product-thumbnail">
                                <Link href={"/shop/product-basic/" + product.slug}>
                                  <img
                                    src={product.thumbImage[0]}
                                    style={{ objectFit: "contain", height: "120px" }}
                                    alt="product1"
                                  />
                                </Link>
                              </td>
                              <td className="product-name" data-title="Product">
                                <Link href={"/shop/product-basic/" + product.slug}>
                                  {product.name}
                                </Link>
                                {product.selectedProductColor &&
                                product.selectedProductSize ? (
                                  <div className="cart-variation">
                                    <p>Color: {product.selectedProductColor}</p>
                                    <p>Size: {product.selectedProductSize}</p>
                                  </div>
                                ) : (
                                  ""
                                )}
                              </td>
                              <td className="product-price" data-title="Price">
                              {sign === "eur" ? "Є" : "£"}{discountedPrice}
                              </td>
                              <td
                                className="product-quantity"
                                data-title="Quantity"
                              >
                                <div className="cart-plus-minus">
                                  <button
                                    onClick={() =>
                                      dispatch(decreaseQuantity(product))
                                    }
                                    className="qtybutton"
                                  >
                                    -
                                  </button>
                                  <input
                                    className="cart-plus-minus-box"
                                    type="text"
                                    value={product.quantity}
                                    readOnly
                                  />
                                  <button
                                    onClick={() =>
                                      dispatch(addToCart({
                                        ...product,
                                        quantity: quantityCount
                                      }))
                                    }
                                    disabled={
                                      product !== undefined &&
                                      product.quantity &&
                                      product.quantity >=
                                        cartItemStock(
                                          product,
                                          product.selectedProductColor,
                                          product.selectedProductSize
                                        )
                                    }
                                    className="qtybutton"
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td
                                className="product-subtotal"
                                data-title="Total"
                              >
                                {sign === "eur" ? "Є" : "£"}
                                {(discountedPrice * product.quantity).toFixed(
                                  2
                                )}
                              </td>
                              <td className="product-remove">
                                <button
                                  onClick={() =>
                                    dispatch(deleteFromCart(product.cartItemId))
                                  }
                                >
                                  <IoIosClose />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="6" className="px-0 pb-0">
                            <Row className="gx-0 align-items-center">
                              <Col lg={4} md={6} className="mb-3 mb-md-0">
                                <div className="coupon field-form input-group">
                                  <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder="Enter Coupon Code.."
                                  />
                                  <button
                                    className="input-group-text btn btn-fill-out btn-sm"
                                    type="submit"
                                  >
                                    Apply Coupon
                                  </button>
                                </div>
                              </Col>
                              <Col
                                lg={8}
                                md={6}
                                className="text-start text-md-end"
                              >
                                <button
                                  className="btn btn-line-fill btn-sm"
                                  type="submit"
                                  onClick={() => dispatch(deleteAllFromCart())}
                                >
                                  Clear Cart
                                </button>
                              </Col>
                            </Row>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="divider center-icon space-mt--30 space-mb--30">
                    <i className="icon-basket-loaded" />
                  </div>
                </Col>
              </Row>
              <Row>
                {/* <Col md={6}>
                  <div>
                    <div className="heading-s1 mb-3">
                      <h6>Calculate Shipping</h6>
                    </div>
                    <form className="field-form shipping-calculator">
                      <div className="row">
                        <div className="mb-3 col-lg-12">
                          <select className="form-control">
                            <option value>Choose a option...</option>
                            <option value="AX">Aland Islands</option>
                            <option value="AF">Afghanistan</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Barbuda</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="mb-3 col-lg-6">
                          <input
                            required="required"
                            placeholder="State / Country"
                            className="form-control"
                            name="name"
                            type="text"
                          />
                        </div>
                        <div className="mb-3 col-lg-6">
                          <input
                            required="required"
                            placeholder="PostCode / ZIP"
                            className="form-control"
                            name="name"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="mb-3 col-lg-12">
                          <button className="btn btn-fill-line" type="submit">
                            Update Totals
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </Col> */}
                <Col md={6}>
                  <div className="border p-3 p-md-4">
                    <div className="heading-s1 mb-3">
                      <h6>Cart Totals</h6>
                    </div>
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="cart-total-label">Cart Subtotal</td>
                            <td className="cart-total-amount">
                              {sign === "eur" ? "Є" : "£"}{cartTotalPrice.toFixed(2)}
                            </td>
                          </tr>
                          <tr>
                            <td className="cart-total-label">Shipping</td>
                            <td className="cart-total-amount">DHL Express Free Shipping</td>
                          </tr>
                          <tr>
                            <td className="cart-total-label">Total</td>
                            <td className="cart-total-amount">
                              <strong>{sign === "eur" ? "Є" : "£"}{ethCheck ? getDiscountPrice(cartTotalPrice, 20).toFixed(2) : cartTotalPrice.toFixed(2)}</strong>
                            </td>
                          </tr>
                          {ethCheck 
                          ?  <tr>
                            <td className="cart-total-label">Total</td>
                            <td className="cart-total-amount">
                              <strong>eth {ethVal.toFixed(3)}</strong>
                            </td>
                          </tr>                          
                          : null }
                          {/* <tr>
                            <td className="cart-total-label">Pay using eth cryptocurrency for an extra 20% discount. <Link href="/other/eth"> learn more </Link></td>
                            <td className="cart-total-amount">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="checkbox"
                                vaue={ethCheck}
                                onChange={() => setEthCheck(prev => !prev)}
                              />
                            </td>
                          </tr> */}

                        </tbody>
                      </table>
                    </div>
                    {!ethCheck 
                      ? <Link href="/other/checkout" className="btn btn-fill-out">
                      Proceed To CheckOut
                    </Link> 
                      : <Link href="/ethCheckout" className="btn btn-fill-out">
                      Proceed To CheckOut
                    </Link> }

                  </div>
                </Col>
              </Row>
            </Fragment>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <i className="icon-basket-loaded" />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">No items found in cart</p>
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

export default Cart;
