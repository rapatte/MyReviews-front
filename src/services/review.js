import api from "./api";

const reviewService = {
  createReview: async (review) => api.post("/reviews", review),
  getAll: async () => api.get("/reviews"),
};

export default reviewService;
