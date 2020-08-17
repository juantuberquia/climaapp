import React from "react";

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

export default Headering;
