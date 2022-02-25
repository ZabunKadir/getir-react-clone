import { faAngleDown, faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Contents from "./hooks/content";
const Footer = ({ language, screenSize }) => {
  const { exploreLinks, helpLinks, partnerLinks, titles } = Contents();
  const [explore, setExplore] = useState(false);
  const [help, setHelp] = useState(false);
  const [partner, setPartner] = useState(false);
  const [type, setType] = useState([explore, help, partner]);
  const [typeLink, setTypeLink] = useState([
    exploreLinks,
    helpLinks,
    partnerLinks,
  ]);

  useEffect(() => {
    if (screenSize > 767) {
      setExplore(true);
      setHelp(true);
      setPartner(true);
    } else {
      setExplore(false);
      setHelp(false);
      setPartner(false);
    }
  }, [screenSize]);
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <div className="footer__block">
          <div className="footer__download">
            <span className="footer__title">
              {language === "tr-TR" ? titles[0]?.title[0] : titles[0]?.title[1]}
            </span>
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
        {titles?.map(
          (item, index) =>
            index !== 0 && (
              <div className="footer__dropdown" key={index}>
                <div className="dropdown__block">
                  <button
                    onClick={() => {
                      if (index === 1) {
                        setExplore(!explore);
                        setHelp(false);
                        setPartner(false);
                      } else if (index === 2) {
                        setExplore(false);
                        setHelp(!help);
                        setPartner(false);
                      } else {
                        setExplore(false);
                        setHelp(false);
                        setPartner(!partner);
                      }
                    }}
                    className="dropdown__button"
                  >
                    <span className="dropdown__title">
                      {language === "tr-TR"
                        ? titles[index][0]
                        : titles[index][1]}
                    </span>
                    {screenSize < 768 ? (
                      <div className="dropdown__icon">
                        <FontAwesomeIcon
                          className={`${
                            type[index - 1]
                              ? "icon--360rotate"
                              : "icon--180rotate"
                          }`}
                          icon={faAngleDown}
                        />
                      </div>
                    ) : null}
                  </button>
                </div>
                {type && (
                  <div className="dropdown__links">
                    {typeLink[index - 1]?.map((item, index) => (
                      <div className="dropdown__area" key={index}>
                        <Link className="dropdown__link" to={item?.url}>
                          <span className="dropdown__link-text">
                            {language === "tr-TR" ? item?.nameTR : item?.nameEN}
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
        )}
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
              {language === "tr-TR" ? "Türkçe (TR)" : "English (EN)"}
            </button>
          </div>
        </div>
      </article>
    </footer>
  );
};
export default Footer;
