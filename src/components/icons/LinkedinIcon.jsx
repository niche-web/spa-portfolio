import iconLinkedin from "../../assets/icons/sprite.svg";

export const LinkedinIcon = ({ classes }) => {
  return (
    <svg className={classes}>
      <use xlinkHref={iconLinkedin + "#icon-linkedin"}></use>
    </svg>
  );
};
