import React from "react";
import PropTypes from "prop-types";
import "./searchForm.scss";

function SearchForm({ searchValue, setSearchValue }) {
  return (
    <div className="searchBox">
      <input
        className="form-control"
        placeholder="Rechercher..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  );
}

SearchForm.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default SearchForm;
