import { forwardRef } from "react";

const TextField = forwardRef(function TextField(
  { label, errorMessage, isValid = true, textarea = false, ...props },
  ref
) {
  let inputElement = (
    <input
      ref={ref}
      className="textfield__input-elem"
      placeholder={label}
      {...props}
    />
  );
  if (textarea)
    inputElement = (
      <textarea
        ref={ref}
        className="textfield__input-elem"
        placeholder={label}
        {...props}
      ></textarea>
    );
  return (
    <div className={`textfield ${!isValid ? "textfield__invalid" : ""}`}>
      <p className="textfield__input">{inputElement}</p>
      <p className="textfield__error">{errorMessage}</p>
    </div>
  );
});

export default TextField;
