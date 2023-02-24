import Link from "next/link";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";

const Shipping = () => {
  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Shipping">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active">Shipping</li>
        </ol>
      </BreadcrumbOne>
      <div className="terms-content space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col>
              <div className="term-conditions">
                {/* <h6>Our Terms &amp; Conditions</h6> */}
                <p>
                  We will make every effort to ship your order as soon as possible after receiving payment. Our standard shipping method is DHL Express, and the shipping cost will be calculated and added to your order at checkout. We will provide you with a tracking number as soon as your order has been shipped.
                </p>
                <p>
                  Delivery times may vary depending on the destination. We will make every effort to ensure that your order arrives on time, but we cannot be held responsible for delays caused by customs, transportation or other factors beyond our control.
                </p>
                <p>For orders over 100 GBP or 100 EUR, shipping is free of charge.</p>

                <p>If you require expedited shipping or have any special shipping requests, please contact us prior to placing your order and we will do our best to accommodate your needs.</p>
                <p>We reserve the right to change our shipping policies at any time without notice. Please check our website regularly for the most up-to-date shipping information.</p>
                <hr />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
};

export default Shipping;