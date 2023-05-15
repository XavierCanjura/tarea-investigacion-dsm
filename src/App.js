import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import Colaboradores from "./components/Colaboradores";
import Proyecto from "./components/Proyecto";
import Servicios from "./components/Servicios";
import Contactanos from "./components/Contactanos";
import Precios from "./components/Precios";
import Descargar from "./components/Descargar";

const App = () => {
  return (
    <>
      <Navbar />
      <Nosotros />
      <Servicios />
      <Proyecto />
      <Precios />
      <Colaboradores />
      <Descargar />
      <Contactanos />
    </>
  );
};

export default App;
