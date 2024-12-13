import iconLinkedin from "../assets/icons/icon-linkedin.svg#icon-linkedin";

export const LinkedinIcon = ({ classes }) => {
  return (
    <svg className={classes}>
      <use href={iconLinkedin} />
    </svg>
  );
};
