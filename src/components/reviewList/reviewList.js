/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import PropTypes from "prop-types";
import "./reviewList.scss";
import { useHistory } from "react-router-dom";
import reviewService from "../../services/review";
import { PAGE_DETAILS } from "../../constants/router";

const ReviewList = ({ reviews }) => {
  const history = useHistory();
  return (
    <>
      {reviews.map((review) => (
        <div key={review.id} className="m-2 poster">
          <img
            onClick={async () => {
              const data = await reviewService.getOne(review.title);
              const url = `${PAGE_DETAILS}${data.data.title}`;
              history.push(url);
            }}
            src={review.poster}
            alt="movie poster"
          />
        </div>
      ))}
    </>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewList;
