import Layout from "../components/layout";
import SliderWrapper from "../components/sliderWrapper";

import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import AutForm from "../components/authForm";
import Category from "../components/category";
import Favorite from "../components/favorite";
import DownloadCard from "../components/downloadCard";
import Cards from "../components/cards";

export default function Home() {
  const [language, setLanguage] = useState("tr-TR");
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
        )}
        <SliderWrapper />
        <div className="wrapper">
          <div className="wrapper__block">
            <AutForm language={language} />
            <Category language={language} />
            <Favorite language={language} />
            <DownloadCard language={language} size={screenSize.dynamicWidth} />
            <Cards language={language} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
