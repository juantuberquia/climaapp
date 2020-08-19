import React, { Fragment, useState, useEffect } from "react";
import Headering from "./components/Headering";
import ContentForm from "./components/ContentForm";
import Temp from "./components/Temp";
import { KelvinToCelsius } from "./helper";

function App() {
  const [dataForm, setDataForm] = useState({
    ciudad: "",
    pais: "",
  });

  const [search, setSearch] = useState(false);
  const [temp, setTemp] = useState(0);

  const { ciudad, pais } = dataForm;

  useEffect(() => {
    if (search === true) {
      const getData = async () => {
        let apiKey = "d2a7ebc72816b1c96f9115068e0286a9";
        let api = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`
        );
        let result = await api.json();
        setTemp(KelvinToCelsius(result));
      };
      getData();
    }
  }, [search]);

  return (
    <Fragment>
      <Headering title="Clima App" />
      <ContentForm
        dataForm={dataForm}
        setDataForm={setDataForm}
        setSearch={setSearch}
      />
      <Temp temp={temp} />
    </Fragment>
  );
}

export default App;
