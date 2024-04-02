import { useState } from "react";

const useTextInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  return {
    showPassword,
    handlePassword,
  };
};

export default useTextInput;
