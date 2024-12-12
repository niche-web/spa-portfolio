import iconTwitter from "../assets/icons/icon-twitter.svg";

export const TwitterIcon = ({ classes }) => {
  return (
    <svg className={classes}>
      <use href={iconTwitter + "#icon-twitter"} />
    </svg>
  );
};
