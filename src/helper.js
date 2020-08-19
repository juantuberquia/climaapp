export const KelvinToCelsius = (data) => {
  let kelvin = Number(data.main.temp);

  return (kelvin - 273.15).toFixed(1);
};
