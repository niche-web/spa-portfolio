import iconGithub from "../../assets/icons/sprite.svg#icon-github";

export const GithubIcon = ({ classes }) => {
  return (
    <svg className={classes}>
      <use xlinkHref={iconGithub}></use>
    </svg>
  );
};
