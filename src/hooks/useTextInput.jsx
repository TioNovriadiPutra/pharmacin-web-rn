import { useState } from "react";

const useTextInput = (field) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleNormal = (text) => {
    field.onChange(text);
  };

  const handleNumber = (text) => {
    const numericText = text.replace(/[^0-9]/g, "");

    field.onChange(numericText);
  };

  return {
    showPassword,
    handlePassword,
    handleNormal,
    handleNumber,
  };
};

export default useTextInput;
