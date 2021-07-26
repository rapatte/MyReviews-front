import React from "react";
import PropTypes from "prop-types";
import "./reviewList.scss";

const ReviewList = ({ reviews }) => (
  <>
    {reviews.map((review) => (
      <div key={review.id} className="m-2 poster">
        <img src={review.poster} alt="movie poster" />
      </div>
    ))}
  </>
);

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewList;
