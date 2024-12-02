const Button = ({
  text = "contact me",
  role = "link",
  classes = "",
  ...props
}) => {
  if (role === "button") {
    return (
      <button className={`button heading heading--s ${classes}`} {...props}>
        {text}
      </button>
    );
  }

  return (
    <a className={`button heading heading--s ${classes}`} {...props}>
      {text}
    </a>
  );
};

export default Button;
