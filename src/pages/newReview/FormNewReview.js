/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import reviewService from "../../services/review";
import "./formReview.scss";

function FormNewReview() {
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState("");
  const [trailer, setTrailer] = useState("");
  const [score, setScore] = useState("");
  const [poster, setPoster] = useState("");
  const [category, setCategory] = useState("");
  const [genre, setGenre] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setError] = useState("");

  const data = { category, genre, poster, resume, score, title, trailer };
  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (title !== "" || resume !== "") {
      try {
        const response = await reviewService.createReview(data);
        console.log(response);
        setLoading(false);
        setError("");
      } catch (e) {
        if (e.response.data.errors) setError(e.response.data.errors[0].message);
        else {
          setError(e.response.data.message);
        }
        setLoading(false);
      }
    } else {
      setError("Tous les champs sont recquis");
      setLoading(false);
    }
  };
  return (
    <>
      <form className="newReviewForm">
        <label htmlFor="title">Titre</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="resume">Synopsis</label>
        <input
          type="textarea"
          onChange={(e) => setResume(e.target.value)}
          value={resume}
        />
        <label htmlFor="trailer">Trailer(url)</label>
        <input
          type="text"
          onChange={(e) => setTrailer(e.target.value)}
          value={trailer}
        />
        <label htmlFor="score">Note</label>
        <input
          type="number"
          onChange={(e) => setScore(e.target.value)}
          value={score}
        />
        <label htmlFor="poster">Affiche(url)</label>
        <input
          type="text"
          onChange={(e) => setPoster(e.target.value)}
          value={poster}
        />
        <label htmlFor="category">Catégorie</label>
        <input
          type="text"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <label htmlFor="genre">Genre</label>
        <input
          type="text"
          onChange={(e) => setGenre(e.target.value)}
          value={genre}
        />
        <input
          type="button"
          value={loading ? "Chargement..." : "Poster la review"}
          disabled={loading}
          onClick={handleSubmit}
        />
      </form>
      {errors ? <p className="error-msg-reviewForm">{errors}</p> : null}
    </>
  );
}

export default FormNewReview;
