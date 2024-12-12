import iconFrontend from "../assets/icons/icon-frontend-mentor.svg";

export const FrontendIcon = ({ classes }) => {
  return (
    <svg className={classes}>
      <use href={iconFrontend + "#icon-frontend"} />
    </svg>
  );
};
