import { Link } from 'react-router-dom';
import '../styles/header.css'; // Asegúrate de importar el archivo CSS

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="logo-container">
          {/* Agregar un logo visual */}
          <img src="/path-to-logo.png" alt="Logo" className="logo" />
          <h1>Turismo Camino Aventura</h1>
        </div>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/destinations">Destinos</Link>
          <Link to="/Knowme">Quiénes somos</Link>
          <Link to="/contact">Contacto</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
