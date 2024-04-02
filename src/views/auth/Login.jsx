import AuthContainer from "@containers/AuthContainer";
import AuthContent from "@components/layout/AuthContent";
import { loginContent } from "@utils/constant/authContent";
import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { validationErrorState } from "@store/atom/formState";

const Login = () => {
  const setValidationError = useSetRecoilState(validationErrorState);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) {
      setValidationError(null);
    }
  }, [isFocused]);

  return (
    <AuthContainer>
      <AuthContent type="login" contentData={loginContent} />
    </AuthContainer>
  );
};

export default Login;
