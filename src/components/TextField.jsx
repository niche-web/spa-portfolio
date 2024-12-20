const TextField = ({
  label,
  notifyError,
  errorMessage,
  textarea = false,
  value,
  ...props
}) => {
  let inputElement = (
    <input
      className="textfield__input-elem"
      placeholder={label}
      value={value}
      {...props}
    />
  );
  if (textarea)
    inputElement = (
      <textarea
        className="textfield__input-elem"
        placeholder={label}
        value={value}
        {...props}
      ></textarea>
    );

  return (
    <div className={`textfield ${notifyError ? "textfield__invalid" : ""}`}>
      <p className="textfield__input">{inputElement}</p>
      <p className="textfield__error">{errorMessage}</p>
    </div>
  );
};

export default TextField;
