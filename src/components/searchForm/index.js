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
        onFocus={() => {
          setSearchValue("");
        }}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <div className="catSearch">
        <p>Chercher par catégorie :</p>
        <div className="buttonssearch">
          <button type="button" onClick={() => searchButton("film")}>
            Films
          </button>
          <button type="button" onClick={() => searchButton("anime")}>
            Animes
          </button>
          <button type="button" onClick={() => searchButton("serie")}>
            Séries
          </button>
        </div>
        {/* <button type="button" onClick={() => searchButton("")}>
          Effacer recherche
        </button> */}
      </div>
    </div>
  );
}

SearchForm.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default SearchForm;
