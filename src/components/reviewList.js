/* eslint-disable array-callback-return */
import React from "react";

const ReviewList = ({ reviews }) => (
  <>
    {reviews.map((review) => {
      <div>
        <img src={review.poster} alt="Movie poster" />
      </div>;
    })}
  </>
);

export default ReviewList;
