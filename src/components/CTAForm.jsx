import useInput from "../hooks/useInput";
import { isEmpty, isNotEmail } from "../utils/validation";
import { sendData } from "../utils/http";
import TextField from "./TextField";
import Button from "./Button";

const CTAForm = () => {
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
        const reply = await sendData("http://127.0.0.1:5000/", {
          name: nameValue,
          email: emailValue,
          message: messageValue,
        });
        console.log(reply);
      } catch (error) {
        console.error(error.message);
      }
    };
    sendInquiry();

    // Reset form
    setEmailValue("");
    setMessageValue("");
    setNameValue("");
    setEmailShowError(false);
    setNameShowError(false);
    setMessageShowError(false);
  };

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
      <Button
        text="send message"
        role="button"
        className="button heading heading--s cta-form__button"
      />
    </form>
  );
};

export default CTAForm;
