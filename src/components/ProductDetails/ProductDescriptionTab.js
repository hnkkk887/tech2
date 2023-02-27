import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { useState } from "react";
import cogoToast from "@hasanm95/cogo-toast";
import { ProductRating } from "../Product";

const ProductDescriptionTab = ({ product }) => {
  const [data, setData] = useState({
    review: "",
    name: "",
    email: ""
  });

  const handleChange = e => setData(prev => ({...prev, [e.target.name]: e.target.value}));

  function handleSubmit(e) {
    e.preventDefault();
    cogoToast.error("In order to write a review you have to buy the product", { position: "bottom-left" });
  }

  return (
    <div className="product-description-tab space-pt--r100 space-pb--50">
      <Tab.Container defaultActiveKey="description">
        <Nav
          variant="pills"
          className="product-description-tab__navigation space-mb--50"
        >
          <Nav.Item>
            <Nav.Link eventKey="description">DESCRIPTION</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="additionalInfo">ADDITIONAL INFO</Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link eventKey="reviews">
              REVIEWS
            </Nav.Link>
          </Nav.Item> */}
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="description">
            <div className="product-description-tab__details">
              {product.fullDescription}
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="additionalInfo">
            <div className="product-description-tab__additional-info">
              <table className="table table-bordered">
                <tbody>
                  {product.additional.map(e => <tr key={e.name}>
                    <td>{e.name}</td>  
                    <td>{e.val}</td> 
                  </tr>)}
                </tbody>
              </table>
            </div>
          </Tab.Pane>
          {/* <Tab.Pane eventKey="reviews">
            <div className="product-description-tab__review">
              <div className="comments">
                <h5 className="product-tab-title">
                  Review For <span>{product.name}</span>
                </h5>
                <ul className="list-none comment-list mt-4">
                  {product.reviews.length 
                    ? product.reviews.map(p => <li key={p._id}>
                      <div className="comment-img">
                        <img src="/assets/images/users/user1.jpg" alt="user1" />
                      </div>

                      <div className="comment-block">
                        <div className="rating-wrap">
                              <div className="rating">
                                <ProductRating ratingValue={p.stars} />
                              </div>
                            </div>
                      <p className="customer-meta">
                        <span className="review-author">{p.name}</span>
                        <span className="comment-date">{p.date}</span>
                      </p>
                      <div className="description">
                        <p>
                          {p.review}
                        </p>
                      </div>
                      </div>
                    </li>)
                    : <span>No customer reviews</span>
                  }
                  <li>
                    <div className="comment-img">
                      <img src="/assets/images/users/user1.jpg" alt="user1" />
                    </div>
                    <div className="comment-block">
                      <div className="rating-wrap">
                        <div className="rating">
                          <ProductRating ratingValue={p.starts} />
                        </div>
                      </div>
                      <p className="customer-meta">
                        <span className="review-author">Alea Brooks</span>
                        <span className="comment-date">March 5, 2020</span>
                      </p>
                      <div className="description">
                        <p>
                          Lorem Ipsumin gravida nibh vel velit auctor aliquet.
                          Aenean sollicitudin, lorem quis bibendum auctor, nisi
                          elit consequat ipsum, nec sagittis sem nibh id elit.
                          Duis sed odio sit amet nibh vulputate
                        </p>
                      </div>
                    </div>
                  </li>

                </ul>
              </div>
              <div className="review-form field-form">
                <h5>Add a review</h5>
                <form className="row mt-3" onSubmit={handleSubmit}>
                  <div className="mb-3 col-12">
                    <span className="product-rating">
                      <IoIosStarOutline />
                      <IoIosStarOutline />
                      <IoIosStarOutline />
                      <IoIosStarOutline />
                      <IoIosStarOutline />
                    </span>
                  </div>
                  <div className="mb-3 col-12">
                    <textarea
                      required="required"
                      placeholder="Your review *"
                      className="form-control"
                      name="review"
                      value={data.review}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <input
                      required="required"
                      placeholder="Enter Name *"
                      className="form-control"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                      type="text"
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <input
                      required="required"
                      placeholder="Enter Email *"
                      className="form-control"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      type="email"
                    />
                  </div>
                  <div className="mb-3 col-12">
                    <button
                      type="submit"
                      className="btn btn-fill-out"
                      name="submit"
                      value="Submit"
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Tab.Pane> */}
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default ProductDescriptionTab;
