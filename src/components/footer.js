import { faAngleDown, faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Footer = ({ language, screenSize }) => {
  const [titleByLanguage, setTitleByLanguage] = useState("Getir'i indirin!");
  const [exploreByLanguage, setExploreByLanguage] =
    useState("Getir'i keşfedin");
  const [helpByLanguage, setHelpByLanguage] = useState(
    "Yardıma mı ihtiyacınız var?"
  );
  const [partnerByLanguage, setPartnerByLanguage] =
    useState("İş Ortağımız Olun");
  const [explore, setExplore] = useState(false);
  const [help, setHelp] = useState(false);
  const [partner, setPartner] = useState(false);
  const exploreLinks = [
    { nameTR: "Hakkımızda", nameEN: "", url: "" },
    { nameTR: "Kariyer", nameEN: "", url: "" },
    { nameTR: "Teknoloji Kariyerleri", nameEN: "", url: "" },
    { nameTR: "İletişim", nameEN: "", url: "" },
    { nameTR: "COVID-19 Duyuru", nameEN: "", url: "" },
    { nameTR: "Sosyal Sorumluluk Projeleri", nameEN: "", url: "" },
  ];
  const helpLinks = [
    { nameTR: "Sıkça Sorulan Sorular", nameEN: "", url: "" },
    { nameTR: "Kişisel Verilerin Korunması", nameEN: "", url: "" },
    { nameTR: "Gizlilik Politikası", nameEN: "", url: "" },
    { nameTR: "Kullanım Koşulları", nameEN: "", url: "" },
    { nameTR: "Çerez Politikası", nameEN: "", url: "" },
  ];
  const partnerLinks = [
    { nameTR: "Bayimiz Olun", nameEN: "", url: "" },
    { nameTR: "Deponuzu Kiralayın", nameEN: "", url: "" },
    { nameTR: "GetirYemek Restoranı Olun", nameEN: "", url: "" },
    { nameTR: "GetirÇarşı İşletmesi Olun", nameEN: "", url: "" },
  ];
  const languageControl = (language) => {
    if (language === "tr-TR") {
      setTitleByLanguage("Getir'i indirin!");
      setExploreByLanguage("Getir'i keşfedin");
      setHelpByLanguage("Yardıma mı ihtiyacınız var?");
      setPartnerByLanguage("İş Ortağımız Olun");
    } else if (language === "en-EN") {
      setTitleByLanguage("Download Getir!");
      setExploreByLanguage("Discover Getir");
      setHelpByLanguage("Need help?");
      setPartnerByLanguage("Become Our Business Partner");
    } else {
      setTitleByLanguage("Categories");
      setExploreByLanguage("Discover Getir");
      setHelpByLanguage("Need help?");
      setPartnerByLanguage("Become Our Business Partner");
    }
  };
  useEffect(() => {
    languageControl(language);
    if (screenSize > 767) {
      setExplore(true);
      setHelp(true);
      setPartner(true);
    }
  }, [language, screenSize]);
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <div className="footer__block">
          <div className="footer__download">
            <span className="footer__title">{titleByLanguage}</span>
          </div>
          <div className="footer__download-buttons">
            <div className="download-card__item dowload-button--margin">
              <Link to="" className="download-card__button">
                <img
                  alt="app-store"
                  className="download-card__img"
                  src="images/appstore-tr.svg"
                ></img>
              </Link>
            </div>
            <div className="download-card__item dowload-button--margin">
              <Link to="" className="download-card__button">
                <img
                  alt="google-play"
                  className="download-card__img"
                  src="images/googleplay-tr.svg"
                ></img>
              </Link>
            </div>
            <div className="download-card__item dowload-button--margin">
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
        <div className="footer__dropdown">
          <div className="dropdown__block">
            <button
              onClick={() => {
                setExplore(!explore);
                setHelp(false);
                setPartner(false);
              }}
              className="dropdown__button"
            >
              <span className="dropdown__title">{exploreByLanguage}</span>
              {screenSize < 768 ? (
                <div className="dropdown__icon">
                  <FontAwesomeIcon
                    className={`${
                      explore ? "icon--360rotate" : "icon--180rotate"
                    }`}
                    icon={faAngleDown}
                  />
                </div>
              ) : null}
            </button>
          </div>
          {explore && (
            <div className="dropdown__links">
              {exploreLinks?.map((item, index) => (
                <div className="dropdown__area" key={index}>
                  <Link className="dropdown__link" to={item.url}>
                    <span className="dropdown__link-text">
                      {language === "tr-TR" ? item.nameTR : item.nameEN}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="footer__dropdown">
          <div className="dropdown__block">
            <button
              onClick={() => {
                setExplore(false);
                setHelp(!help);
                setPartner(false);
              }}
              className="dropdown__button"
            >
              <span className="dropdown__title">{helpByLanguage}</span>
              {screenSize < 768 ? (
                <div className="dropdown__icon">
                  <FontAwesomeIcon
                    className={`${
                      help ? "icon--360rotate" : "icon--180rotate"
                    }`}
                    icon={faAngleDown}
                  />
                </div>
              ) : null}
            </button>
          </div>
          {help && (
            <div className="dropdown__links">
              {helpLinks?.map((item, index) => (
                <div className="dropdown__area" key={index}>
                  <Link className="dropdown__link" to={item.url}>
                    <span className="dropdown__link-text">
                      {language === "tr-TR" ? item.nameTR : item.nameEN}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="footer__dropdown">
          <div className="dropdown__block">
            <button
              onClick={() => {
                setExplore(false);
                setHelp(false);
                setPartner(!partner);
              }}
              className="dropdown__button"
            >
              <span className="dropdown__title">{partnerByLanguage}</span>
              {screenSize < 768 ? (
                <div className="dropdown__icon">
                  <FontAwesomeIcon
                    className={`${
                      partner ? "icon--360rotate" : "icon--180rotate"
                    }`}
                    icon={faAngleDown}
                  />
                </div>
              ) : null}
            </button>
          </div>
          {partner && (
            <div className="dropdown__links">
              {partnerLinks?.map((item, index) => (
                <div className="dropdown__area" key={index}>
                  <Link className="dropdown__link" to={item.url}>
                    <span className="dropdown__link-text">
                      {language === "tr-TR" ? item.nameTR : item.nameEN}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
      <article className="footer__copyright">
        <div className="copyright__block">
          <span className="block__text">
            © {new Date().getFullYear()} Getir
          </span>
          <div className="copyright__info">
            <Link className="info__link" to="">
              {language === "tr-TR"
                ? "Bilgi Toplumu Hizmetleri"
                : "Information Society Services"}
            </Link>
          </div>
          <div className="copyright__social-medias">
            <div className="copyright__social-media">
              <Link to="" className="copyright__link">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </div>
            <div className="copyright__social-media">
              <Link to="" className="copyright__link">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </div>
            <div className="copyright__social-media">
              <Link to="" className="copyright__link">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </div>
          </div>
          <div className="copyright__language">
            <button className="language__button">
              <FontAwesomeIcon className="language__icon" icon={faGlobe} />
              English (EN)
            </button>
          </div>
        </div>
      </article>
    </footer>
  );
};
export default Footer;
