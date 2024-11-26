import photo from "../assets/images/image-profile-desktop.webp";
import Button from "../components/Button";

const Header = () => {
  return (
    <>
      <header className="header-text">
        <div className="header-text__main">
          <h1 className="heading heading--xl">
            Nice to meet you! I&rsquo;m <a href="#">Adam Keyes</a>.
          </h1>
          <p className="paragraph">
            Based in UK. I&apos;m a frontend developer passionate about building
            accessible web apps that users love.
          </p>
        </div>
        <div className="header-text__cta ">
          <Button href="#" />
        </div>
      </header>
      <div className="header-photo">
        <img className="photo" src={photo} alt="Profile photo" />
      </div>
    </>
  );
};

export default Header;
