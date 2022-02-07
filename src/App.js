import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbarcomp'
import Inicio from './components/inicio/Inicio'
import Formacion from './components/formacion/Formacion'
import Video from './components/video/Video';

function App() {
  return (
    <div className="App">
      <div className='principal'>
      <Navbar />
      <Inicio />
      <Formacion />
      </div>
    </div>
  );
}

export default App;
