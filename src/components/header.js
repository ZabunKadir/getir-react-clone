import NavLink from "./navlink";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
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
    <header className="header">
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__logo">
            <NavLink
              name={"getir"}
              link={"/"}
              imageUrl={"./images/getir-logo.svg"}
              active={true}
            />
            <NavLink
              name={"getir"}
              link={"/"}
              imageUrl={"./images/getir-food-logo.svg"}
            />
            <NavLink
              name={"getir"}
              link={"/"}
              imageUrl={"./images/getir-more-logo.svg"}
            />
            <NavLink
              name={"getir"}
              link={"/"}
              imageUrl={"./images/getir-water-logo.svg"}
            />
            <NavLink
              name={"getir"}
              link={"/"}
              imageUrl={"./images/getir-locals-logo.svg"}
            />
          </div>
          {screenSize.dynamicWidth > 767 ? (
            <div className="user-actions">
              <div className="user-actions__block">
                <div className="user-actions__button-block">
                  <button className="user-actions__button">
                    <FontAwesomeIcon className="button__icon" icon={faGlobe} />
                  </button>
                </div>
                <div className="user-actions__button-block">
                  <button className="user-actions__button">
                    <FontAwesomeIcon className="button__icon" icon={faUser} />
                  </button>
                </div>
                <div className="user-actions__button-block">
                  <button className="user-actions__button">
                    <FontAwesomeIcon
                      className="button__icon"
                      icon={faUserPlus}
                    />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="banner"></div>
          )}
        </div>
      </nav>
      {screenSize.dynamicWidth < 768 ? (
        <div className="mobile-header">
          <div className="mobile-header__block">
            <img
              className="mobile-header__image"
              src={"./images/getir-logo.svg"}
              alt="getir"
            />
          </div>
        </div>
      ) : (
        <div className="banner"></div>
      )}
    </header>
  );
};
export default Header;
