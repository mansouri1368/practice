import { createContext, useState } from "react";

export const AuthContext = createContext({
  authenticate: (token) => {},
  authenticated: false,
  token: null,
  logout:()=>{}
});

export default function AuthContextProvider({ children }) {
  const [token, setToken] = useState(null);

  function authenticate(token) {
    localStorage.setItem("token", token);
    setToken(token);
  }
  function logout() {
    localStorage.removeItem('token')
    setToken(null);
  }
  const value = {
    authenticated: !!token,
    token: token,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
