import { Fragment, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import {
  getIndividualCategories,
  getIndividualTags,
  getIndividualColors,
  getProductsIndividualSizes,
  getProducts,
  getDiscountPrice,
  setActiveSort
} from "../../lib/product";
import { ProductRating } from "../../components/Product";
import { useRouter } from 'next/router';

const Sidebar = ({ products, getSortParams }) => {
  const categories = ["computer", "mobile&tablet", "camera", "accessories", "gaming", "watches", "tv", "cryptocurrency mining"];
  // const colors = getIndividualColors(products);
  // const sizes = getProductsIndividualSizes(products);
  // console.log(products[0].category[0])
  const tags = getIndividualTags(products);
  const [popularProducts, setPopularProducts] = useState([]);
  // const popularProducts = getProducts(products, "computer", "popular", 3);
  const router = useRouter();

  const { locale } = router;
  const sign = locale === "eur" ? "eur" : "gbr";

  useEffect(() => {
    if(products.length) {
      let r = getProducts(products, products[0].category[0], "popular", 3);
      setPopularProducts(r);
    }
  }, [products])

  return (
    <div className="sidebar">
      <div className="widget">
        <h5 className="widget__title">Categories</h5>
        {categories.length > 0 ? (
          <ul className="widget__categories">
            {categories &&
              categories.map((category, key) => {
                return (
                  <li key={key}>
                    <button
                      onClick={(e) => {
                        getSortParams("category", category);
                        setActiveSort(e);
                      }}
                    >
                      <IoIosArrowForward />
                      <span className="categories-name">{category}</span>
                    </button>
                  </li>
                );
              })}
          </ul>
        ) : (
          "No categories found"
        )}
      </div>

      {/* <div className="widget">
        <h5 className="widget__title">Sizes</h5>
        {sizes.length > 0 ? (
          <ul className="widget__sizes">
            <li>
              <button
                onClick={(e) => {
                  getSortParams("size", "");
                  setActiveSort(e);
                }}
              >
                All sizes
              </button>
            </li>
            {sizes.map((size, i) => {
              return (
                <li key={i}>
                  <button
                    onClick={(e) => {
                      getSortParams("size", size);
                      setActiveSort(e);
                    }}
                  >
                    {size}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          "No sizes found"
        )}
      </div> */}

      {/* <div className="widget">
        <h5 className="widget__title">Colors</h5>
        {categories.length > 0 ? (
          <ul className="widget__colors">
            {colors.map((color, key) => {
              return (
                <li key={key}>
                  <button
                    onClick={(e) => {
                      getSortParams("color", color.colorName);
                      setActiveSort(e);
                    }}
                    style={{ backgroundColor: color.colorCode }}
                  ></button>
                </li>
              );
            })}
            <li>
              <button
                onClick={(e) => {
                  getSortParams("color", "");
                  setActiveSort(e);
                }}
              >
                x
              </button>
            </li>
          </ul>
        ) : (
          "No colors found"
        )}
      </div> */}

      <div className="widget">
        <h5 className="widget__title">Popular Items</h5>
        {popularProducts.length > 0 ? (
          <ul className="widget-recent-post-wrapper">
            {popularProducts &&
              popularProducts.map((product, key) => {
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
                  <li className="widget-product-post" key={key}>
                    <div className="widget-product-post__image">
                      <Link href={"/shop/product-basic/" + product.slug}>
                        <img src={product.thumbImage[0]} alt="shop_small1" />
                      </Link>
                    </div>
                    <div className="widget-product-post__content">
                      <h6 className="product-title">
                        <Link href={"/shop/product-basic/" + product.slug}>
                          {product.name}
                        </Link>
                      </h6>
                      <div className="product-price">
                        {product.discount ? (
                          <Fragment>
                            <span className="price">{sign === "eur" ? "Є" : "£"}{discountedPrice}</span>
                            <del>{sign === "eur" ? "Є" : "£"}{productPrice}</del>
                          </Fragment>
                        ) : (
                          <span className="price">{sign === "eur" ? "Є" : "£"}{productPrice}</span>
                        )}
                      </div>
                      <div className="rating-wrap">
                        <ProductRating ratingValue={product.rating} />
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        ) : (
          "No products found"
        )}
      </div>

      <div className="widget">
        <h5 className="widget__title">tags</h5>
        {tags.length > 0 ? (
          <div className="widget__tags">
            {tags &&
              tags.map((tag, key) => {
                return (
                  <button
                    key={key}
                    onClick={(e) => {
                      getSortParams("tag", tag);
                      setActiveSort(e);
                    }}
                  >
                    {tag}
                  </button>
                );
              })}
          </div>
        ) : (
          "No tags found"
        )}
      </div>

      <div className="widget">
        <div className="shop-banner">
          <div className="banner-img">
            <img
              src="/assets/images/banner/shop_banner_img11.jpg"
              alt="sidebar_banner_img"
            />
          </div>
          <div className="shop-bn-content2">
            <Link
              href="/shop/product-basic/63f1018f9c1789a33df5845a"
              className="btn btn-primary rounded-0 btn-sm text-uppercase">
                Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
