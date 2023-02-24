import { useSelector } from "react-redux";
import { getProducts } from "../../lib/product";
import { LayoutOne } from "../../layouts";
import { HeroSliderOne } from "../../components/HeroSlider";
import { BannerOne, BannerTwo } from "../../components/Banner";
import { ProductTab } from "../../components/ProductTab";
import { ProductSliderOne } from "../../components/ProductSlider";
import { TestimonialOne } from "../../components/Testimonial";
import { IconBoxOne } from "../../components/IconBox";

import heroSliderOneData from "../../data/hero-sliders/hero-slider-one.json";
import testimonialOneData from "../../data/testimonials/testimonial-one.json";

const FashionOne = () => {
  const { products } = useSelector((state) => state.product);
  const featuredProducts = getProducts(products, "fashion", "featured", 8);
  const newProducts = getProducts(products, "fashion", "new", 8);
  const bestSellerProducts = getProducts(products, "fashion", "popular", 8);
  const saleProducts = getProducts(products, "fashion", "sale", 8);

  return (
    <LayoutOne>
      {/* hero slider */}
      <HeroSliderOne heroSliderData={heroSliderOneData} />
      {/* double banner */}
      <BannerTwo />
      {/* tab product */}
      <ProductTab
        title="Exclusive Products"
        newProducts={newProducts}
        bestSellerProducts={bestSellerProducts}
        featuredProducts={featuredProducts}
        saleProducts={saleProducts}
      />
      {/* single banner */}
      <BannerOne />
      {/* product slider */}
      <ProductSliderOne title="Featured Products" products={featuredProducts} />
      {/* testimonial */}
      <TestimonialOne testimonialData={testimonialOneData} />
      {/* icon box */}
      <IconBoxOne />
    </LayoutOne>
  );
};

export default FashionOne;
