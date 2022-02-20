import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from '../inicio/Inicio'
import Formacion from '../formacion/Formacion'
import Proyectos from '../proyectos/Proyectos';
import Contacto from '../contacto/Contacto';

function Portfolio() {
  return (
      <div className="App">
        <div className='principal'>
            <Inicio />
            <Formacion />
            <Proyectos />
            <Contacto />
            <br></br>
        </div>
      </div>
  );
}

export default Portfolio;
