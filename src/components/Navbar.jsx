import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import TwitterIcon from "./icons/TwitterIcon";
import FrontendIcon from "./icons/FrontendIcon";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <h4 className="navbar__logo heading">
          <a href="#header"> nicheweb</a>
        </h4>
      </div>
      <div className="navbar__social">
        <a href="https://github.com/niche-web" target="_blank">
          <GithubIcon classes="navbar__icon" />
        </a>
        <a
          href="https://www.frontendmentor.io/profile/niche-web"
          target="_blank"
        >
          <FrontendIcon classes="navbar__icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/norge-rojas-cerulia-ba0749131/"
          target="_blank"
        >
          <LinkedinIcon classes="navbar__icon" />
        </a>
        <a href="https://x.com/Nani45670378" target="_blank">
          <TwitterIcon classes="navbar__icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
