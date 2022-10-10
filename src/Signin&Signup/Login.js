import { useContext, useEffect } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { AuthContext } from "./Auth-Context";
import AuthForm from "./AuthForm";
import { login, signup } from "./authHttp";

export default function Login() {
  const navigation = useNavigate();
  const authCtx = useContext(AuthContext);

  async function confirmHandler(inputs, isSigningup) {
    console.log(inputs, isSigningup);

    if (!isSigningup) {
      try {
        const token = await login(inputs.username, inputs.password);
        authCtx.authenticate(token);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const token = await signup(inputs.username, inputs.password);
        authCtx.authenticate(token);
      } catch (error) {
        console.log(error);
      }
    }
    navigation("/manage");
  }

  return <AuthForm onSubmit={confirmHandler} />;
}
