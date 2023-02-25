import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getDiscountPrice } from "../../lib/product";
import { Container, Row, Col } from "react-bootstrap";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { addToCart } from "../../store/slices/cart-slice";
import { deleteFromWishlist } from "../../store/slices/wishlist-slice"
import { IoIosClose } from "react-icons/io";
import { useRouter } from 'next/router';

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { cartItems } = useSelector((state) => state.cart);

  const router = useRouter();

  const { locale } = router;
  const sign = locale === "eur" ? "eur" : "gbr";

  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Wishlist">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active">Wishlist</li>
        </ol>
      </BreadcrumbOne>
      <div className="wishlist-content space-pt--r100 space-pb--r100">
        <Container>
          {wishlistItems && wishlistItems.length >= 1 ? (
            <Row>
              <Col lg={12}>
                <div className="table-responsive shop-cart-table">
                  <table className="table mb-0">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">&nbsp;</th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="add-to-cart">&nbsp;</th>
                        <th className="product-remove text-center">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishlistItems.map((product, key) => {
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

                        const cartItem = cartItems.filter(
                          (item) => item.id === product.id
                        )[0];

                        return (
                          <tr key={key}>
                            <td className="product-thumbnail">
                              <Link href={"/shop/product-basic/" + product.slug}>
                                <img
                                  src={product.thumbImage[0]}
                                  style={{ objectFit: "contain", height: "120px" }}
                                  alt="product1"
                                />
                              </Link>
                            </td>
                            <td className="product-name" data-title="Product">
                              <Link href={"/shop/product-basic/" + product.slug}>
                                {product.name}
                              </Link>
                              {product.selectedProductColor &&
                              product.selectedProductSize ? (
                                <div className="cart-variation">
                                  <p>Color: {product.selectedProductColor}</p>
                                  <p>Size: {product.selectedProductSize}</p>
                                </div>
                              ) : (
                                ""
                              )}
                            </td>
                            <td className="product-price" data-title="Price">
                            {sign === "eur" ? "Є" : "£"}{discountedPrice}
                            </td>

                            <td className="add-to-cart text-center">
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

                            <td className="product-remove">
                              <button
                                onClick={() =>
                                  dispatch(deleteFromWishlist(product.id))
                                }
                              >
                                <IoIosClose />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <i className="icon-heart" />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">No items found in wishlist</p>
                    <Link href="/shop/product-basic/" className="btn btn-fill-out">
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

export default Wishlist;
