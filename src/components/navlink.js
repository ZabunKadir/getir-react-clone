import { Link } from "react-router-dom";

const NavLink = ({ name, link, imageUrl, active }) => {
  return (
    <div className="nav-link nav-link--hover">
      <Link className="nav-link__link" to={link}>
        <figure className={`figure ${!active && "figure--filter"}`}>
          <img className="nav-link__image" src={imageUrl} alt={name} />
        </figure>
      </Link>
    </div>
  );
};
export default NavLink;
