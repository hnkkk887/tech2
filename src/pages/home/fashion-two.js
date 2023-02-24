import { useSelector } from "react-redux";
import { LayoutTwo } from "../../layouts";
import { getProducts } from "../../lib/product";
import { BannerTwo, BannerThree } from "../../components/Banner";
import { ProductTabTwo } from "../../components/ProductTab";
import {
  ProductSliderThree,
  ProductSliderFour
} from "../../components/ProductSlider";
import { BrandLogoOne } from "../../components/BrandLogo";
import { HeroSliderTwo } from "../../components/HeroSlider";

import heroSliderTwoData from "../../data/hero-sliders/hero-slider-two.json";
import brandLogoData from "../../data/brand-logo/brand-logo-one.json";

const FashionTwo = () => {
  const { products } = useSelector((state) => state.product);
  const featuredProducts = getProducts(products, "fashion", "featured", 8);
  const newProducts = getProducts(products, "fashion", "new", 8);
  const bestSellerProducts = getProducts(products, "fashion", "popular", 10);
  const saleProducts = getProducts(products, "fashion", "sale", 8);

  return (
    <LayoutTwo navPositionClass="justify-content-start">
      {/* hero slider */}
      <HeroSliderTwo heroSliderData={heroSliderTwoData} />
      {/* tab product */}
      <ProductTabTwo
        title="Exclusive Products"
        newProducts={newProducts}
        bestSellerProducts={bestSellerProducts}
        featuredProducts={featuredProducts}
        saleProducts={saleProducts}
      />
      {/* banner */}
      <BannerTwo />
      {/* product slider */}
      <ProductSliderThree
        title="Deal Of The Day"
        products={saleProducts}
        dateTime="July 07, 2024 12:12:00"
      />
      {/* banner */}
      <BannerThree />
      {/* product slider */}
      <ProductSliderFour
        title="Bestseller Products"
        products={bestSellerProducts}
      />
      {/* brand logo */}
      <BrandLogoOne title="Our Brands" brandLogoData={brandLogoData} />
    </LayoutTwo>
  );
};

export default FashionTwo;
