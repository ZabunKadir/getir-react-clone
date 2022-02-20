//Slider Package
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper";
//Slider Css Conf
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Pagination, Navigation, Autoplay]);
const SliderWrapper = () => {
  const phoneImages = [
    { index: 1, url: "images/banners/et_banner_tr.jpeg" },
    { index: 2, url: "images/banners/market_banner_tr.jpeg" },
    { index: 3, url: "images/banners/moto_banner_tr.jpeg" },
  ];

  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={false}
      className="slider"
    >
      {phoneImages?.map((item, index) =>
        item ? (
          <SwiperSlide key={index}>
            <button className="slider__button">
              <img alt="banner" className="slider__image" src={item.url} />
            </button>
          </SwiperSlide>
        ) : null
      )}
    </Swiper>
  );
};

export default SliderWrapper;
