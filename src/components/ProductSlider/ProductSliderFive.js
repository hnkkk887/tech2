import { useSelector } from "react-redux";
import Swiper, { SwiperSlide } from "../swiper";
import ProductGridTwo from "../ProductThumb/ProductGridTwo";
import { getDiscountPrice } from "../../lib/product";

//thumbs
const params = {
  loop: false,
  slidesPerView: 4,
  grabCursor: true,
  spaceBetween: 30,
  observer: true,
  observeParents: true,
  navigation: true,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    }
  }
};

const ProductSliderFive = ({ products, sign }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  // async function changeCurrency(discountedPrice, productPrice) {
  //   await convert.ready();
  //   return {
  //     discountedPrice: convert.USD.GBP(discountedPrice),
  //     productPrice: convert.USD.GBP(productPrice)
  //   }
  // }

  // useEffect(() => {
  //   (async function() {
  //     if(sign !== "eur") {
  //       await convert.ready();
  //       // let gbp = convert.USD.GBP(discountedPrice);
  //       // setDiscountedPriceV(bgp);
  //     }
  //   })()
  // }, [])

  return (
    <div className="product-slider-wrap position-relative">
      {!!products?.length ? (
        <Swiper options={params} navClass="prod-slider-five">
          {products.map((product) => {
            let discountedPrice = getDiscountPrice(
              product.price,
              product.discount
            ).toFixed(2);            
            
            let discountedPriceGBP = getDiscountPrice(
              product.priceGBP,
              product.discount
            ).toFixed(2);
            
            let productPrice = product.price.toFixed(2);
            let productPriceGBP = product.priceGBP.toFixed(2);

            // if(sign !== "eur") {
            //   changeCurrency(discountedPrice, productPrice).then(r => {
            //     console.log(productPrice, "first");
            //     console.log(r.productPrice, "after");

            //     discountedPrice = r.discountedPrice;
            //     productPrice = r.productPrice;
            //   });
            // }

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
              <SwiperSlide key={product._id}>
                <ProductGridTwo
                  product={product}
                  discountedPrice={sign === "eur" ? discountedPrice : discountedPriceGBP}
                  productPrice={sign === "eur" ? productPrice : productPriceGBP}
                  cartItem={cartItem}
                  wishlistItem={wishlistItem}
                  compareItem={compareItem}
                  sign={sign}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : null}
    </div>
  );
};

export default ProductSliderFive;
