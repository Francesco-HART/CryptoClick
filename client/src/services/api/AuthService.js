import api from "./http-api";

export const AuthService = {
  getAuthUser: () =>
    api.get("/auth").then((data) => {
      const authUser = {
        fetching: false,
        isLoggedIn: true,
        login: data.login,
        address: data.address,
      };
      return authUser;
    }),

  getCurrentUser: () => api.get("/auth"),

  signin: (credentials) => api.post("/auth/signin", credentials),

  signout: () => api.post("/auth/signout", {}),
};
