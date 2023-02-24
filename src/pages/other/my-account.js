import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import { FaCloudDownloadAlt, FaRegEdit } from "react-icons/fa";
import { authLogout, updateData } from "../../store/slices/auth";
import cogoToast from "@hasanm95/cogo-toast";
import {
  IoIosList,
  IoIosClipboard,
  IoIosDownload,
  IoIosCash,
  IoIosCreate,
  IoIosPerson
} from "react-icons/io";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import _ from 'lodash';

const MyAccount = () => {
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    country: "",
    city: "",
    postCode: "",
    address: ""
  });
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const router = useRouter();

  const handleChange = e => setData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  function handleLogout() {
    dispatch(authLogout()).then(() => router.push("/"));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newData = _.pickBy(data, _.identity);
    dispatch(updateData(newData)).then(() => cogoToast.info("Your account has been updated", { position: "bottom-left" })).catch(e => cogoToast.error(e, { position: "bottom-left" }));
  }

  useEffect(() => {
    if (!auth.isAuth) {
      router.push("/");
    }
  }, [auth])

  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="My Account">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active">My Account</li>
        </ol>
      </BreadcrumbOne>
      <div className="my-account-content space-pt--r100 space-pb--r100">
        <Container>
          <Tab.Container defaultActiveKey="dashboard">
            <Row>
              <Col lg={3} md={4}>
                <Nav
                  variant="pills"
                  className="flex-column my-account-content__navigation space-mb--r60"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="dashboard">
                      <IoIosList /> Dashboard
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="orders">
                      <IoIosClipboard /> Orders
                    </Nav.Link>
                  </Nav.Item>
                  {/* <Nav.Item>
                    <Nav.Link eventKey="download">
                      <IoIosDownload /> Download
                    </Nav.Link>
                  </Nav.Item> */}
                  <Nav.Item>
                    <Nav.Link eventKey="payment">
                      <IoIosCash /> Bank Transfer
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="address">
                      <IoIosCreate /> Address
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="accountDetails">
                      <IoIosPerson /> Account Details
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col lg={9} md={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="dashboard">
                    <Card className="my-account-content__content">
                      <Card.Header>
                        <h3>Dashboard</h3>
                      </Card.Header>
                      <Card.Body>
                        <div className="welcome">
                          <p>
                            Hello, <strong style={{ textTransform: "capitalize" }}>{auth.user.firstName} {auth.user.lastName}</strong> ( Click here to <a onClick={handleLogout} className="logout">
                              Logout
                            </a> )
                          </p>
                        </div>
                        <p>
                          From your account dashboard. you can easily check
                          &amp; view your recent orders, manage your shipping
                          and billing addresses and edit your password and
                          account details.
                        </p>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="orders">
                    <Card className="my-account-content__content">
                      <Card.Header>
                        <h3>Orders</h3>
                      </Card.Header>
                      <Card.Body>
                        <p className="saved-message">
                          You have no order yet
                        </p>                        
                        
                        {/* <div className="myaccount-table table-responsive text-center">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Order</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Total</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Aug 22, 2020</td>
                                <td>Pending</td>
                                <td>$3000</td>
                                <td>
                                  <a href="#" className="check-btn sqr-btn ">
                                    View
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>July 22, 2020</td>
                                <td>Approved</td>
                                <td>$200</td>
                                <td>
                                  <a href="#" className="check-btn sqr-btn ">
                                    View
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>June 12, 2020</td>
                                <td>On Hold</td>
                                <td>$990</td>
                                <td>
                                  <a href="#" className="check-btn sqr-btn ">
                                    View
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div> */}
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  {/* <Tab.Pane eventKey="download">
                    <Card className="my-account-content__content">
                      <Card.Header>
                        <h3>Downloads</h3>
                      </Card.Header>
                      <Card.Body>
                        <div className="myaccount-table table-responsive text-center">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Product</th>
                                <th>Date</th>
                                <th>Expire</th>
                                <th>Download</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Haven - Free Real Estate PSD Template</td>
                                <td>Aug 22, 2020</td>
                                <td>Yes</td>
                                <td>
                                  <a href="#" className="check-btn sqr-btn ">
                                    <FaCloudDownloadAlt /> Download File
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>HasTech - Portfolio Business Template</td>
                                <td>Sep 12, 2020</td>
                                <td>Never</td>
                                <td>
                                  <a href="#" className="check-btn sqr-btn ">
                                    <FaCloudDownloadAlt /> Download File
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Card.Body>
                    </Card>
                  </Tab.Pane> */}
                  <Tab.Pane eventKey="payment">
                    <Card className="my-account-content__content">
                      <Card.Header>
                        <h3>Bank Transfer</h3>
                      </Card.Header>
                      <Card.Body>
                        <p className="saved-message">
                          You have no order yet
                        </p>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="address">
                    <Card className="my-account-content__content">
                      <Card.Header>
                        <h3>Billing Address</h3>
                      </Card.Header>
                      <Card.Body>
                        <address>
                          <p>
                            <strong style={{ textTransform: "capitalize" }}>{auth.user.firstName} {auth.user.lastName}</strong>
                          </p>
                          <p>
                            {auth.user.address}<br />
                            {auth.user.country} {auth.user.city}
                          </p>
                          <p>Mobile: {auth.user.phone}</p>
                        </address>
                        {/* <a href="#" className="check-btn sqr-btn ">
                          <FaRegEdit /> Edit Address
                        </a> */}
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="accountDetails">
                    <Card className="my-account-content__content">
                      <Card.Header>
                        <h3>Account Details</h3>
                      </Card.Header>
                      <Card.Body>
                        <div className="account-details-form">
                          <form method="post" name="enq" onSubmit={handleSubmit}>
                            <Row>
                              <Col className="mb-3" md={6}>
                                <label>
                                  First Name 
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  maxLength="255"
                                  minLength="2"
                                  name="firstName"
                                  placeholder="First name"
                                  autoFocus
                                  value={data.firstName}
                                  onChange={handleChange}
                                />
                              </Col>
                              <Col className="mb-3" md={6}>
                                <label>
                                  Last Name 
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  maxLength="255"
                                  minLength="2"
                                  name="lastName"
                                  placeholder="Last name"
                                  value={data.lastName}
                                  onChange={handleChange}
                                />
                              </Col>
                              <Col className="mb-3" md={12}>
                                <label>
                                  Address{" "}
                                </label>
                                <input
                                  className="form-control"
                                  name="dname"
                                  type="text"
                                />
                              </Col>
                              <Col className="mb-3" md={12}>
                                <label>
                                  Country{" "}
                                </label>
                                <div className="custom_select">
                                  <select className="form-control" name="country" onChange={handleChange}>
                                    <option value="">Select a country...</option>
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
                              </Col>
                              <Col className="mb-3" md={12}>
                                <label>
                                  City / Town{" "}
                                </label>
                                <input
                                  type="text"
                                  maxLength="255"
                                  minLength="2"
                                  className="form-control"
                                  name="city"
                                  placeholder="City / Town"
                                  value={data.city}
                                  onChange={handleChange}
                                />
                              </Col>
                              <Col className="mb-3" md={12}>
                                <label>
                                  Postcode / ZIP{" "}
                                </label>
                                <input
                                  type="text"
                                  maxLength="255"
                                  minLength="2"
                                  className="form-control"
                                  name="postCode"
                                  placeholder="Postcode / ZIP"
                                  value={data.postCode}
                                  onChange={handleChange}
                                />
                              </Col>
                              <Col className="mb-3" md={12}>
                                <label>
                                  Phone{" "}
                                </label>
                                <input
                                  type="text"
                                  maxLength="255"
                                  minLength="5"
                                  className="form-control"
                                  name="phone"
                                  placeholder="Phone"
                                  value={data.phone}
                                  onChange={handleChange}
                                />
                              </Col>
                              <Col className="mb-3" md={12}>
                                <label>
                                  Email address{" "}
                                </label>
                                <input
                                  type="text"
                                  maxLength="255"
                                  minLength="5"
                                  className="form-control"
                                  name="email"
                                  placeholder="Email address"
                                  value={data.email}
                                  onChange={handleChange}
                                />
                              </Col>
                              <Col md={12}>
                                <button
                                  type="submit"
                                  className="btn btn-fill-out"
                                  name="submit"
                                  value="Submit"
                                >
                                  Save
                                </button>
                              </Col>
                            </Row>
                          </form>
                        </div>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    </LayoutOne>
  );
};

export default MyAccount;
