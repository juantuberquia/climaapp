import React, { Fragment, useState, useEffect } from "react";
import Headering from "./components/Headering";
import Form from "./components/Form";
import Error from "./components/Error";
import Temp from "./components/Temp";

function App() {
  const [dataForm, setDataForm] = useState({
    ciudad: "",
    pais: "",
  });

  const [search, setSearch] = useState(false);
  const [temp, setTemp] = useState({});
  const [error, setError] = useState(false);
  const [uploadCompo, setUploadCompo] = useState(false);
  const [noFindData, setNoFindData] = useState(false);

  const { ciudad, pais } = dataForm;

  useEffect(() => {
    if (search === true) {
      const getData = async () => {
        let apiKey = "d2a7ebc72816b1c96f9115068e0286a9";
        let api = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`
        );
        let result = await api.json();
        // console.log(result.code === 200);
        // console.log(result.code);
        if (result.cod === 200) {
          console.log(" aparezco solo si soy succesf");
          setNoFindData(false);
          setTemp(result);
          setUploadCompo(true);
          setSearch(false);
        } else {
          setNoFindData(true);
          setSearch(false);
          setUploadCompo(false);
          console.log(" aparezco solo si soy error");
          return null;
        }
      };
      getData();
    }
  }, [search]);

  return (
    <Fragment>
      <Headering title="Clima App" />
      <div className="content-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              {error ? <Error message="Llenar Todos los Campos" /> : null}
              {noFindData ? <Error message=" error ciudad ingresada " /> : null}
              <Form
                setError={setError}
                setDataForm={setDataForm}
                dataForm={dataForm}
                setSearch={setSearch}
              />
            </div>
            {uploadCompo ? (
              <div className="col m6 s12">
                <Temp temp={temp} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
