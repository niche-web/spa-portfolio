import iconFrontend from "../../assets/icons/sprite.svg#icon-frontend-mentor";

export const FrontendIcon = () => {
  return (
    <svg className="icon">
      <use xlinkHref={iconFrontend}></use>
    </svg>
  );
};
