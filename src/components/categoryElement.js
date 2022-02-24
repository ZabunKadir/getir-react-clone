const CategoryElement = ({ photoUrl, name }) => {
  return (
    <div className="category-element">
      <button className="category-element__button">
        <figure className="category-element__figure">
          <img
            className="category-element__img"
            src={photoUrl}
            alt={name}
          ></img>
        </figure>
        <span className="category-element__span font--bold">{name}</span>
      </button>
    </div>
  );
};
export default CategoryElement;
