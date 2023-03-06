import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const useAuthContext = () => {
  const { authUser } = useContext(AuthContext);
  console.log(authUser, "laaaaaaaaaaaaaaaaaaaaaa");

  // simple getters

  const isLoggedIn = authUser.isLoggedIn;

  const address = authUser.address;

  const login = authUser.login;

  // custom getters

  return {
    isLoggedIn,
    address,
    login,
  };
};

export { useAuthContext };
