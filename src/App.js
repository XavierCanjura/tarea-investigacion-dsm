import Navbar from './components/Navbar'
import Nosotros from './components/Nosotros'
import Colaboradores from './components/Colaboradores'
import Proyecto from './components/Proyecto'
import Servicios from './components/Servicios'
import Contactanos from './components/Contactanos'

const App = () => {
    return (
        <>
            <Navbar />
            <Nosotros />
            <Servicios />
            <Proyecto />
            <Colaboradores />
            <Contactanos />
        </>
    );
}

export default App;
