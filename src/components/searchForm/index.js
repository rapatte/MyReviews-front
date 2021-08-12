import React from "react";
import PropTypes from "prop-types";
import "./searchForm.scss";

function SearchForm({ searchValue, setSearchValue }) {
  const searchButton = (category) => {
    setSearchValue(category);
  };
  return (
    <div className="searchBox">
      <input
        className="form-control"
        placeholder="Rechercher..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <p>Chercher par catégorie :</p>
      <button type="button" onClick={() => searchButton("film")}>
        Films
      </button>
      <button type="button" onClick={() => searchButton("anime")}>
        Animes
      </button>
      <button type="button" onClick={() => searchButton("serie")}>
        Séries
      </button>
      <button type="button" onClick={() => searchButton("")}>
        Effacer recherche
      </button>
    </div>
  );
}

SearchForm.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default SearchForm;
