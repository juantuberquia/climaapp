import React from "react";

const Temperature = ({ temp }) => {
  // if (!temp) return null;

  const { main, name } = temp;

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

export default Temperature;
