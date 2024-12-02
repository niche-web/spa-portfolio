import { useState } from "react";

const useInput = (defaultValue, validationFn) => {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [isTyping, setIsTyping] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  const handleChange = (e) => {
    setEnteredValue(e.target.value);
    setIsTyping(true);
  };

  const handleBlur = () => {
    setIsTyping(false);
  };

  return {
    enteredValue,
    handleChange,
    handleBlur,
    isTyping,
    hasError: !isTyping && !valueIsValid,
  };
};

export default useInput;
