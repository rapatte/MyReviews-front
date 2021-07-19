/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./app.css";
import ReviewList from "./components/reviewList";
import reviewService from "./services/review";

function App() {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(async () => {
    try {
      const allReviews = await reviewService.getAll();
      setReviews(allReviews);
      console.log(reviews);
    } catch (e) {
      setError(e);
      console.log(error);
    }
  }, []);
  return (
    <div>
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default App;
