import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import reviewService from "../../services/review";
import "./reviews.scss";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    const response = await reviewService.getAll();
    setReviews(response.data);
  };

  useEffect(() => {
    getReviews();
  }, []);

  const history = useHistory();

  return (
    <>
      <div className="allReviews">
        <table>
          <thead>
            <tr>
              <th>Affiche</th>
              <th>Titre</th>
              <th>Note</th>
              <th>Date de création</th>
              <th>Catégorie</th>
              <th>Genre</th>
              <th>Détails</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review.id}>
                <td>
                  <img
                    className="poster"
                    src={review.poster}
                    alt={`Affiche de ${review.title}`}
                  />
                </td>
                <td className="title">{review.title}</td>
                <td className="score">{review.score}/20</td>
                <td className="date">{review.createdAt.split("T")[0]}</td>
                <td className="category">{review.category}</td>
                <td className="genre">{review.genres[0].name}</td>
                <td className="details">
                  <button
                    type="button"
                    onClick={() => {
                      history.push(`details/${review.title}`);
                    }}
                  >
                    Consulter
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Reviews;
