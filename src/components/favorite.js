import { useState } from "react";
import FavoriteElement from "./favoriteElement";
const Favorite = ({ language }) => {
  const [titleByLanguage, setTitleByLanguage] = useState("Favoriler");
  const [favoriteElements, setFavoriteElements] = useState([
    {
      nameTR: "Kuzeyden",
      nameEN: "",
      cost: "3,95",
      weight: "1,5L",
      photoUrl: "images/favorite/favorite_kuzeyden.jpeg",
    },
    {
      nameTR: "Kızılay Erzincan",
      nameEN: "",
      cost: "7,75",
      weight: "6 x 200 ml",
      photoUrl: "images/favorite/favorite_kizilay.jpeg",
    },
    {
      nameTR: "Ülker Napoliten",
      nameEN: "",
      cost: ["5,50", "4,40"],
      weight: "33 g",
      discount: true,
      photoUrl: "images/favorite/favorite_ulker.jpeg",
    },
    {
      nameTR: "Lay's Mevsim Yeşillikli",
      nameEN: "",
      cost: "8,95",
      weight: "96 g",
      photoUrl: "images/favorite/favorite_lays.jpeg",
    },
    {
      nameTR: "Kavrulmuş Siyah Ay Çekirdeği",
      nameEN: "",
      cost: "9,85",
      weight: "180 g",
      photoUrl: "images/favorite/favorite_tadim.jpeg",
    },
    {
      nameTR: "Magnum Badem",
      nameEN: "",
      cost: "11,50",
      weight: "100 ml",
      photoUrl: "images/favorite/favorite_magnum.jpeg",
    },
    {
      nameTR: "Uno Tost Ekmeği",
      nameEN: "",
      cost: "10,95",
      weight: "350 g",
      photoUrl: "images/favorite/favorite_unoBread.jpeg",
    },
    {
      nameTR: "içim %3 Yağlı Süt",
      nameEN: "",
      cost: "12,95",
      weight: "1 L",
      photoUrl: "images/favorite/favorite_icim.jpeg",
    },
    {
      nameTR: "Bahçıvan Süzme Peynir",
      nameEN: "",
      cost: "30,95",
      weight: "500 g",
      photoUrl: "images/favorite/favorite_cheese.jpeg",
    },
    {
      nameTR: "Hertane Kuru Sele Zeytin",
      nameEN: "",
      cost: "39,90",
      weight: "285 g",
      photoUrl: "images/favorite/favorite_hertane.jpeg",
    },
    {
      nameTR: "Nuh'un Ankara Spaghetti",
      nameEN: "",
      cost: "7,50",
      weight: "500 g",
      photoUrl: "images/favorite/favorite_spaghetti.jpeg",
    },
    {
      nameTR: "Colgate Optik White",
      nameEN: "",
      cost: "39,90",
      weight: "75 ml",
      photoUrl: "images/favorite/favorite_colgate.jpeg",
    },
    {
      nameTR: "Elidor Güçlü ve Parlak Şampuan",
      nameEN: "",
      cost: "37,50",
      weight: "650 ml",
      photoUrl: "images/favorite/favorite_elidor.jpeg",
    },
  ]);
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
              cost={item.cost}
              name={language === "tr-TR" ? item.nameTR : item.nameEN}
              photoUrl={item.photoUrl}
              discount={item.discount}
              weight={item.weight}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Favorite;
