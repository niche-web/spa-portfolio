import iconLinkedin from "../../assets/icons/icon-linkedin.svg";

export const LinkedinIcon = ({ classes }) => {
  return (
    <svg className={classes}>
      <use xlinkHref={iconLinkedin + "#icon-linkedin"} />
    </svg>
  );
};
