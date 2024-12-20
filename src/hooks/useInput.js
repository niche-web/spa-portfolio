import { useState } from "react";

const useInput = (initialValue, validationFn) => {
  const [isInvalid, setIsInvalid] = useState(true);
  const [value, setValue] = useState(initialValue);
  const [showError, setShowError] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
    setIsInvalid(validationFn(event.target.value));
    setShowError(false);
  };

  return {
    value,
    setValue,
    isInvalid,
    showError,
    setShowError,
    handleChange,
  };
};

export default useInput;
