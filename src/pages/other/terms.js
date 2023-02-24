import Link from "next/link";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";

const Terms = () => {
  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Terms & Conditions">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active">Terms & Conditions</li>
        </ol>
      </BreadcrumbOne>
      <div className="terms-content space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col>
              <div className="term-conditions">
                <h6>Our Terms &amp; Conditions</h6>
                <p>
                  Acceptance of Terms: By using this website, you agree to be bound by these terms and conditions.
                </p>
                <p>
                  We reserve the right to modify or update these terms and conditions at any time without prior notice. Your continued use of our website following any such changes constitutes your agreement to be bound by the modified terms and conditions.
                </p>
                <hr />
                <h6>Products and Pricing</h6>
                <p>
                  We strive to offer competitive prices for our electronics, and we may periodically adjust our prices to reflect changes in market conditions, availability of products, and other factors. However, we reserve the right to change the prices of our products at any time and without prior notice. While we make every effort to ensure the accuracy of our pricing, errors may occur from time to time. In the event that a product is listed at an incorrect price, we reserve the right to cancel your order and refund your payment.
                </p>
                <p>
                  Product Availability: While we strive to maintain sufficient inventory of all products offered on our website, there may be times when we are unable to fulfill an order due to product unavailability. In such cases, we will promptly notify you and provide an estimated timeline for availability or offer you a refund.
                </p>                
                <h6>Payment</h6>
                <p>
                  We accept payment for orders through a variety of payment methods, including credit card, bank transfer, and ETH. Payment must be made in full at the time of purchase. If paying by credit card, your card will be charged immediately upon completion of your order. If paying by bank transfer, please allow additional time for processing.
                </p>
                <p>
                  Fraud Prevention: In order to prevent fraudulent transactions, we may require additional information or verification from you before processing your order. If we suspect that a transaction may be fraudulent, we reserve the right to cancel the order and refund the payment.
                </p>
                <p>
                  While we strive to maintain a current and relevant inventory, there may be occasions when a product is discontinued or no longer available. In such cases, we reserve the right to remove the product from our website and discontinue any further sales of that product.
                </p>
                <h6>Privacy</h6>
                  <p>We take your privacy seriously and understand the importance of keeping your personal information secure. We are committed to protecting your privacy and ensuring that your personal information is handled in a responsible and transparent manner.</p>
                  <p>We collect personal information, such as your name, address, phone number, and email address, only for the purpose of processing your order and delivering your products to you. We will not sell or rent your personal information to any third party.</p>
                 <p>We may share your personal information with our trusted partners, such as our shipping carriers and payment processors, only as necessary to fulfill your order. We require all of our partners to adhere to the same high standards of privacy and security that we do.</p>
                  <p>We use a variety of security measures to protect your personal information from unauthorized access, use, or disclosure. We regularly review our security practices to ensure that they meet or exceed industry standards.</p>
                  <p>If you have any questions or concerns about our privacy policy, please contact us.</p>

                <h6>Governing Law:</h6>
                  <p>These terms and conditions shall be governed by and construed in accordance with the laws of [your country/state]. Any disputes arising from the use of our website or related to these terms and conditions shall be subject to the exclusive jurisdiction of the courts located in [your country/state]. You hereby consent to the personal jurisdiction of such courts and waive any objection to the venue or convenience of such courts. Any legal action or proceeding arising from or related to these terms and conditions or your use of our website must be brought within [insert time frame, e.g. one year] after the cause of action accrues, or such action or proceeding shall be barred. If any provision of these terms and conditions is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
};

export default Terms;
