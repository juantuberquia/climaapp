import React, { Fragment, useState, useEffect } from "react";
import Headering from "./components/Headering";
import ContentForm from "./components/ContentForm";

function App() {
  const [dataForm, setDataForm] = useState({
    ciudad: "",
    pais: "",
  });

  const { ciudad, pais } = dataForm;

  const [search, setSearch] = useState(false);

  useEffect(() => {
    console.log(ciudad);
  }, [search]);

  return (
    <Fragment>
      <Headering title="Clima App" />
      <ContentForm
        dataForm={dataForm}
        setDataForm={setDataForm}
        setSearch={setSearch}
      />
    </Fragment>
  );
}

export default App;
