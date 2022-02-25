import { useState } from "react";
const Cards = ({ language, content }) => {
  const [contentByLanguage, setContentByLanguage] = useState(content);

  return (
    <section className="cards">
      <div className="cards__block">
        <div className="cards__items">
          {contentByLanguage?.map((item, index) => (
            <div className="cards__item" key={index}>
              <div className="cards-item__img">
                <figure className="cards__figure">
                  <img
                    alt="intro-discount"
                    className="cards__img"
                    src={item.url}
                  ></img>
                </figure>
              </div>
              <div className="cards-item__text">
                <span className="cards__title font--bold">
                  {language === "tr-TR" ? item.titleTR : item.titleEN}
                </span>
                <span className="cards__content">
                  {language === "tr-TR" ? item.contentTR : item.contentEN}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Cards;
