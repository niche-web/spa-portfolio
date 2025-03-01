import { useState } from "react";
import useInput from "../hooks/useInput";
import { isEmpty, isNotEmail } from "../utils/validation";
import { sendData } from "../utils/http";
import TextField from "./TextField";
import Button from "./Button";

const CTAForm = () => {
  const [requestState, setRequestState] = useState("idle");

  const {
    value: emailValue,
    isInvalid: emailIsInvalid,
    showError: emailShowError,
    setValue: setEmailValue,
    setShowError: setEmailShowError,
    handleChange: handleEmailChange,
  } = useInput("", isNotEmail);
  const {
    value: nameValue,
    isInvalid: nameIsInvalid,
    showError: nameShowError,
    setValue: setNameValue,
    setShowError: setNameShowError,
    handleChange: handleNameChange,
  } = useInput("", isEmpty);
  const {
    value: messageValue,
    isInvalid: messageIsInvalid,
    showError: messageShowError,
    setValue: setMessageValue,
    setShowError: setMessageShowError,
    handleChange: handleMessageChange,
  } = useInput("", isEmpty);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameIsInvalid || emailIsInvalid || messageIsInvalid) {
      setEmailShowError(true);
      setNameShowError(true);
      setMessageShowError(true);
      return;
    }

    const sendInquiry = async () => {
      try {
        setRequestState("running");
        const reply = await sendData(import.meta.env.VITE_API_URL, {
          name: nameValue,
          email: emailValue,
          message: messageValue,
        });
        setRequestState("success");
        setTimeout(() => setRequestState("idle"), 2000);
        // Reset form
        setEmailValue("");
        setMessageValue("");
        setNameValue("");
        setEmailShowError(false);
        setNameShowError(false);
        setMessageShowError(false);
        console.log(reply);
      } catch (error) {
        console.error(error.message);
        setRequestState("error");
        setTimeout(() => setRequestState("idle"), 2000);
      }
    };
    sendInquiry();
  };

  const showButtonState = () => {
    if (requestState === "running") {
      return <p className="heading heading--s">Sending Inquiry ...</p>;
    } else if (requestState === "success") {
      return (
        <p className="heading heading--s success">Inquiry added successfully</p>
      );
    } else if (requestState === "error") {
      return (
        <p className="heading heading--s error">
          Sorry, the Inquiry request failed.
        </p>
      );
    }
  };

  let reqButton =
    requestState === "idle" ? (
      <Button
        text="send message"
        role="button"
        className="button heading heading--s cta-form__button"
      />
    ) : (
      showButtonState()
    );

  return (
    <form className="cta-form" onSubmit={handleSubmit} noValidate>
      <TextField
        label="name"
        notifyError={nameIsInvalid && nameShowError}
        errorMessage="This field is required."
        id="name"
        name="name"
        value={nameValue}
        onChange={handleNameChange}
      />
      <TextField
        label="email"
        notifyError={emailIsInvalid && emailShowError}
        errorMessage="Sorry, invalid format here"
        id="email"
        name="email"
        type="email"
        value={emailValue}
        onChange={handleEmailChange}
      />
      <TextField
        label="message"
        notifyError={messageIsInvalid && messageShowError}
        errorMessage="This field is required."
        textarea
        id="message"
        name="message"
        rows="3"
        value={messageValue}
        onChange={handleMessageChange}
      />
      {reqButton}
    </form>
  );
};

export default CTAForm;
