import iconTwitter from "../../assets/icons/sprite.svg";

export const TwitterIcon = ({ classes }) => {
  return (
    <svg className={classes}>
      <use xlinkHref={iconTwitter + "#icon-twitter"}></use>
    </svg>
  );
};
