//Slider Package
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
//Slider Css Conf
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState, useEffect } from "react";
SwiperCore.use([Pagination, Navigation, Autoplay]);
const SliderWrapper = ({
  language,
  size,
  content,
  isPromotion,
  promotionTitle,
}) => {
  const [titleByLanguage, setTitleByLanguage] = useState(promotionTitle);
  const [type, setType] = useState(null);
  const phoneImages = [
    { index: 1, url: "images/banners/et_banner_tr.jpeg" },
    { index: 2, url: "images/banners/market_banner_tr.jpeg" },
    { index: 3, url: "images/banners/moto_banner_tr.jpeg" },
  ];
  useEffect(() => {
    if (size < 768) {
      setType("mobile");
    } else if (size >= 768 && size < 1024) {
      setType("tablet");
    } else if (size >= 1024 && size < 1440) {
      setType("laptop");
    } else {
      setType("large");
    }
  }, [size]);

  return (
    <section className="slider__section">
      <div className="slider__container">
        {isPromotion && (
          <div className="slider__title font--bold">{titleByLanguage}</div>
        )}
        <div>
          <Swiper
            slidesPerView={
              type === "mobile"
                ? 1
                : type === "tablet"
                ? 1.5
                : type === "laptop"
                ? 2
                : 3
            }
            slidesPerGroup={1}
            spaceBetween={10}
            loopFillGroupWithBlank={false}
            centeredSlides={true}
            autoplay={{
              delay: type === "mobile" ? 1500 : 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={false}
            className="slider"
          >
            {phoneImages?.map((item, index) =>
              item ? (
                <SwiperSlide key={index}>
                  <div className="slider-button__container">
                    <button className="slider__button">
                      <img
                        alt="banner"
                        className={`slider__image ${
                          type !== "mobile" && "slider--rounded"
                        } `}
                        src={item.url}
                      />
                    </button>
                  </div>
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SliderWrapper;
