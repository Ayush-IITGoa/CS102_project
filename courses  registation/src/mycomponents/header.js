import React from 'react';
import PropTypes from 'prop-types';
import './Header.css'; 

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h3>
          {props.title}
        </h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Home page format */}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="file:///C:/Users/aamit/OneDrive/Desktop/cs102%20%20project/cs102%20ams%20%20project/home%20page/home.html">
                Home
              </a>
            </li>
            {/* End home page and start about section */}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
          </ul>

          {/* Section to make a search */}
          {/* To make the search bar visible or not */}
          {props.searchbar ? (
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          ) : (
            ''
          )}
          {/* When the search bar is not wanted after the colon */}
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  searchbar: PropTypes.bool.isRequired,
};

export default Header;
