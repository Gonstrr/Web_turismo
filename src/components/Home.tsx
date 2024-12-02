import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleSantiagoClick = () => {
    navigate('/tours-santiago');
  };

  const handleValdiviaClick = () => {
    navigate('/tours-valdivia');
  };

  return (
    <div className="home-container">
      {/* Imagen izquierda */}
      <div className="image-box image-left">
        <button className="image-button" onClick={handleSantiagoClick}>
          Tours Santiago
        </button>
      </div>

      {/* Imagen derecha */}
      <div className="image-box image-right">
        <button className="image-button" onClick={handleValdiviaClick}>
          Tour Valdivia
        </button>
      </div>
    </div>
  );
};

export default Home;
