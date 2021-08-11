import api from "./api";

const genreService = {
  getAll: async () => api.get("/genres"),
};

export default genreService;
