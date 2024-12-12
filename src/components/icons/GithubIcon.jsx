import iconGithub from "../../assets/icons/icon-github.svg";

export const GithubIcon = ({ classes }) => {
  return (
    <svg className={classes}>
      <use xlinkHref={iconGithub + "#icon-github"} />
    </svg>
  );
};
