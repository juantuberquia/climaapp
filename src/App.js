import React, { Fragment, useState } from "react";
import Headering from "./components/Headering";
import ContentForm from "./components/ContentForm";
import Error from "./components/Error";

function App() {
  const [error, setError] = useState(false);

  return (
    <Fragment>
      <Headering title="Clima App" />
      {error ? <Error message="llenar todos los campos" /> : null}
      <ContentForm setError={setError} />
    </Fragment>
  );
}

export default App;
