import Button from "../components/Button";
import ResponsiveImg from "../components/ResponsiveImg";

const Header = () => {
  return (
    <>
      <div className="header__text">
        <div className="header__text--main">
          <h1 className="heading heading--xl">
            Nice to meet you! I&rsquo;m <a href="#">Adam Keyes</a>.
          </h1>
          <p className="paragraph">
            Based in UK. I&apos;m a frontend developer passionate about building
            accessible web apps that users love.
          </p>
        </div>
        <div className="header__text--cta ">
          <Button href="#" />
        </div>
      </div>
      <div className="header__photo">
        <ResponsiveImg
          sources="/images/image-profile-desktop.webp 890w, /images/image-profile-tablet.webp 646w, images/image-profile-mobile.webp 348w"
          sizes="(max-width: 375px) 348px, (min-width: 375px) and (max-width: 768px) 646px, 890px"
          className="photo"
          src="/images/image-profile-desktop.webp"
          alt="Profile photo"
        />
      </div>
      <hr className="sep-line" />
    </>
  );
};

export default Header;
