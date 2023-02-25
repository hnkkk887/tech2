import { Fragment } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosClose } from "react-icons/io";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { addToCart } from "../../store/slices/cart-slice";
import { deleteFromCompare } from "../../store/slices/compare-slice";
import { ProductRating } from "../../components/Product";
import { getDiscountPrice } from "../../lib/product";
import { LayoutOne } from "../../layouts";
import { useRouter } from 'next/router';

const Compare = () => {
  const dispatch = useDispatch();
  const { compareItems } = useSelector((state) => state.compare);
  const { cartItems } = useSelector((state) => state.cart);

  const router = useRouter();

  const { locale } = router;
  const sign = locale === "eur" ? "eur" : "gbr";

  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Compare">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active">Compare</li>
        </ol>
      </BreadcrumbOne>
      <div className="compare-content space-pt--r100 space-pb--r100">
        <Container>
          {compareItems && compareItems.length >= 1 ? (
            <Row>
              <Col>
                <div className="compare-box">
                  <div className="table-responsive">
                    <table className="table table-bordered text-center">
                      <tbody>
                        <tr className="pr_image">
                          <td className="row-title">Product Image</td>
                          {compareItems.map((product, key) => {
                            return (
                              <td className="row_img" key={key}>
                                <img
                                  src={product.thumbImage[0]}
                                  style={{ objectFit: "contain", height: "240px" }}
                                  alt="compare-img"
                                />
                              </td>
                            );
                          })}
                        </tr>
                        <tr className="pr_title">
                          <td className="row-title">Product Name</td>
                          {compareItems.map((product, key) => {
                            return (
                              <td className="product-name" key={key}>
                                <Link href={`/shop/product-basic/${product.slug}`}>
                                  {product.name}
                                </Link>
                              </td>
                            );
                          })}
                        </tr>
                        <tr className="pr-price">
                          <td className="row-title">Price</td>
                          {compareItems.map((product, key) => {
                          let v = getDiscountPrice(
                            product.price,
                            product.discount
                          ).toFixed(2);

                          if(sign !== "eur") {
                            v = getDiscountPrice(
                              product.priceGBP,
                              product.discount
                            ).toFixed(2);    
                          }

                          const discountedPrice = v;

                          const productPrice = sign === "eur" ? product.price.toFixed(2) : product.priceGBP.toFixed(2);
                          return (
                              <td className="product-price" key={key}>
                                {product.discount ? (
                                  <Fragment>
                                    <span className="price" style={{marginRight: "5px"}}>
                                    {sign === "eur" ? "Є" : "£"}{discountedPrice}
                                    </span>
                                    <del>{sign === "eur" ? "Є" : "£"}{productPrice}</del>
                                  </Fragment>
                                ) : (
                                  <span className="price"> {sign === "eur" ? "Є" : "£"}{productPrice}</span>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                        <tr className="pr-rating">
                          <td className="row-title">Rating</td>

                          {compareItems.map((product, key) => {
                            return (
                              <td key={key}>
                                <div className="rating-wrap">
                                  <ProductRating ratingValue={product.rating} />
                                  <span className="rating-num">
                                    ({product.ratingCount})
                                  </span>
                                </div>
                              </td>
                            );
                          })}
                        </tr>
                        <tr className="pr_add_to_cart">
                          <td className="row-title">Add To Cart</td>
                          {compareItems.map((product, key) => {
                            const cartItem = cartItems.filter(
                              (item) => item.id === product.id
                            )[0];
                            return (
                              <td className="row_btn" key={key}>
                                {product.affiliateLink ? (
                                  <a
                                    href={product.affiliateLink}
                                    target="_blank"
                                    className="btn btn-fill-out"
                                  >
                                    Buy now
                                  </a>
                                ) : product.variation &&
                                  product.variation.length >= 1 ? (
                                  <Link href={`/shop/product-basic/${product.slug}`} className="btn btn-fill-out">
                                      Select option
                                  </Link>
                                ) : product.stock && product.stock > 0 ? (
                                  <button
                                    onClick={() => dispatch(addToCart(product))}
                                    className={` btn btn-fill-out ${
                                      cartItem !== undefined &&
                                      cartItem.quantity > 0
                                        ? "active"
                                        : ""
                                    } `}
                                    disabled={
                                      cartItem !== undefined &&
                                      cartItem.quantity > 0
                                    }
                                    title={
                                      product !== undefined
                                        ? "Added to cart"
                                        : "Add to cart"
                                    }
                                  >
                                    {cartItem !== undefined &&
                                    cartItem.quantity > 0
                                      ? "Added"
                                      : "Add to cart"}
                                  </button>
                                ) : (
                                  <button disabled className="btn btn-fill-out">
                                    Out of stock
                                  </button>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                        <tr className="description">
                          <td className="row-title">Description</td>
                          {compareItems.map((product, key) => {
                            return (
                              <td className="row-text" key={key}>
                                <p>{product.shortDescription} </p>
                              </td>
                            );
                          })}
                        </tr>
                        <tr className="pr-remove">
                          <td className="row-title"></td>
                          {compareItems.map((product, key) => {
                            return (
                              <td className="row-remove" key={key}>
                                <button
                                  onClick={() =>
                                    dispatch(deleteFromCompare(product.id))
                                  }
                                >
                                  <IoIosClose />
                                </button>
                              </td>
                            );
                          })}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <i className="icon-shuffle" />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">No items found in compare</p>
                    <Link href="/shop/grid-left-sidebar" className="btn btn-fill-out">
                      Add Some
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </LayoutOne>
  );
};

export default Compare;
