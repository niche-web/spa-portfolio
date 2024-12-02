import CallToAction from "../components/CallToAction";
import Navbar from "../components/Navbar";

const Footer = () => {
  return (
    <>
      <div className="footer__background"></div>
      <footer className="footer">
        <CallToAction />
        <Navbar />
      </footer>
    </>
  );
};

export default Footer;
