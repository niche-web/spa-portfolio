// import FrontendIcon from "./icons/FrontendIcon";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import TwitterIcon from "./icons/TwitterIcon";
import FrontendIcon from "./icons/FrontendIcon";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <h4 role="Logo" className="navbar__logo heading">
          nicheweb
        </h4>
      </div>
      <div className="navbar__social">
        <a href="#">
          <GithubIcon classes="navbar__icon" />
        </a>
        <a href="#">
          <FrontendIcon classes="navbar__icon" />
        </a>
        <a href="#">
          <LinkedinIcon classes="navbar__icon" />
        </a>
        <a href="#">
          <TwitterIcon classes="navbar__icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
