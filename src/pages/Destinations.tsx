import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import '../styles/Destinations.css';

interface Destination {
  name: string;
  image: string;
  description: string;
}

const destinationsData: Destination[] = [
  {
    name: "Santiago",
    image: "../images/santiago.jpg",
    description: "Explora la vibrante capital de Chile, con su mezcla de cultura y modernidad."
  },
  {
    name: "Valdivia",
    image: "../images/valdivia.jpg",
    description: "Una ciudad encantadora en el sur de Chile, conocida por su rica historia, arquitectura alemana, hermosos ríos y la cercanía a la naturaleza."
  },
  {
    name: "Tour en Navegación",
    image: "../images/valpo.jpg",
    description: "La ciudad de Valdivia, conocida como la Perla del Sur, se encuentra rodeada por hermosos ríos, acompañada de historia, cultura y una frondosa selva valdiviana que te invitamos a vivenciar."
  },
  {
    name: "",
    image: "../images/patagonia.jpg",
    description: "Una región con glaciares, montañas y paisajes naturales impresionantes."
  }
];

const Destinations: React.FC = () => (
  <div className="destinations-container">
    <h2>Destinos Turísticos</h2>
    <p>Explora los mejores lugares para visitar en Chile.</p>

    <div className="destinations-grid">
      {destinationsData.map((destination, index) => (
        <div key={index} className="destination-card">
          <img
            src={destination.image}
            alt={destination.name}
            className="destination-image"
          />
          <h3>{destination.name}</h3>
          <p>{destination.description}</p>
          {/* Configura enlaces específicos para cada destino */}
          {destination.name === "Santiago" ? (
            <Link to="/tours-santiago">
              <button className="reserve-btn">Ver Tours en Santiago</button>
            </Link>

          ) : destination.name === "Valdivia" ? (
            <Link to="/tours-valdivia">
              <button className="reserve-btn">Ver Tours en Valdivia</button>
            </Link>

          ) : destination.name === "Tour en Navegación" ? (
            <Link to="/tours-navigation">
              <button className="reserve-btn">Reserva ahora</button>

            </Link>) : (
            <button className="reserve-btn">Reserva ahora</button>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default Destinations;
