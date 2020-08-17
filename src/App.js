import React, { Fragment } from "react";
import Headering from "./components/Headering";
import ContentForm from "./components/ContentForm";

function App() {
  return (
    <Fragment>
      <Headering title="Clima App" />
      <ContentForm />
    </Fragment>
  );
}

export default App;
