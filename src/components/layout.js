import Header from "./header";
import Footer from "./footer/footer";
const Layout = ({ children, language, size }) => {
  return (
    <>
      <Header language={language} screenSize={size} />
      {children}
      <Footer language={language} screenSize={size} />
    </>
  );
};
export default Layout;
