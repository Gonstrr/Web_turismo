import React from 'react';
import { Link } from 'react-router-dom';  // Para crear enlaces entre páginas
import '../styles/TourSantiago.css';

const toursData = [
  {
    name: "Tour Viña Concha y Toro",
    image: "../images/vinito.jpeg",  // Asegúrate de tener las imágenes disponibles
    price: "$45.000 CLP (51 USD) Adulto / $29.000 CLP (33 USD) Menores de 18",
    description: "Disfruta un recorrido guiado por los viñedos, la bodega Casillero del Diablo y mucho más.",
    link: "/tour-viña-concha-toro"
  },
  {
    name: "Tour Termas Valle de Colina",
    image: "../images/termasvallecolina.jpg",
    price: "$44.000 CLP (50 USD) Adulto / $39.000 CLP (44 USD) Niños (4-12 años)",
    description: "Relájate en las termas con un tour panorámico en el Cajón del Maipo y sus alrededores.",
    link: "/tour-termas-valle-colina"
  },
  {
    name: "Tour Viña del Mar y Valparaíso",
    image: "../images/Vina-del-Mar-y-Valparaiso.jpg",
    price: "$35.000 CLP (40 USD) Adulto / $29.000 CLP (33 USD) Niños",
    description: "Recorrido por Viña del Mar y Valparaíso con navegación y visita a las playas.",
    link: "/tour-vina-valparaiso"
  },
  {
    name: "Tour Embalse El Yeso + Picnic",
    image: "../images/embalseyeso.jpg",
    price: "$29.000 CLP (33 USD) Adulto / $24.000 CLP (27 USD) Niños (4-12 años)",
    description: "Un recorrido en el Cajón del Maipo y picnic junto al Embalse El Yeso.",
    link: "/tour-embalse-yeso"
  },
  {
    name: "Tour Valle Nevado y Farellones",
    image: "../images/farellones.jpg",
    price: "$29.000 CLP (33 USD) Adulto / $24.000 CLP (27 USD) Niños (4-12 años)",
    description: "Disfruta de un día en la nieve con visitas a los centros de ski más famosos de Chile.",
    link: "/tour-valle-nevado"
  },
];

const ToursSantiago: React.FC = () => {
  return (
    <div className="tours-santiago-container">
      <h1>Explora Nuestros Tours en Santiago</h1>
      <div className="tours-grid">
        {toursData.map((tour, index) => (
          <div key={index} className="tour-card">
            <img src={tour.image} alt={tour.name} className="tour-image" />
            <div className="tour-details">
              <h2>{tour.name}</h2>
              <p>{tour.description}</p>
              <p className="price">{tour.price}</p>
              <Link to={tour.link}>
                <button className="reserve-btn">Ver Más</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToursSantiago;
