import { useEffect, useState } from 'react';
import '../styles/home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const homeSection = document.getElementById('home');
    if (homeSection && window.scrollY + window.innerHeight > homeSection.offsetTop) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className={isVisible ? 'visible' : ''}>
      <h2>Bienvenido a Turismo Camino Aventura</h2>
      <p>Explora los mejores destinos y experiencias únicas.</p>
      <button>Conoce Mas</button>
    </section>
  );
};

export default Home;
