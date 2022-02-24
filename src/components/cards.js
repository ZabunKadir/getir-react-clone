import { useState, useEffect } from "react";
const Cards = ({ language }) => {
  const [contentByLanguage, setContextByLanguage] = useState([
    {
      title: "Her siparişinize bir kampanya",
      content:
        "Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.",
      url: "images/intro-in-minutes.svg",
    },
    {
      title: "Dakikalar içinde kapınızda",
      content: "Getir’le siparişiniz dakikalar içinde kapınıza gelir.",
      url: "images/intro-market-courier.svg",
    },
    {
      title: "Binlerce çeşit mutluluk",
      content: "Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.",
      url: "images/intro-discount.svg",
    },
  ]);
  const languageControl = (language) => {
    if (language === "tr-TR") {
      setContextByLanguage((contentByLanguage) => [
        ...contentByLanguage,
        (contentByLanguage[0].title = "Her siparişinize bir kampanya"),
      ]);
    } else if (language === "en-EN") {
      setContextByLanguage((contentByLanguage) => [
        ...contentByLanguage,
        ((contentByLanguage[0].title = "as"),
        (contentByLanguage[0].content =
          "Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.")),
      ]);
    } else {
      setContextByLanguage("Categories");
    }
  };
  useEffect(() => {
    languageControl(language);
  }, [language]);
  return (
    <section className="cards">
      <div className="cards__block">
        <div className="cards__items">
          <div className="cards__item">
            <figure className="cards__figure">
              <img
                alt="intro-discount"
                className="cards__img"
                src={contentByLanguage[0].url}
              ></img>
            </figure>
            <span className="cards__title font--bold">
              {contentByLanguage[0].title}
            </span>
            <span className="cards__content">
              {contentByLanguage[0].content}
            </span>
          </div>
          <div className="cards__item">
            <figure className="cards__figure">
              <img
                alt="intro-discount"
                className="cards__img"
                src={contentByLanguage[1].url}
              ></img>
            </figure>
            <span className="cards__title font--bold">
              {contentByLanguage[1].title}
            </span>
            <span className="cards__content">
              {contentByLanguage[1].content}
            </span>
          </div>
          <div className="cards__item">
            <figure className="cards__figure">
              <img
                alt="intro-discount"
                className="cards__img"
                src={contentByLanguage[2].url}
              ></img>
            </figure>
            <span className="cards__title font--bold">
              {contentByLanguage[2].title}
            </span>
            <span className="cards__content">
              {contentByLanguage[2].content}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cards;
