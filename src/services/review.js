import api from "./api";

const reviewService = {
  createReview: async (review) => api.post("/reviews", review),
  getAll: async () => api.get("/reviews"),
  getByCategory: async (category) => api.get(`reviews/${category}`),
  getLatest: async () => api.get("/reviews/latest"),
  getSearchReview: async (title) => api.get(`/reviews/review/${title}`),
};

export default reviewService;
