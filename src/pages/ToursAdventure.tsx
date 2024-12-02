
import '../styles/ToursAdventure.css';

const ToursAdventure = () => (
  <div className="adventure-container">
    
    <h2 className="adventure-title">Turismo de Aventura</h2>
    <p className="adventure-description">
      Vive experiencias únicas y memorables explorando los paisajes y actividades más emocionantes de la región.
    </p>

    <div className="adventure-cards">
      {/* Card 1: Día de Aventura */}
      <div className="adventure-card">

        <img src="/images/huilco.jpg" alt="Día de Aventura" className="adventure-image" />
        <h3>Día de Aventura: Kayak + Canopy</h3>
        <p>
          <strong>Itinerario:</strong> Canopy en Parque Oncol, Playa Pilolcura, Feria Costumbrista de Niebla, y más.
        </p>
        <p>
          <strong>Incluye:</strong> Guiado turístico, equipos completos de kayak y canopy.
        </p>
        <p className="adventure-price">Valor: <strong>$55.000 CLP</strong> (Reserva con $15.000)</p>
        <button className="adventure-btn">Reserva Aquí</button>
      </div>

      {/* Card 2: Tour Rafting en Río San Pedro */}
      <div className="adventure-card">

        <img src="/images/farellones.jpg" alt="Rafting en Río San Pedro" className="adventure-image" />
        <h3>Tour Rafting en Río San Pedro + Picnic</h3>
        <p>
          <strong>Itinerario:</strong> Miradores, rafting, picnic en la selva valdiviana, y más.
        </p>
        <p>
          <strong>Incluye:</strong> Guía turístico, traslados, equipamiento completo, y fotografías profesionales.
        </p>
        <p className="adventure-price">Valor: <strong>$70.000 CLP</strong> (Reserva con $20.000)</p>
        <button className="adventure-btn">Reserva Aquí</button>
      </div>

      {/* Card 3: Trekking Parque Oncol */}
      <div className="adventure-card">

        <img src="/images/treking.jpg" alt="Trekking Parque Oncol" className="adventure-image" />
        <h3>Trekking Parque Oncol + Playa Pilolcura</h3>
        <p>
          <strong>Incluye:</strong> Guía de ecoturismo, senderismo, visitas a miradores, y traslados.
        </p>
        <p className="adventure-price">Valor oferta: <strong>$35.000 CLP</strong> (Reserva con $10.000)</p>
        <button className="adventure-btn">Reserva Aquí</button>
      </div>

      {/* Card 4: Tour Huilo Huilo */}
      <div className="adventure-card">

        <img src="/images/valdivia.jpg" alt="Tour Huilo Huilo" className="adventure-image" />
        <h3>Tour Huilo Huilo Mágico</h3>
        <p>
          <strong>Itinerario:</strong> Visitas a miradores, saltos, museos, y almuerzo incluido.
        </p>
        <p>
          <strong>Incluye:</strong> Traslados, entradas, guía turístico, y almuerzo.
        </p>
        <p className="adventure-price">Valor: <strong>$64.000 CLP</strong> (Reserva con $15.000)</p>
        <button className="adventure-btn">Reserva Aquí</button>
      </div>

      {/* Card 5: Tour Nieve Volcán Osorno */}
      <div className="adventure-card">

        <img src="/images/embalseyeso.jpg" alt="Tour Volcán Osorno" className="adventure-image" />
        <h3>Tour a la Nieve: Volcán Osorno</h3>

        <p>
          <strong>Itinerario:</strong> Cascadas, navegación en lago Todos los Santos, y actividades en la nieve.
        </p>
        <p>
          <strong>Incluye:</strong> Guía turístico, traslados, y tickets de ingreso.
        </p>
        <p className="adventure-price">Valor: <strong>$55.000 CLP</strong> (Reserva con $15.000)</p>
        <button className="adventure-btn">Reserva Aquí</button>
      </div>
    </div>
  </div>
);

export default ToursAdventure;
