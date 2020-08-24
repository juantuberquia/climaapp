import React from "react";

import PropTypes from "prop-types";

const Temperature = ({ temp, uploadCompo }) => {
  const { main, name } = temp;

  if (uploadCompo === false) {
    return null;
  }

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2> el clima de {name} es: </h2>
        <p className="temperatura">
          {Number(main.temp - 273.15).toFixed(1)} <span> &#x2103; </span>
        </p>
        <p>
          Temperatura Maxima:
          {Number(main.temp_max - 273.15).toFixed(1)}
          <span> &#x2103; </span>
        </p>
        <p>
          Temperatura Minima:
          {Number(main.temp_min - 273.15).toFixed(1)}
          <span> &#x2103; </span>
        </p>
      </div>
    </div>
  );
};
Temperature.propTypes = {
  temp: PropTypes.object.isRequired,
  uploadCompo: PropTypes.bool.isRequired,
};

export default Temperature;
