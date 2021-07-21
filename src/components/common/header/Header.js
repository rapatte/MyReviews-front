import React from "react";
import PropTypes from "prop-types";
import Navbar from "../navbar";
import "./header.scss";

function Header({ searchValue, setSearchValue }) {
  return (
    <div className="d-inline-flex align-items-center mt-4 mb-4 header">
      <div>
        <a href="/" className="header-logo">
          LOGO
        </a>
      </div>
      <input
        className="form-control"
        placeholder="Rechercher..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />

      <Navbar />
    </div>
  );
}

Header.defaultProps = {
  searchValue: "",
};

Header.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func.isRequired,
};

export default Header;
