import { useState } from "react";
import FavoriteElement from "./favoriteElement";
const Favorite = ({ language, title, content }) => {
  const [titleByLanguage, setTitleByLanguage] = useState(title);
  const [favoriteElements, setFavoriteElements] = useState(content);
  return (
    <section className="favorite__section">
      <div className="section__block">
        <div className="favorite__header">
          <h5 className="favorite__title">{titleByLanguage}</h5>
        </div>
        <div className="favorite__elements">
          {favoriteElements?.map((item, index) => (
            <FavoriteElement
              key={index}
              cost={item?.cost}
              name={language === "tr-TR" ? item?.nameTR : item?.nameEN}
              photoUrl={item?.photoUrl}
              discount={item?.discount}
              weight={item?.weight}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Favorite;
