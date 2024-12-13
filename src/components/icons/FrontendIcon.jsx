import iconFrontend from "../../assets/icons/sprite.svg";

export const FrontendIcon = ({ classes }) => {
  return (
    <svg className={classes}>
      <use xlinkHref={iconFrontend + "#icon-frontend-mentor"}></use>
    </svg>
  );
};
