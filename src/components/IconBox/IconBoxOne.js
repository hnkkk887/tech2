import { Container, Row, Col } from "react-bootstrap";

const IconBoxOne = () => {
  return (
    <div className="icon-box-area space-pb--r70">
      <Container>
        <Row className="gx-0">
          <Col lg={4}>
            <div className="icon-box icon-box--style1">
              <div className="icon-box__icon">
                <i className="flaticon-shipped" />
              </div>
              <div className="icon-box__content">
                <h5>Free Delivery</h5>
                <p>
                  We believe in providing the best value and service to our customers. That's why we offer free shipping on qualifying orders. If you have any questions or concerns about our shipping policies, please don't hesitate to contact us. We're always here to help.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="icon-box icon-box--style1">
              <div className="icon-box__icon">
                <i className="flaticon-money-back" />
              </div>
              <div className="icon-box__content">
                <h5>30 Day Return</h5>
                <p>
                  We want you to be completely satisfied with your purchase. If for any reason you're not happy with your items, you can return them within 30 days for a full refund. To initiate a return, simply contact our customer service team and provide your order number and the reason for the return.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="icon-box icon-box--style1">
              <div className="icon-box__icon">
                <i className="flaticon-support" />
              </div>
              <div className="icon-box__content">
                <h5>27/4 Support</h5>
                <p>
                  We're here to help you whenever you need it. Our customer support team is available 24/7 to assist you with any questions, concerns, or issues you may have. Whether you need help placing an order, tracking your shipment, or making a return, we're always here to assist you.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IconBoxOne;
