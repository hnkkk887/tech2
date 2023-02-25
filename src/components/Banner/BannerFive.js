import Link from "next/link";
import { Row, Col } from "react-bootstrap";

const BannerFive = ({ containerClass }) => {
  return (
    <div className="banner-area space-pb--r70">
      <div className={`${containerClass ? containerClass : "container"}`}>
        <Row>
          <Col md={4}>
            <div className="sale-banner px-0">
              <Link href="/shop/product-basic/63f02def6b7583539f8acfc7" className="hover-effect">

                <img
                  src="/assets/images/banner/shop_banner_img7.jpg"
                  alt="shop_banner_img3"
                />

              </Link>
            </div>
          </Col>
          <Col md={4}>
            <div className="sale-banner px-0">
              <Link href="/shop/product-basic/63f03da460d7b553780866a4" className="hover-effect">

                <img
                  src="/assets/images/banner/shop_banner_img8.jpg"
                  alt="shop_banner_img3"
                />

              </Link>
            </div>
          </Col>
          <Col md={4}>
            <div className="sale-banner px-0">
              <Link href="/shop/product-basic/63f0b74cceeed0654fd8c07c" className="hover-effect">

                <img
                  src="/assets/images/banner/shop_banner_img9.jpg"
                  alt="shop_banner_img3"
                />

              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BannerFive;
