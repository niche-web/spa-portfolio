import ResponsiveImg from "./ResponsiveImg";
import Button from "./Button";

const Project = ({ number, title, tagsList }) => {
  const imagesSources = `/images/thumbnail-project-${number}-large.webp 1080w,
        /images/thumbnail-project-${number}-small.webp 686w`;
  const imagesSizes = "(min-width: 780px) 1080px, 686px";
  const tags = tagsList.join(" ");

  return (
    <li className="project">
      <ResponsiveImg
        sources={imagesSources}
        sizes={imagesSizes}
        src={`/images/thumbnail-project-${number}-large.webp`}
        alt="Project Thumbnail image"
        className="project__img"
      />
      <div className="project__links">
        <Button text="view project" classes="project__live-link" href="#">
          view project
        </Button>
        <Button text="view code" classes="project__code-link" href="#">
          view code
        </Button>
      </div>
      <h4 className="project__title heading heading--m">{title}</h4>
      <p className="project__tags paragraph">{tags}</p>
    </li>
  );
};

export default Project;
