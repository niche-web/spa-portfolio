import iconLinkedin from "../../assets/icons/icon-linkedin.svg";

export const LinkedinIcon = ({ classes }) => {
  return (
    <svg className={classes}>
      <use href={iconLinkedin + "#icon-linkedin"} />
    </svg>
  );
};
