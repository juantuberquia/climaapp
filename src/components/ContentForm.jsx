import React from "react";
import Form from "./Form";

const ContentForm = ({ setError }) => {
  return (
    <div className="content-form">
      <div className="container">
        <div className="row">
          <div className="col m6 s12">
            <Form setError={setError} />
          </div>
          <div className="col m6 s12">2</div>
        </div>
      </div>
    </div>
  );
};

export default ContentForm;
