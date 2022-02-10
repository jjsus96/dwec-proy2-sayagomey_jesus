import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbarcomp'
import Inicio from './components/inicio/Inicio'
import Formacion from './components/formacion/Formacion'
import Video from './components/video/Video';
import Tema1 from './components/tema1/Tema1';

function App() {
  return (
    <div className="App">
      <div className='principal'>
      <Navbar />
      <Inicio />
      <Formacion />
      <Tema1 />
      </div>
    </div>
  );
}

export default App;
