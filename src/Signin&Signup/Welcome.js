import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Auth-Context";

export default function Welcome() {
  const authCtx = useContext(AuthContext);
  const navigation = useNavigate();
  function logoutHandler() {
    authCtx.logout();
    navigation("/");
  }
  return (
    <>
      <h1>Welcome my friend!! you made it</h1>
      <button onClick={logoutHandler}>log out</button>
    </>
  );
}
