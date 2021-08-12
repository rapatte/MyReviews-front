import api from "./api";

const reviewService = {
  createReview: async (review) => api.post("/reviews", review),
  deleteReview: async (title) => api.delete(`/reviews/${title}`),
  getAll: async () => api.get("/reviews"),
  getByCategory: async (category) => api.get(`reviews/${category}`),
  getLatest: async () => api.get("/reviews/latest"),
  getOne: async (title) => api.get(`/reviews/${title}`),
  getSearchReview: async (title) => api.get(`/reviews/review/${title}`),
  updateReview: async (title, review) => api.put(`/reviews/${title}`, review),
};

export default reviewService;
