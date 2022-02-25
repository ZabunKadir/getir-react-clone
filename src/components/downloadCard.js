import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const DownloadCard = ({ language, size, title, content }) => {
  const [screenSize, setScreenSize] = useState(400);
  const [titleByLanguage, setTitleByLanguage] = useState(title);
  const [contentByLanguage, setContentByLanguage] = useState(content);

  useEffect(() => {
    setScreenSize(size);
  }, [language, size]);

  return (
    <section className="download-card__section">
      <div className="download-card__block">
        <h2 className="download-card__title font--bold">{titleByLanguage}</h2>
        <span className="download-card__context">
          {language === "tr-TR"
            ? contentByLanguage?.contentTR
            : contentByLanguage?.contentEN}
        </span>
        <div className="download-card__buttons">
          <div className="download-card__item">
            <Link to="" className="download-card__button">
              <img
                alt="app-store"
                className="download-card__img"
                src="images/appstore-tr.svg"
              ></img>
            </Link>
          </div>
          <div className="download-card__item">
            <Link to="" className="download-card__button">
              <img
                alt="google-play"
                className="download-card__img"
                src="images/googleplay-tr.svg"
              ></img>
            </Link>
          </div>
          <div className="download-card__item">
            <Link to="" className="download-card__button">
              <img
                alt="app-gallery"
                className="download-card__img"
                src="images/huawei-appgallery-tr.svg"
              ></img>
            </Link>
          </div>
        </div>
      </div>
      {screenSize > 767 && (
        <div className="download-card__phone">
          <img
            className="dowload-card__phone__img"
            alt="phone-landing"
            src="images/phoneLanding.png"
          ></img>
        </div>
      )}
    </section>
  );
};
export default DownloadCard;
