import CallToAction from "./CallToAction";
import Navbar from "../components/Navbar";

const Footer = () => {
  return (
    <>
      <div className="footer__background-color"></div>
      <div className="footer__background-img"></div>
      <CallToAction />
      <footer className="footer__navbar">
        <Navbar aria-label="Footer Navigation" />
      </footer>
    </>
  );
};

export default Footer;
