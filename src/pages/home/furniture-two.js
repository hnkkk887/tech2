import { useSelector } from "react-redux";
import { getProducts } from "../../lib/product";
import { LayoutFour } from "../../layouts";
import { HeroSliderFour } from "../../components/HeroSlider";
import { CategorySliderOne } from "../../components/CategorySlider";
import { ProductGridTwo } from "../../components/ProductGrid";
import { CountdownOne } from "../../components/Countdown";
import { ProductSliderSeven } from "../../components/ProductSlider";
import { BlogGrid } from "../../components/Blog";

import heroSliderFourData from "../../data/hero-sliders/hero-slider-four.json";
import categorySliderData from "../../data/category-sliders/category-slider-one.json";

const FurnitureTwo = () => {
  const { products } = useSelector((state) => state.product);
  const saleProducts = getProducts(products, "furniture", "sale", 8);
  const bestSellerProducts = getProducts(products, "furniture", "popular", 8);

  return (
    <LayoutFour navPositionClass="justify-content-center">
      {/* hero slider */}
      <HeroSliderFour heroSliderData={heroSliderFourData} />
      {/* category slider */}
      <CategorySliderOne
        title="Top Categories"
        text="There are many variations of passages of Lorem"
        url="/shop/grid-left-sidebar"
        categorySliderData={categorySliderData}
      />
      {/* grid product */}
      <ProductGridTwo
        title="Our Top Products"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim Nullam nunc varius."
        products={bestSellerProducts}
      />
      {/* countdown */}
      <CountdownOne
        backgroundImage="/assets/images/banner/furniture_banner3.jpg"
        title="Sale 40% Off"
        subtitle="Big Sale Deal"
        url="/shop/grid-left-sidebar"
        dateTime="July 07, 2024 12:12:00"
      />
      {/* product slider */}
      <ProductSliderSeven
        title="Special Offers"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim Nullam nunc varius."
        products={saleProducts}
      />
      {/* blog grid */}
      <BlogGrid />
    </LayoutFour>
  );
};


export default FurnitureTwo;
