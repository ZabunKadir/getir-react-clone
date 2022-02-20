import Layout from "../components/layout";
import SliderWrapper from "../components/sliderWrapper";

import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import AutForm from "../components/authForm";

export default function Home() {
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
    <Layout>
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
                Teslimat Adresi Belirle
              </span>
              <div className="article__icon icon--right">
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </button>
          </article>
        )}
        <SliderWrapper />
        <div className="wrapper">
          <AutForm />
        </div>
      </main>
    </Layout>
  );
}
