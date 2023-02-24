import Link from "next/link";
import { Container, Row, Col, Form } from "react-bootstrap";
import {
  IoIosPhonePortrait,
  IoIosShuffle,
  IoIosHeartEmpty
} from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";

const HeaderTop = () => {
  return (
    <div className="top-header d-none d-lg-block">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
              {/* <Form.Control as="select" name="languages" className="me-2">
                <option value="en">English</option>
                <option value="fn">France</option>
              </Form.Control> */}

              <Form.Control as="select" name="countries" className="me-3">
                <option value="EUR">EUR</option>
                <option value="GBR">GBR</option>
              </Form.Control>

              {/* <ul className="contact-detail text-center text-lg-start">
                <li>
                  <IoIosPhonePortrait />
                  <span>123-456-7890</span>
                </li>
              </ul> */}
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center text-md-end">
              <ul className="header-list">
                <li>
                  <Link href="/other/compare">

                    <IoIosShuffle />
                    <span>Compare</span>

                  </Link>
                </li>
                <li>
                  <Link href="/other/wishlist">

                    <IoIosHeartEmpty />
                    <span>Wishlist</span>

                  </Link>
                </li>
                <li>
                  <Link href="/other/login">

                    <AiOutlineUser />
                    <span>Login</span>

                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderTop;
