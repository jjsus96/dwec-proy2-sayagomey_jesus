import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbarcomp'
import Inicio from './components/inicio/Inicio'
import Formacion from './components/formacion/Formacion'
import Tema1 from './components/tema1/Tema1';
import Tema3 from './components/tema3/Tema3';
import Proyectos from './components/proyectos/Proyectos';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='principal'>
      <Navbar />
      <Inicio />
      <Formacion />
      <Tema1 />
      <Tema3 />
      <Proyectos />
      <Footer />
      </div>
    </div>
  );
}

export default App;
