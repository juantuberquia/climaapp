import React, { useState } from "react";
import Form from "./Form";
import Error from "./Error";

const ContentForm = ({ setDataForm, dataForm, setSearch }) => {
  const [error, setError] = useState(false);

  return (
    <div className="content-form">
      <div className="container">
        <div className="row">
          <div className="col m6 s12">
            {error ? <Error message="Llenar Todos los Campos" /> : null}
            <Form
              setError={setError}
              setDataForm={setDataForm}
              dataForm={dataForm}
              setSearch={setSearch}
            />
          </div>
          {/* <div className="col m6 s12">2</div> */}
        </div>
      </div>
    </div>
  );
};

export default ContentForm;
