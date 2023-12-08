import PropTypes from "prop-types";

const nameList = () => {
  const names = ["Javier", "Maribel", "Chofis", "Wero"];
  return names.map((name, index) => <li key={index}> {name} </li>);
};

export const FirstApp = ({ title, subtitle, name }) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <h2 data-testid="test-subtitle"> {subtitle} </h2>
      <p>{name}</p>
      <p>Checa esta lista:</p>
      <ul>{nameList()}</ul>
    </>
  );
};

FirstApp.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  name: "Fernando",
  subtitle: "No hay subtitulo",
  // title: "No hay titulo",
};
