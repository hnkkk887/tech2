import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from 'next/router';
import { Container, Row, Col, Form } from "react-bootstrap";
import {
  IoIosShuffle,
  IoIosHeartEmpty
} from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";

const HeaderTopTwo = () => {
  const [sVal, changeSVal] = useState("eur");
  const { isAuth } = useSelector(state => state.auth);
  const router = useRouter();

  const { locale } = router;
  const sign = locale === "eur" ? "eur" : "gbr";

  function changeSign(e) {
    changeSVal(e.target.value);
    router.push("/", "/", { locale: e.target.value });
  }

  useEffect(() => {
    changeSVal(sign);
  }, [])

  return (
    <div className="top-header d-none d-lg-block">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="header-topbar-info d-flex">
              <div className="header-offer">
                <span>Free Shipping on orders over {sign === "eur" ? "Є" : "£"}100</span>
              </div>
              {/* <div className="download-wrap">
                <span className="me-3">Download App</span>
                <ul className="text-center text-lg-start">
                  <li>
                    <a href="#">
                      <FaApple />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaAndroid />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaWindows />
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex align-items-center justify-content-end">
              {/* <Form.Control as="select" name="languages" className="me-2">
                <option value="en">English</option>
                <option value="fn">France</option>
              </Form.Control> */}

              <Form.Control as="select" name="countries" onChange={changeSign} value={sVal}>
                {/* <option value="USD">USD</option> */}
                <option value="eur">EUR</option>
                <option value="gbr">GBR</option>
              </Form.Control>
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
                {isAuth ? null : <li>
                  <Link href="/other/login">

                    <AiOutlineUser />
                    <span>Login</span>

                  </Link>
                </li>}
              </ul>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderTopTwo;
