import { useRef, useState } from "react";
import { isEmpty, isEmail } from "../utils/validation";
import TextField from "./TextField";
import Button from "./Button";

const CTAForm = () => {
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [nameIsValid, setNameIsValid] = useState(true);
  const [messageIsValid, setMessageIsValid] = useState(true);

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailIsValid(isEmail(emailRef.current.value));
    setNameIsValid(!isEmpty(nameRef.current.value));
    setMessageIsValid(!isEmpty(messageRef.current.value));
    if (
      isEmail(emailRef.current.value) &&
      !isEmpty(nameRef.current.value) &&
      !isEmpty(messageRef.current.value)
    ) {
      console.log({
        nameValue: nameRef.current.value,
        emailValue: emailRef.current.value,
        messageValue: messageRef.current.value,
      });
      formRef.current.reset();
    }
  };

  const handleFocus = () => {
    setEmailIsValid(true);
    setNameIsValid(true);
    setMessageIsValid(true);
  };
  return (
    <form ref={formRef} className="cta-form" onSubmit={handleSubmit} noValidate>
      <TextField
        isValid={nameIsValid}
        ref={nameRef}
        label="name"
        errorMessage="This field is required."
        id="name"
        name="name"
        onFocus={handleFocus}
      />
      <TextField
        isValid={emailIsValid}
        ref={emailRef}
        label="email"
        errorMessage="Sorry, invalid format here"
        id="email"
        name="email"
        type="email"
        onFocus={handleFocus}
      />
      <TextField
        isValid={messageIsValid}
        ref={messageRef}
        label="message"
        errorMessage="This field is required."
        textarea
        id="message"
        name="message"
        rows="3"
        onFocus={handleFocus}
      />
      <Button
        text="send message"
        role="button"
        className="button heading heading--s cta-form__button"
      />
    </form>
  );
};

export default CTAForm;
