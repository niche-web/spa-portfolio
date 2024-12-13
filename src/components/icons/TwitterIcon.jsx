import iconTwitter from "../../assets/icons/sprite.svg#icon-twitter";

export const TwitterIcon = ({ classes }) => {
  return (
    <svg className={classes}>
      <use xlinkHref={iconTwitter}></use>
    </svg>
  );
};
