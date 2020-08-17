import React, { useState } from "react";

const Form = ({ setError }) => {
  const [dataForm, setDataForm] = useState({
    ciudad: "",
    pais: "",
  });

  const getData = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const { ciudad, pais } = dataForm;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ciudad.trim() === "" || pais.trim() === "") {
      setError(true);
      return;
    } else {
      setError(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field col s12">
        <input type="text" name="ciudad" id="ciudad" onChange={getData} />
        <label htmlFor="ciudad"> Ciudad: </label>
      </div>
      <div className="input-field col s12">
        <select name="pais" id="pais" onChange={getData}>
          <option value=""> --selecciones un pais-- </option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais"> Pais: </label>
      </div>
      <button type="submit"> Consultar </button>
    </form>
  );
};

export default Form;
