import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { Row, Col } from "react-bootstrap"; "react-redux";
import clsx from "clsx";
import { getDiscountPrice } from "../../lib/product";
import ProductGridList from "./ProductGridList";

const ProductGridListWrapper = ({ products, bottomSpace, layout }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  const router = useRouter();

  const { locale } = router;
  const sign = locale === "eur" ? "eur" : "gbr";
  
  return (
    <Row className={layout}>
      {products &&
        products.map((product) => {
          const discountedPrice = getDiscountPrice(
            product.price,
            product.discount
          ).toFixed(2);

          let discountedPriceGBP = getDiscountPrice(
            product.priceGBP,
            product.discount
          ).toFixed(2);

          const productPrice = product.price.toFixed(2);
          let productPriceGBP = product.priceGBP.toFixed(2);

          const cartItem = cartItems.find(
            (cartItem) => cartItem.id === product.id
          );
          const wishlistItem = wishlistItems.find(
            (wishlistItem) => wishlistItem.id === product.id
          );
          const compareItem = compareItems.find(
            (compareItem) => compareItem.id === product.id
          );

          return (
            <Col lg={4} sm={6} className={clsx(bottomSpace)}>
              <ProductGridList
                key={product._id}
                product={product}
                discountedPrice={sign === "eur" ? discountedPrice : discountedPriceGBP}
                productPrice={sign === "eur" ? productPrice : productPriceGBP}
                cartItem={cartItem}
                wishlistItem={wishlistItem}
                compareItem={compareItem}
              />
            </Col>
          );
        })}
    </Row>
  );
};

export default ProductGridListWrapper;
