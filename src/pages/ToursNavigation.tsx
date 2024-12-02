import '../styles/ToursNavigation.css';

const Tours = () => (
  <div className="tours-container">
    <h2 className="tours-title">Tours en Navegación</h2>
    <p className="tours-description">
      La ciudad de Valdivia, conocida como la Perla del Sur, se encuentra rodeada por hermosos ríos, 
      acompañada de historia, cultura y una frondosa selva valdiviana que te invitamos a vivenciar.
    </p>

    {/* Imagen destacada */}
    <div className="tours-banner">
      <img src="../images/.jpg" alt="Ríos de Valdivia" className="tours-banner-image" />
    </div>

    <div className="tours-cards">
      {/* Card 1: City Tour Valdivia */}
      <div className="tour-card">
        <img src="../images/tournavegacion/navegacioncitytourvaldivia.jpg" alt="City Tour Valdivia" className="tour-card-image" />
        <h3 className="tour-card-title">Navegación: City Tour Valdivia</h3>
        <p className="tour-card-itinerary">
          Itinerario: Navegación registra los tres principales ríos de la ciudad: <br />
          <strong>Río Valdivia / Calle Calle / Río Cau Cau.</strong>
        </p>
        <p className="tour-card-duration">Duración: 1 hora de navegación</p>
        <p className="tour-card-includes">Incluye: Guiado turístico</p>
        <p className="tour-card-price">Valor por persona: <strong>$7.000 CLP</strong></p>
        <button className="tour-card-button">Reserva Aquí</button>
      </div>

      {/* Card 2: Navegación a Punucapa */}
      <div className="tour-card">
        <img src="../images/tournavegacion/pucanama.jpg" alt="Navegación a Punucapa" className="tour-card-image" />
        <h3 className="tour-card-title">Navegación: A Punucapa</h3>
        <p className="tour-card-itinerary">
          Itinerario: 45 minutos de navegación al Santuario de la Naturaleza Carlos Anwandter, 
          visita al pueblo huilliche de Punucapa, ciprés de macrocarpa, degustación de cerveza artesanal 
          y sidra, visita a la iglesia más antigua de la zona, y "El Mesón".
        </p>
        <p className="tour-card-price">
          Valor por persona: <del>$15.000 CLP</del> <strong>$12.000 CLP</strong> <br />
          Reserva solo con $6.000
        </p>
        <button className="tour-card-button">Reserva Aquí</button>
      </div>

      {/* Card 3: Corral y Mancera */}
      <div className="tour-card">
        <img src="../images/tournavegacion/corral.jpg" 
             alt="Corral y Mancera" 
             className="tour-card-image" 
        />
        <h3 className="tour-card-title">
          Navegación: Corral y Mancera
        </h3>
        <p className="tour-card-includes">
          Incluye: Navegación, almuerzo navegando, postre, once o merienda, y guía turístico.
        </p>
        <p className="tour-card-price">
          Valor por persona: <br />
          1ra cubierta: <strong>$45.000 CLP</strong> <br />
          2da cubierta: <strong>$55.000 CLP</strong> <br />
          Reserva solo con $20.000
        </p>
        <button className="tour-card-button">Reserva Aquí</button>
      </div>

      {/* Card 4: Tour Península San Ramón */}
      <div className="tour-card">
        <img src="./images/tournavegacion/peninsulasanramon.jpg" alt="Tour Península San Ramón" className="tour-card-image" />
        <h3 className="tour-card-title">Tour Península: San Ramón</h3>
        <p className="tour-card-includes">
          Incluye: 45 minutos de navegación, pisco sour casero o jugo de bienvenida, asado al palo con 
          acompañamiento, ensalada, vino o jugo, postre, bajativo, senderismo por el bosque, y guiado turístico.
        </p>
        <p className="tour-card-price">
          Valor por persona: <strong>$45.000 CLP</strong> <br />
          Reserva solo con $10.000 (Mínimo 20 personas)
        </p>
        <button className="tour-card-button">Reserva Aquí</button>
      </div>
    </div>
  </div>
);

export default Tours;
