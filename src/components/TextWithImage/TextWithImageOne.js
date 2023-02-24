import { Container, Row, Col } from "react-bootstrap";

const TextWithImageOne = () => {
  return (
    <div className="text-image-section space-pt--r100 space-pb--r100">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="about-img scene mb-4 mb-lg-0">
              <img src="/assets/images/banner/about_img.jpg" alt="about_img" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="heading-s1 space-mb--20">
              <h2>Who We are</h2>
            </div>
            <p>
              Welcome to our Spanish-based e-commerce store! We offer a wide range of electronics at competitive prices, and we ship our products throughout Europe and the UK. We strive to provide our customers with the best possible shopping experience, which is why we accept ETH as a payment option, in addition to other traditional payment methods.
            </p>
            <p>
              At our store, we understand the importance of reliable and efficient shipping, which is why we have partnered with trusted shipping providers(DHL, GLS, FedEx), to ensure that your orders are delivered promptly and safely.
            </p>            
            <p>
              Our team is passionate about electronics, and we are dedicated to offering you the latest and greatest technology on the market. We carefully curate our product selection to ensure that we only offer products that meet our high standards for quality and performance.
            </p>            
            <p>
              If you have any questions or concerns about our products or services, our customer service team is always ready to assist you. We are committed to providing excellent customer service, and we will do everything we can to ensure that you are satisfied with your purchase.
            </p>            
            <p>
              Thank you for choosing our e-commerce store for your electronics needs. We look forward to serving you and providing you with a seamless and enjoyable shopping experience!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TextWithImageOne;
