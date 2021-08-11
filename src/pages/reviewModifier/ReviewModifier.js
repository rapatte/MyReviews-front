/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { PAGE_DETAILS } from "../../constants/router";
import genreService from "../../services/genres";
import reviewService from "../../services/review";
import "./reviewModifier.scss";

function ReviewModifier() {
  const [review, setReview] = useState({});
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState("");
  const [trailer, setTrailer] = useState("");
  const [score, setScore] = useState("");
  const [poster, setPoster] = useState("");
  const [category, setCategory] = useState("");
  const [genres, setGenres] = useState([]);
  const [listGenre, setListGenre] = useState([]);
  const [genre, setGenre] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setError] = useState("");
  const history = useHistory();
  const titleUrl = history.location.pathname.split("/")[2];

  const data = { category, genres, poster, resume, score, title, trailer };
  const getReview = async () => {
    const response = await reviewService.getOne(titleUrl);
    setReview(response.data);
    setGenre([response.data.genres][0][0].name);
    setTitle(response.data.title);
    setTrailer(response.data.trailer);
    setScore(response.data.score);
    setPoster(response.data.poster);
    setResume(response.data.resume);
    setCategory(response.data.category);
  };

  useEffect(() => {
    getReview();
  }, []);

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (title !== "" || resume !== "") {
      try {
        const response = await reviewService.updateReview(review.title, data);
        console.log(response);
        setLoading(false);
        setError("");
        history.push(`${PAGE_DETAILS}${title}`);
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
    setListGenre(response.data);
  };
  return (
    <>
      <p>En train de modifier {review.title}.</p>
      <img src={review.poster} alt="poster" />
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
          <option value={category}>{category}</option>
          <option value="film">Film</option>
          <option value="serie">Série</option>
          <option value="anime">Anime</option>
        </select>
        <label htmlFor="genre">Genre</label>
        <select
          onClick={getGenres}
          onChange={(e) => setGenres([{ name: e.target.value }])}
        >
          <option defaultValue={genres} value={genres.name}>
            {genre}
          </option>
          {listGenre.map((el) => (
            <option key={el.id} value={el.name}>
              {el.name}
            </option>
          ))}
        </select>
        <input
          type="button"
          value={loading ? "Chargement..." : "Modifier la review"}
          disabled={loading}
          onClick={handleSubmit}
        />
      </form>
    </>
  );
}

export default ReviewModifier;
