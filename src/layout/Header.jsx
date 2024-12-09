import Button from "../components/Button";
import ResponsiveImg from "../components/ResponsiveImg";
import photoDesktop from "../assets/images/image-profile-desktop.webp";
import photoTablet from "../assets/images/image-profile-tablet.webp";
import photoMobile from "../assets/images/image-profile-mobile.webp";

const Header = () => {
  return (
    <>
      <div className="header__background"></div>
      <div className="header__photo-decor"></div>
      <div className="header__photo">
        <ResponsiveImg
          sources={`${photoMobile} 348w, ${photoTablet} 646w, ${photoDesktop} 890w`}
          sizes="(max-width: 650px) 348px, (min-width: 651px and max-width: 940px) 646px, 890px"
          className="photo"
          // src={photoDesktop}
          alt="Profile photo"
        />
      </div>
      <div className="header__main">
        <div className="header__main--container">
          <h1 className="header__heading heading heading--xl">
            Nice to <wbr />
            meet you!
            <wbr className="brake" /> I&rsquo;m <a href="#">Adam Keyes</a>.
          </h1>
          <p className="header__paragraph paragraph">
            Based in UK. I&apos;m a frontend developer passionate about building
            accessible web apps that users love.
          </p>
          <Button classes="header__cta" href="#" />
        </div>
      </div>

      <hr className="sep-line" />
    </>
  );
};

export default Header;
