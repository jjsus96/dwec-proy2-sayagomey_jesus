import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomp from './components/navbar/Navbarcomp';
import Footer from './components/footer/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RecuperacionT1 from './components/pages/RecuperacionT1';
import RecuperacionT3 from './components/pages/RecuperacionT3';
import Portfolio from './components/pages/Portfolio';
import Error from './components/pages/Error';

function App() {
  return (
    <BrowserRouter>
    <Navbarcomp />
      <Routes>
        <Route path='/Tema1' element= {<RecuperacionT1 />} />
        <Route path='/Tema3' element= {<RecuperacionT3 />} />
        <Route path='/Portfolio' element= {<Portfolio />} />
        <Route path='*' element= {<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
