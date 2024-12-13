import iconGithub from "../../assets/icons/sprite.svg";

export const GithubIcon = ({ classes }) => {
  return (
    <svg className={classes}>
      <use xlinkHref={iconGithub + "#icon-github"}></use>
    </svg>
  );
};
