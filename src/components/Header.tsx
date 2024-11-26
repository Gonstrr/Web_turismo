import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Turismo Inolvidable</h1>
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/destinations">Destinos</Link>
      <Link to="/contact">Contacto</Link>
    </nav>
  </header>
);

export default Header;
