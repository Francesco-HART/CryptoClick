import api from "./http-api";

export const UserService = {
  getOneUser: (id) => api.get("/user/" + id),

  createUser: (userCreatedto) => api.post("/user", userCreatedto),

  updateUser: (userUpdateDto) =>
    api.put("/user/" + userUpdateDto._id, userUpdateDto),
};
