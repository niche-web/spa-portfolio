import iconFrontend from "../../assets/icons/sprite.svg#icon-frontend-mentor";

export const FrontendIcon = ({ classes }) => {
  return (
    <svg className={classes}>
      <use xlinkHref={iconFrontend}></use>
    </svg>
  );
};
