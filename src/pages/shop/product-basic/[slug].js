import Link from "next/link";
import { useState, useEffect } from "react";
import { getProduct } from "../../../store/slices/product-slice";
import { useRouter } from 'next/router';
import { Spinner, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getDiscountPrice } from "../../../lib/product";
import { LayoutOne } from "../../../layouts";
import { BreadcrumbOne } from "../../../components/Breadcrumb";
import {
  ImageGalleryBottomThumb,
  ProductDescription,
  ProductDescriptionTab
} from "../../../components/ProductDetails";
// import products from "../../../data/products.json";
import { ProductSliderTwo } from "../../../components/ProductSlider";

const ProductBasic = () => {
  const product = useSelector((state) => state.product.product);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  let productPrice,
  discountedPrice,
  discountedPriceGBP;

  const router = useRouter();
  const dispatch = useDispatch();
  const { locale } = router;
  const sign = locale === "eur" ? "eur" : "gbr";
  const relatedProducts = product.related;

  if(product.related.length) {
    discountedPrice = getDiscountPrice(
      product.price,
      product.discount
    ).toFixed(2);

    discountedPriceGBP = getDiscountPrice(
      product.priceGBP,
      product.discount
    ).toFixed(2);

    productPrice = locale === "eur" ? product.price.toFixed(2) : product.priceGBP.toFixed(2);
  }

  const cartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );
  const wishlistItem = wishlistItems.find(
    (wishlistItem) => wishlistItem.id === product.id
  );
  const compareItem = compareItems.find(
    (compareItem) => compareItem.id === product.id
  );

  useEffect(() => {
    if(router.query.slug) {
      dispatch(getProduct(router.query.slug));
    }
  }, [router.query.slug])

  if(!product.related.length) {
    return (
      <LayoutOne>
        {/* breadcrumb */}
        <BreadcrumbOne pageTitle={product.name}>
          <ol className="breadcrumb justify-content-md-end">
            <li className="breadcrumb-item">
              <Link href="/">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/shop/grid-left-sidebar">
                Shop
              </Link>
            </li>
            <li className="breadcrumb-item active">{product.name}</li>
          </ol>
        </BreadcrumbOne>
        <div style={{display: "flex", width: "100%", marginBottom: "30px", justifyContent: "center"}}>
          <Spinner animation="border" />
        </div>
      </LayoutOne>
    )
  }

  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle={product.name}>
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/shop/grid-left-sidebar">
              Shop
            </Link>
          </li>
          <li className="breadcrumb-item active">{product.name}</li>
        </ol>
      </BreadcrumbOne>

      {/* product details */}
      <div className="product-details space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col lg={6} className="space-mb-mobile-only--40">
              {/* image gallery */}
              <ImageGalleryBottomThumb product={product} />
            </Col>
            <Col lg={6}>
              {/* product description */}
              <ProductDescription
                product={product}
                productPrice={productPrice}
                discountedPrice={sign === "eur" ? discountedPrice : discountedPriceGBP}
                cartItems={cartItems}
                cartItem={cartItem}
                wishlistItem={wishlistItem}
                compareItem={compareItem}
                sign={sign}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              {/* product description tab */}
              <ProductDescriptionTab product={product} />
            </Col>
          </Row>

          {/* related product slider */}
          <ProductSliderTwo
            title="Related Products"
            products={relatedProducts}
            sign={sign}
          />
        </Container>
      </div>
    </LayoutOne>
  );
};

export default ProductBasic;

// export async function getStaticPaths() {
//   // get the paths we want to pre render based on products
//   const paths = products.map((product) => ({
//     params: { slug: product.slug }
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   // get product data based on slug
//   const product = products.filter((single) => single.slug === params.slug)[0];

//   return { props: { product } };
// }
