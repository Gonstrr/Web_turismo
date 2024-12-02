import './styles/styles.css';

import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Destinations from './pages/Destinations';
import Contact from './pages/Contact';
import ToursSantiago from './pages/TourSantiago'; // Ruta a tu archivo de ToursSantiago
import ToursValdivia from './pages/TourValdivia';
import Knowme from './pages/Knowme';
import ToursNavigation from './pages/ToursNavigation';
import ToursAdventure from './pages/ToursAdventure';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Knowme" element={<Knowme />} />
        <Route path="/tours-santiago" element={<ToursSantiago />} />
        <Route path="/tours-valdivia" element={<ToursValdivia />} />
        <Route path="/tours-navigation" element={<ToursNavigation />} />
        <Route path="/tours-patagonia" element={<ToursAdventure />} />
      </Routes>
    </Router>
  );
};


export default App;
