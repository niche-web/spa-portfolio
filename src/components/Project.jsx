import ResponsiveImg from "./ResponsiveImg";
import Button from "./Button";
import { getProjImgUrl } from "../utils/helper";

const Project = ({ number, title, tagsList }) => {
  const largeImg = getProjImgUrl(number, "large");
  const smallImg = getProjImgUrl(number, "small");

  const imagesSources = `${largeImg} 1080w, ${smallImg} 686w`;
  const imagesSizes = "(min-width: 780px) 1080px, 686px";
  const tags = tagsList.join(" ");

  return (
    <li className="project">
      <ResponsiveImg
        sources={imagesSources}
        sizes={imagesSizes}
        src={largeImg}
        alt="Project Thumbnail image"
        className="project__img"
      />
      <div className="project__description">
        <h4 className="project__title heading heading--m">{title}</h4>
        <p className="project__tags paragraph">{tags}</p>
      </div>
      <div className="project__links">
        <Button text="view project" classes="project__live-link" href="#">
          view project
        </Button>
        <Button text="view code" classes="project__code-link" href="#">
          view code
        </Button>
      </div>
    </li>
  );
};

export default Project;
