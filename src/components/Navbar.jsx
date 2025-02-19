import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import TwitterIcon from "./icons/TwitterIcon";
import FrontendIcon from "./icons/FrontendIcon";

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation">
      <div>
        <h4 className="navbar__logo heading">
          <a href="#home"> nicheweb</a>
        </h4>
      </div>
      <div className="navbar__social">
        <a
          href="https://github.com/niche-web"
          target="_blank"
          aria-label="github account"
        >
          <GithubIcon classes="navbar__icon" />
        </a>
        <a
          href="https://www.frontendmentor.io/profile/niche-web"
          target="_blank"
          aria-label="frontendmentor account"
        >
          <FrontendIcon classes="navbar__icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/norge-rojas-cerulia-ba0749131/"
          target="_blank"
          aria-label="linkedin account"
        >
          <LinkedinIcon classes="navbar__icon" />
        </a>
        <a
          href="https://x.com/Nani45670378"
          target="_blank"
          aria-label="X account"
        >
          <TwitterIcon classes="navbar__icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
