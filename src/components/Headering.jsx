import React from "react";

import PropTypes from "prop-types";

const Headering = ({ title }) => {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-2">
        <a href="#!" className="brand-logo">
          {title}
        </a>
      </div>
      ;
    </nav>
  );
};

Headering.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Headering;
