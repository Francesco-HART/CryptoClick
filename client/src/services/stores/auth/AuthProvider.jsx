import React, { useEffect, useReducer } from "react";
import { initialAuthUser } from "../../../config/auth";
import { AuthService } from "../../api/AuthService";
import { AuthContext } from "./AuthContext";
import { AuthReducer, AuthActions } from "./AuthReducer";
import { useWalletConnect } from "../../../hooks/useWalletConnect";

function useProvideAuth() {
  const [authUser, setAuthUser] = useReducer(AuthReducer, initialAuthUser);
  const { connect, account } = useWalletConnect();

  useEffect(() => {
    async function getCurrentUser() {
      try {
        let currentAuthUser = await AuthService.getAuthUser();
        await connect();
        console.log(currentAuthUser, "first useeeeeeeeeeer");
        if (currentAuthUser) {
          console.log(currentAuthUser, "first if");

          setAuthUser({
            type: AuthActions.LOGIN,
            authUser: currentAuthUser,
          });
        } else {
          console.log(account, "account");

          if (account) {
            console.log(currentAuthUser, "secooooooond useeeeeeeeeeer");

            let currentAuthUser = await AuthService.signin({
              address: account,
            });
            setAuthUser({
              type: AuthActions.LOGIN,
              authUser: currentAuthUser,
            });
            console.log(currentAuthUser, "secooooooond useeeeeeeeeeer");
          } else
            setAuthUser({
              type: AuthActions.LOGIN,
              authUser: {
                ...initialAuthUser,
                fetching: false,
              },
            });
        }
      } catch (e) {
        console.log("catcccccccccccccccccch");
        setAuthUser({
          type: AuthActions.LOGIN,
          authUser: {
            ...initialAuthUser,
            fetching: false,
          },
        });
      }
    }
    getCurrentUser();
  }, []);

  return { authUser, setAuthUser };
}

function AuthProvider({ children }) {
  const authValue = useProvideAuth();

  // TODO : improve the loading
  if (authValue.authUser.fetching) return null;

  return (
    <AuthContext.Provider value={authValue}> {children}</AuthContext.Provider>
  );
}

export { AuthProvider };
