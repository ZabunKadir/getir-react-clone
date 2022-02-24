import Header from "./header";
import Footer from "./footer";
const Layout = ({ children, language, size }) => {
  return (
    <>
      <Header />
      {children}
      <Footer language={language} screenSize={size} />
    </>
  );
};
export default Layout;
