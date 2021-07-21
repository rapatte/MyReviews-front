import React from "react";
import PropTypes from "prop-types";

const ReviewListHeading = ({ heading }) => (
  <div className="col">
    <h1>{heading}</h1>
  </div>
);

ReviewListHeading.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default ReviewListHeading;
