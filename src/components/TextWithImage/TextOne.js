import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import cogoToast from "@hasanm95/cogo-toast";

const TextOne = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = e => setData(prev => ({...prev, [e.target.name]: e.target.value}));

  function handleSubmit(e) {
    e.preventDefault();
    cogoToast.info("You'll receive a unique referral link that you can share with your audience through your website, social media, email, or other channels.", { position: "bottom-left" });

    setData({
      name: "",
      email: "",
      phone: ""
    });
  }

  return (
    <div className="text-image-section space-pb--r100">
      <Container>
        <Row className="align-items-center">
          <Col>
            <p>
              Join our affiliate program and start earning points for every product you sell! Here's how it works:
            </p>

            <ol>
              <li>Sign up for our affiliate program and get your unique referral link.</li>
              <li>Share your referral link with your audience through your website, social media, or other channels.</li>
              <li>When someone clicks on your link and makes a purchase on our website, you earn points that can be redeemed for discount coupons on future purchases.</li>
              <li>The more products you sell, the more points you earn. And the more points you earn, the more discount coupons you can win.</li>
            </ol>

            <p>
              We value our affiliates and want to reward them for their hard work. That's why we offer a simple and straightforward affiliate program that makes it easy to earn rewards for your sales. Whether you're a blogger, influencer, or simply a fan of our products, you can join our program and start earning points today.
            </p>

            <p>
              So why wait? Sign up for our affiliate program and start earning points for every product you sell. Redeem your points for discount coupons and save even more on your favorite products
            </p>            
          </Col>
        </Row>
      </Container>

      <div className="contact-form-map-area">
          <Container>
            <Row>
              <Col lg={8}>

                <p className="leads">
                  Have a question, comment, or concern? We're here to help! Simply fill out the form below and we'll get back to you as soon as possible.
                </p>
                <div className="field-form">
                  <form method="post" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <input
                          required
                          placeholder="Enter Name *"
                          className="form-control"
                          name="name"
                          type="text"
                          autoFocus
                          value={data.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3 col-md-6">
                        <input
                          required
                          placeholder="Enter Email *"
                          className="form-control"
                          name="email"
                          type="email"
                          value={data.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3 col-md-6">
                        <input
                          required
                          placeholder="Enter Phone No. *"
                          className="form-control"
                          name="phone"
                          value={data.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-12">
                        <button
                          type="submit"
                          title="Submit Your Message!"
                          className="btn btn-fill-out"
                          id="submitButton"
                          name="submit"
                          value="Submit"
                        >
                          Join
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    </div>
  );
};

export default TextOne;
