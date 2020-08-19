import React from "react";

const Temperature = ({ temp }) => {
  return (
    <div className="content-form">
      <div className="container">
        <div className="row">
          <div className="col m6 s12">{temp}</div>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
