import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { EffectFade } from "swiper";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  modules: [EffectFade],
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: true
};

const HeroSliderThree = ({ heroSliderData }) => {
  return (
    <div className="hero-slider space-pb--r100">
      <div className="hero-slider__wrapper hero-slider__wrapper--style-two">
        {!!heroSliderData?.length ? (
          <Swiper options={params} navClass="hero-slider-three">
            {heroSliderData.map((single, key) => (
              <SwiperSlide
                className="hero-slider__slide hero-slider__slide--style-two bg-image"
                style={{
                  backgroundImage: `url(${single.backgroundImage})`
                }}
                key={key}
              >
                <div className="hero-slider__content-wrapper hero-slider__content-wrapper--round-space">
                  <Container>
                    <Row>
                      <Col lg={6}>
                        <div className="hero-slider__content hero-slider__content--style-two overflow-hidden">
                          <h5 className="mb-3 font-weight-light sub-title">
                            {single.subtitle}
                          </h5>
                          <h2 className="space-mb--20 title">
                            {single.title}
                          </h2>
                          <p className="text">{single.text}</p>
                          <Link
                            href={single.url}
                            className="btn btn-line-fill btn-radius staggered-animation text-uppercase slider-link">
                            
                              Shop Now
                            
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>
    </div>
  );
};

export default HeroSliderThree;
