import { useState, useEffect } from "react";
import CategoryElement from "./categoryElement";
export default function Category({ language }) {
  const [titleByLanguage, setTitleByLanguage] = useState("Kategoriler");
  const languageControl = (language) => {
    if (language === "tr-TR") {
      setTitleByLanguage("Kategoriler");
    } else if (language === "en-EN") {
      setTitleByLanguage("Categories");
    } else {
      setTitleByLanguage("Categories");
    }
  };
  useEffect(() => {
    languageControl(language);
  }, [language]);

  const [categoryElements, setCategoryElements] = useState([
    {
      nameTR: "Yeni Ürünler",
      nameEN: "New Products",
      photoUrl: "images/category/category_newItem.jpeg",
    },
    {
      nameTR: "İndirimler",
      nameEN: "Special Offers",
      photoUrl: "images/category/category_discount.jpeg",
    },
    {
      nameTR: "Su & İçecek",
      nameEN: "Beverages",
      photoUrl: "images/category/category_waterAndDrinks.jpeg",
    },
    {
      nameTR: "Meyve & Sebze",
      nameEN: "Fruits & Veg",
      photoUrl: "images/category/category_fruitAndVegetables.jpeg",
    },
    {
      nameTR: "Fırından",
      nameEN: "Baked Goods",
      photoUrl: "images/category/category_fromOven.jpeg",
    },
    {
      nameTR: "Temel Gıda",
      nameEN: "Food",
      photoUrl: "images/category/category_primaryNutrition.jpeg",
    },
    {
      nameTR: "Atıştırmalık",
      nameEN: "Snacks",
      photoUrl: "images/category/category_snack.jpeg",
    },
    {
      nameTR: "Dondurma",
      nameEN: "Ice Cream",
      photoUrl: "images/category/category_iceCream.jpeg",
    },
    {
      nameTR: "Süt Ürünler",
      nameEN: "Milk & Dairy",
      photoUrl: "images/category/category_milk.jpeg",
    },
    {
      nameTR: "Kahvaltılık",
      nameEN: "Breakfast",
      photoUrl: "images/category/category_breakfast.jpeg",
    },
    {
      nameTR: "Yiyecek",
      nameEN: "Ready to Eat",
      photoUrl: "images/category/category_foods.jpeg",
    },
    {
      nameTR: "Fit & Form",
      nameEN: "Fit & Form",
      photoUrl: "images/category/category_fitAndForm.jpeg",
    },
    {
      nameTR: "Kişisel Bakım",
      nameEN: "Personal Care",
      photoUrl: "images/category/category_personalCare.jpeg",
    },
    {
      nameTR: "Ev Bakım",
      nameEN: "Home Care",
      photoUrl: "images/category/category_homeCare.jpeg",
    },
    {
      nameTR: "Ev & Yaşam",
      nameEN: "Home & Living",
      photoUrl: "images/category/category_homeAndLife.jpeg",
    },
    {
      nameTR: "Teknoloji",
      nameEN: "Tech",
      photoUrl: "images/category/category_tech.jpeg",
    },
    {
      nameTR: "Evcil Hayvan",
      nameEN: "Pet Food",
      photoUrl: "images/category/category_pet.jpeg",
    },
    {
      nameTR: "Bebek",
      nameEN: "Baby Care",
      photoUrl: "images/category/category_baby.jpeg",
    },
    {
      nameTR: "Cinsel Sağlık",
      nameEN: "Sex Health",
      photoUrl: "images/category/category_sexualHealth.jpeg",
    },
  ]);
  return (
    <section className="category__section">
      <div className="category__block">
        <div className="category">
          <div className="category__header">
            <h5 className="category__title">{titleByLanguage}</h5>
          </div>
          <section className="category__elements">
            <div className="elements_block">
              {categoryElements?.map((item, index) => (
                <CategoryElement
                  key={index}
                  name={language === "tr-TR" ? item.nameTR : item.nameEN}
                  photoUrl={item.photoUrl}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
