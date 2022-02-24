import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function FavoriteElement({
  name,
  photoUrl,
  cost,
  weight,
  discount,
  link,
}) {
  return (
    <article className="favorite-element">
      <div className="favorite-element__block">
        <button className="favorite-element__button">
          <Link to={"/favorite/" + link} className="favorite-element__link">
            <figure className="favorite-element__figure">
              <img
                className="favorite-element__img"
                src={photoUrl}
                alt={name}
              ></img>
            </figure>
          </Link>
          <div className="favorite-element__counter">
            <button className="counter__button">
              <FontAwesomeIcon className="font--bold" icon={faPlus} />
            </button>
          </div>
        </button>
      </div>
      <div className="favorite-element__cost font--bold">
        {!discount ? (
          "₺" + cost
        ) : (
          <div className="favorite-element__discount">
            <div className="discount__previous">₺{cost[0]}</div>
            <div className="discount__now">₺{cost[1]}</div>
          </div>
        )}
      </div>
      <span className="favorite-element__name font--bold">{name}</span>
      <div className="favorite-element__weight">{weight}</div>
    </article>
  );
}
