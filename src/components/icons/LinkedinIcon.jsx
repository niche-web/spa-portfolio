import iconLinkedin from "../../assets/icons/sprite.svg#icon-linkedin";

export const LinkedinIcon = ({ classes }) => {
  return (
    <svg className={classes}>
      <use xlinkHref={iconLinkedin}></use>
    </svg>
  );
};
