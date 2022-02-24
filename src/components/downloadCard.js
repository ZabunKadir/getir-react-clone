import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const DownloadCard = ({ language, size }) => {
  const [screenSize, setScreenSize] = useState(400);
  const [titleByLanguage, setTitleByLanguage] = useState("Getir'i indirin!");
  const [contextByLanguage, setContextByLanguage] = useState(
    "İstediğiniz ürünleri dakikalar içinde kapınıza getirelim."
  );
  const languageControl = (language) => {
    if (language === "tr-TR") {
      setTitleByLanguage("Getir'i indirin!");
      setContextByLanguage(
        "İstediğiniz ürünleri dakikalar içinde kapınıza getirelim."
      );
    } else if (language === "en-EN") {
      setTitleByLanguage("Download Getir!");
      setContextByLanguage(
        "Let us deliver your order to your door in minutes."
      );
    } else {
      setTitleByLanguage("Download Getir!");
      setContextByLanguage(
        "Let us deliver your order to your door in minutes."
      );
    }
  };
  useEffect(() => {
    languageControl(language);
    setScreenSize(size);
  }, [language, size]);
  return (
    <section className="download-card__section">
      <div className="download-card__block">
        <h2 className="download-card__title font--bold">{titleByLanguage}</h2>
        <span className="download-card__context">{contextByLanguage}</span>
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
