import Layout from "../../components/layout";
import SliderWrapper from "../../components/sliderWrapper";

import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import AutForm from "../../components/authForm";
import Category from "../../components/category";
import Favorite from "../../components/favorite";
import DownloadCard from "../../components/downloadCard";
import Cards from "../../components/cards";
import Contents from "./hooks/contents";

export default function Home() {
  const [language, setLanguage] = useState("tr-TR");
  const { categories, homeCard, favorites, homeTitles, downloadCardContent } =
    Contents();
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  return (
    <Layout language={language} size={screenSize.dynamicWidth}>
      <main className="main">
        {screenSize.dynamicWidth < 767 && (
          <div className="phone__wrapper">
            <article className="article">
              <button className="article-button">
                <div className="article__icon">
                  <FontAwesomeIcon
                    className="icon--medium"
                    icon={faMapMarkerAlt}
                  />
                </div>
                <span className="article__span font--bold">
                  {language === "tr-TR"
                    ? "Teslimat Adresi Belirle"
                    : "Select Delivery Address"}
                </span>
                <div className="article__icon icon--right">
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </button>
            </article>
            <SliderWrapper size={screenSize.dynamicWidth} isPromotion={false} />
          </div>
        )}

        <div className="wrapper">
          <div className="wrapper__block">
            <AutForm
              language={language}
              title={
                language === "tr-TR"
                  ? homeTitles?.authForm?.title[0]
                  : homeTitles?.authForm?.title[1]
              }
              buttonText={
                language === "tr-TR"
                  ? homeTitles?.authForm?.buttonText[0]
                  : homeTitles?.authForm?.buttonText[1]
              }
            />
            <Category
              language={language}
              title={
                language === "tr-TR"
                  ? homeTitles?.category[0]
                  : homeTitles?.category[1]
              }
              content={categories}
            />
            {screenSize.dynamicWidth > 767 && (
              <SliderWrapper
                size={screenSize.dynamicWidth}
                isPromotion={true}
                promotionTitle={
                  language === "tr-TR"
                    ? homeTitles?.promotion[0]
                    : homeTitles?.promotion[1]
                }
              />
            )}
            <Favorite
              language={language}
              title={
                language === "tr-TR"
                  ? homeTitles?.favorite[0]
                  : homeTitles?.favorite[1]
              }
              content={favorites}
            />
            <DownloadCard
              language={language}
              title={
                language === "tr-TR"
                  ? homeTitles?.downloadCard[0]
                  : homeTitles?.downloadCard[1]
              }
              content={downloadCardContent}
              size={screenSize.dynamicWidth}
            />
            <Cards language={language} content={homeCard} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
