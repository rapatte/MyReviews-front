import React from "react";
import PropTypes from "prop-types";

function SearchForm({ searchValue, setSearchValue }) {
  return (
    <div>
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
