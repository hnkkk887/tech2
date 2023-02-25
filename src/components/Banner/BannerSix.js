import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const BannerSix = () => {
  return (
    <div className="banner-area space-pb--r100">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="sale-banner mb-0">
              <Link href="shop/product-basic/63f1018f9c1789a33df5845a" className="hover-effect">

                <img
                  src="/assets/images/banner/shop_banner_img11.jpg"
                  alt="shop_banner_img11"
                />

              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerSix;
