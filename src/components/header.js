import NavLink from "./navlink";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__logo">
            <NavLink
              name={"getir"}
              link={"/"}
              imageUrl={"./images/getir-logo.svg"}
            />
            <NavLink
              name={"getir"}
              link={"/"}
              imageUrl={"./images/getir-logo.svg"}
            />
            <NavLink
              name={"getir"}
              link={"/"}
              imageUrl={"./images/getir-logo.svg"}
            />
            <NavLink
              name={"getir"}
              link={"/"}
              imageUrl={"./images/getir-logo.svg"}
            />
          </div>
          {true ? <div></div> : <div className="banner"></div>}
        </div>
      </nav>
    </header>
  );
};
export default Header;
