/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import ReviewList from "../../components/reviewList/reviewList";
import "bootstrap/dist/css/bootstrap.min.css";
import reviewService from "../../services/review";
import ReviewListHeading from "../../components/reviewListHeading";
import SearchForm from "../../components/searchForm";

function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [latestReviews, setLatestReviews] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [topFilm, setTopFilm] = useState([]);
  const [topSerie, setTopSerie] = useState([]);
  const [searchedReview, setSearchedReview] = useState([]);

  const getReviewRequest = async () => {
    const getLatestReviews = await reviewService.getLatest();
    setLatestReviews(getLatestReviews.data);
  };
  const getTopAnime = async () => {
    const getTopAnimeReviews = await reviewService.getByCategory("anime");
    setTopAnime(getTopAnimeReviews.data);
  };
  const getTopFilm = async () => {
    const getTopFilmReviews = await reviewService.getByCategory("film");
    setTopFilm(getTopFilmReviews.data);
  };
  const getTopSerie = async () => {
    const getTopSerieReviews = await reviewService.getByCategory("serie");
    setTopSerie(getTopSerieReviews.data);
  };

  const getSearch = async () => {
    const getSearchedReviews = await reviewService.getSearchReview(searchValue);
    setSearchedReview(getSearchedReviews.data);
  };

  useEffect(() => {
    if (searchValue.length > 0) getSearch();
  }, [searchValue]);

  useEffect(() => {
    getTopAnime();
  }, []);

  useEffect(() => {
    getReviewRequest();
  }, []);

  useEffect(() => {
    getTopFilm();
  }, []);

  useEffect(() => {
    getTopSerie();
  }, []);

  return (
    <div className="container-fluid movie-app">
      <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
      {searchValue.length > 0 && (
        <div>
          <div className="row">
            <ReviewListHeading heading="Recherche" />
          </div>
          <div className="Row d-flex justify-content-start overflow-auto flex-nowrap">
            <ReviewList reviews={searchedReview} />
          </div>
        </div>
      )}
      <div className="row">
        <ReviewListHeading heading="Dernières reviews" />
      </div>
      <div className="row">
        <ReviewList reviews={latestReviews} />
      </div>
      <div className="row">
        <ReviewListHeading heading="Top 5 film" />
      </div>
      <div className="row">
        {topFilm.length > 0 ? (
          <ReviewList reviews={topFilm} />
        ) : (
          <p>Pas encore de reviews</p>
        )}
      </div>
      <div className="row">
        <ReviewListHeading heading="Top 5 anime" />
      </div>
      <div className="row">
        {topAnime.length > 0 ? (
          <ReviewList reviews={topAnime} />
        ) : (
          <p>Pas encore de reviews</p>
        )}
      </div>
      <div className="row">
        <ReviewListHeading heading="Top 5 serie" />
      </div>
      <div className="row">
        {topSerie.length > 0 ? (
          <ReviewList reviews={topSerie} />
        ) : (
          <p>Pas encore de reviews</p>
        )}
      </div>
    </div>
  );
}

export default Home;
