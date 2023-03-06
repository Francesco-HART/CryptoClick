import { initialAuthUser } from "../../../config/auth";

const AuthActions = {
  LOGOUT: "logout",
  LOGIN: "login",
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case AuthActions.LOGOUT:
      return {
        ...initialAuthUser,
        fetching: false,
      };
    case AuthActions.LOGIN:
      return {
        fetching: action.authUser.fetching,
        isLoggedIn: action.authUser.isLoggedIn,
        login: action.authUser.login,
        address: action.authUser.address,
      };
    case "SET_USER_TYPE":
      return {
        ...state,
        type: action.userType,
      };
    default:
      throw new Error();
  }
};

// export type { Actions };
export { AuthReducer, AuthActions };
