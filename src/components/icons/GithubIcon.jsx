import iconGithub from "/icons/sprite.svg#icon-github";

export const GithubIcon = () => {
  return (
    <svg className="icon">
      <use xlinkHref={iconGithub}></use>
    </svg>
  );
};
