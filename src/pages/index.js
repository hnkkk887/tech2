import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../lib/product";
import { LayoutOne, LayoutTwo, LayoutThree, LayoutFour, LayoutFive, LayoutSix } from "../layouts";
import { HeroSliderOne, HeroSliderTwo, HeroSliderThree, HeroSliderFour, HeroSliderFive, HeroSliderSix } from "../components/HeroSlider";
import { BannerOne, BannerTwo, BannerThree, BannerFour, BannerFive, BannerSix } from "../components/Banner";
import { ProductTab, ProductTabTwo, ProductTabThree, ProductTabFour } from "../components/ProductTab";
import { ProductSliderOne, ProductSliderTwo, ProductSliderThree, ProductSliderFour, ProductSliderFive, ProductSliderSix, ProductSliderSeven, ProductSliderEightWrapper, ProductSliderNine, ProductSliderTen, ProductSliderEleven } from "../components/ProductSlider";
import { TestimonialOne } from "../components/Testimonial";
import { IconBoxOne, IconBoxTwo, IconBoxThree } from "../components/IconBox";
import { setHomepage } from "./../store/slices/product-slice";
import { useRouter } from 'next/router';

import heroSliderFiveData from "../data/hero-sliders/hero-slider-five.json";
import testimonialOneData from "../data/testimonials/testimonial-one.json";

const FashionOne = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { homepage } = useSelector((state) => state.product);

  async function submitFn() {
    console.log(`${process.env.NEXT_PUBLIC_URL}/api/products`, "asta eeeee");
    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/products`);
    dispatch(setHomepage(res.data));
  }

  const { locale } = router;
  const sign = locale === "eur" ? "eur" : "gbr";

  // function changeSign(e) {
  //   router.push("/", "/", { locale: e.target.value });
  // }

  useEffect(() => {
    submitFn();
  }, [])

  return (
    <LayoutFive>
      {/* hero slider */}
      <HeroSliderTwo heroSliderData={heroSliderFiveData} />
      {/* double banner */}
      <BannerSix />
      {/* tab product */}
      <ProductTabTwo
        title="Exclusive Products"
        newProducts={homepage.productNew}
        bestSellerProducts={homepage.productPopular}
        featuredProducts={homepage.productFeat}
        saleProducts={homepage.productDiscount}
        sign={sign}
      />
      {/* single banner */}
      <BannerFive />
      {/* product slider */}
      <ProductSliderSix title="Featured Products" products={homepage.productFeat} sign={sign} />
      {/* testimonial */}
      <TestimonialOne testimonialData={testimonialOneData} />
      {/* icon box */}
      <IconBoxOne />
    </LayoutFive>
  );
};

export default FashionOne;
