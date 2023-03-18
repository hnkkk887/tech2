import { Fragment } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoGoogleplus,
  IoLogoYoutube,
  IoLogoInstagram,
  IoIosPhonePortrait,
  IoIosMailOpen,
  IoIosPin
} from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { SubscribeEmail } from "../Newsletter";

const FooterOne = () => {
  return (
    <Fragment>
      <div className="bg--default space-pt--60 space-pb--60">
        {/* <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h3 className="newsletter-title text-white mb-md-0">
                Subscribe Our Newsletter
              </h3>
            </Col>
            <Col md={6}>
              <SubscribeEmail
                mailchimpUrl="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
                alertColor="#fff"
              />
            </Col>
          </Row>
        </Container> */}
      </div>

      <footer className="footer-dark">
        <div className="footer-top">
          <Container>
            <Row>
              <Col lg={8} sm={8}>
                <div className="widget">
                  <div className="footer-logo">
                    <Link href="/">
                      <h1>e-plazacloud</h1>

                      {/* <img src="/assets/images/logo_light.png" alt="logo" /> */}

                    </Link>
                  </div>
                  <p>
                    We strive to provide our customers with the best possible deals. We understand that customers want to get the most value for their money, so we work hard to provide competitive pricing and discounts on our products. We also regularly update our inventory with new products and special promotions to make sure our customers have access to the latest and most affordable products. Our goal is to provide a positive shopping experience for our customers by offering them the best deals and a wide variety of products to choose from. 
                  </p>
                </div>
                {/* <div className="widget">
                  <ul className="social-icons">
                    <li>
                      <a href="#">
                        <IoLogoFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <IoLogoTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <IoLogoGoogleplus />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <IoLogoYoutube />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <IoLogoInstagram />
                      </a>
                    </li>
                  </ul>
                </div> */}
              </Col>
              <Col lg={2} md={4} sm={4}>
                <div className="widget">
                  <h6 className="widget-title">Useful Links</h6>
                  <ul className="widget-links">
                    <li>
                      <Link href="/other/about-us">
                        About Us
                      </Link>
                    </li>                    
  
                    {/* <li>
                      <Link href="/other/faq">
                        FAQ
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link href="/">
                        Location
                      </Link>
                    </li> */}
                    <li>
                      <Link href="/other/affiliate">
                        Affiliates Program
                      </Link>
                    </li>
                    <li>
                      <Link href="/other/contact-us">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link href="/other/eth">
                        How To Buy Using Ethereum
                      </Link>
                    </li>                      
                    <li>
                      <Link href="/other/shipping">
                        Shipping
                      </Link>
                    </li>                    
                    <li>
                      <Link href="/other/terms">
                        Terms & Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              {/* <Col lg={2} md={3} sm={6}>
                <div className="widget">
                  <h6 className="widget-title">Category</h6>
                  <ul className="widget-links">
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        Men
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        Woman
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        Kids
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        Best Seller
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        New Arrivals
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={2} md={6} sm={6}>
                <div className="widget">
                  <h6 className="widget-title">My Account</h6>
                  <ul className="widget-links">
                    <li>
                      <Link href="/other/my-account">
                        My Account
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        Discount
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        Returns
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        Orders History
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        Order Tracking
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} md={4} sm={6}>
                <div className="widget">
                  <h6 className="widget-title">Contact Info</h6>
                  <ul className="contact-info contact-info-light">
                    <li>
                      <IoIosPin />
                      <p>123 Street, Old Trafford, New South London , UK</p>
                    </li>
                    <li>
                      <IoIosMailOpen />
                      <a href="mailto:info@sitename.com">info@sitename.com</a>
                    </li>
                    <li>
                      <IoIosPhonePortrait />
                      <p>+ 457 789 789 65</p>
                    </li>
                  </ul>
                </div>
              </Col> */}
            </Row>
          </Container>
        </div>
        <div className="bottom-footer border-top--grey">
          <Container>
            <Row>
              <Col md={6}>
                <p className="mb-3 mb-md-0 text-center text-md-start">
                  Copyright &copy; {new Date().getFullYear() + " "}
                </p>
              </Col>
              <Col md={6}>
                <ul className="footer-payment text-center text-lg-end">
                  <li>
                    <a href="#">
                      <img style={{height: "32px", backgroundColor: "#fff"}} src="/assets/images/icons/ETHEREUM-LOGO.png" alt="ethereum" />
                    </a>
                  </li> 
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
                  <li>
                    <a href="#">
                      <img
                        src="/assets/images/icons/amarican_express.png"
                        alt="american_express"
                      />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </Fragment>
  );
};

export default FooterOne;
