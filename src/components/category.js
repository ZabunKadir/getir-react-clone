import { useState } from "react";
import CategoryElement from "./categoryElement";
export default function Category({ language, title, content }) {
  const [titleByLanguage, setTitleByLanguage] = useState(title);
  const [categoryElements, setCategoryElements] = useState(content);

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
