import './styles/styles.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Destinations from './pages/Destinations';
import Contact from './pages/Contact';
import ToursSantiago from './pages/TourSantiago'; // Ruta a tu archivo de ToursSantiago
import ToursValdivia from './pages/TourValdivia';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tours-santiago" element={<ToursSantiago />} />
        <Route path="/tours-valdivia" element={<ToursValdivia />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
