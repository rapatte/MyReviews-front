export const PAGE_HOME = `/`;
export const PAGE_REVIEWS = `/reviews/`;
export const PAGE_LOGIN = `/login/`;
export const PAGE_NEWREVIEW = `/addReview/`;
export const PAGE_DETAILS = `/reviews/details/`;
export const PAGE_MODIFIER = `/update/`;

export const routes = [
  {
    name: "Home",
    path: PAGE_HOME,
  },
  {
    name: "Reviews",
    path: PAGE_REVIEWS,
  },
  {
    name: "addReviews",
    path: PAGE_NEWREVIEW,
  },
  {
    name: "addReviews",
    path: PAGE_MODIFIER,
  },
  {
    name: "detailsReview",
    path: PAGE_NEWREVIEW,
  },
  {
    name: "Login",
    path: PAGE_LOGIN,
  },
];
