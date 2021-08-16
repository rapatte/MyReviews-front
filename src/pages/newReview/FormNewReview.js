/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import reviewService from "../../services/review";
import "./formReview.scss";
import genreService from "../../services/genres";
import { PAGE_DETAILS } from "../../constants/router";

function FormNewReview() {
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState("");
  const [trailer, setTrailer] = useState("");
  const [score, setScore] = useState("");
  const [poster, setPoster] = useState("");
  const [category, setCategory] = useState(null);
  const [genres, setGenres] = useState([]);
  const [genre, setGenre] = useState([""]);
  const [loading, setLoading] = useState(false);
  const [errors, setError] = useState("");

  const history = useHistory();

  const data = { category, genre, poster, resume, score, title, trailer };
  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (title !== "" || resume !== "" || category) {
      try {
        await reviewService.createReview(data);
        setLoading(false);
        setError("");
        history.push(`${PAGE_DETAILS}${data.title}`);
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
  const getGenres = async () => {
    const response = await genreService.getAll();
    setGenres(response.data);
  };
  return (
    <>
      {errors ? <p className="error-msg-reviewForm">{errors}</p> : null}
      <form className="newReviewForm">
        <label htmlFor="title">Titre</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="resume">Synopsis</label>
        <textarea
          type="textarea"
          rows="6"
          cols="40"
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
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">--Choisir une catégorie--</option>
          <option value="film">Film</option>
          <option value="serie">Série</option>
          <option value="anime">Anime</option>
        </select>
        <label htmlFor="genre">Genre</label>
        <select
          onClick={getGenres}
          onChange={(e) => setGenre([e.target.value])}
        >
          <option value="">--Choisir un genre--</option>
          {genres.map((el) => (
            <option value={el.name}>{el.name}</option>
          ))}
        </select>
        <input
          type="button"
          value={loading ? "Chargement..." : "Poster la review"}
          disabled={loading}
          onClick={handleSubmit}
        />
      </form>
    </>
  );
}

export default FormNewReview;
