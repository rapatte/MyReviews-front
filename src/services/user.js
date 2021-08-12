import api from "./api";

const userService = {
  login: async (email, password) => {
    const admins = { email, password };
    return api.post("/admins/login", admins);
  },
};

export default userService;
