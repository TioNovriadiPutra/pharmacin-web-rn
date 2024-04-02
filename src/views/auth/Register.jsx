import AuthContainer from "@containers/AuthContainer";
import AuthContent from "@components/layout/AuthContent";
import { registerContent } from "@utils/constant/authContent";
import { useSetRecoilState } from "recoil";
import { validationErrorState } from "@store/atom/formState";
import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";

const Register = () => {
  const setValidationError = useSetRecoilState(validationErrorState);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) {
      setValidationError(null);
    }
  }, [isFocused]);

  return (
    <AuthContainer type="register">
      <AuthContent type="register" contentData={registerContent} />
    </AuthContainer>
  );
};

export default Register;
