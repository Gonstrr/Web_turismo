import React from 'react';
import '../styles/TourValdivia.css';

interface Tour {
  name: string;
  itinerary: string;
  includes: string;
  price: string;
  reservation?: string;
  image: string;
}

const tours: Tour[] = [
  {
    name: 'Walking Tour Valdivia',
    itinerary:
      'Jardín Botánico UACH / Parque Prochelle / Puente Pedro de Valdivia / Chocolatería Entre Lagos / Monumentos Torreón / Iglesia San Francisco / AV. Libertad / Mercado Municipal (compras de artesanía) / Feria Fluvial (degustación de queso artesanal) / Péndulo de Foucault / Mercado Municipal (compra de artesanías)',
    includes:
      'Guía turístico / 10% descuento en chocolatería Entre Lagos / Degustación de quesos artesanales',
    price: 'Valor Por Persona: $9.000 CLP',
    image: '/images/walkingvaldivia.jpeg', // Cambia la ruta por la imagen correspondiente
  },
  {
    name: 'City Tour Valdivia y Niebla',
    itinerary:
      '(Martes a Sábado) Torreón del Barro / Costanera de Valdivia / Feria Fluvial / Fachada Casa Carlos Anwandter / Mercado Municipal / Torreón de los Canelos / Casonas Alemanas / Plaza de la República / Jardín Botánico / Mirador Río Valdivia / Mirador de Niebla / Fuerte y Castillo de Niebla / Visita express Cervecería Kunstmann / Traslados desde hospedaje',
    includes: 'Guía turística / Traslados / Ingresos',
    price: 'Valor: $24.000 CLP (Reserva solo con $7.000)',
    image: '/images/laniebla.jpg', // Cambia la ruta por la imagen correspondiente
  },
  {
    name: 'Trekking Parque Oncol + Playa Pilolcura',
    itinerary:
      'Ingreso y trekking en Parque Oncol / Guía de ecoturismo / Visita playa de Pilolcura / Visita taller de escultura / Mirador de Niebla / Recorrido panorámico costero / Visita Punta Curiñanco / Foto en fachada de Cervecería Kunstmann / Traslados desde hospedaje',
    includes:
      'Traslados / Guía de ecoturismo / Ingreso al parque / Visitas programadas',
    price: 'Valor: $35.000 CLP (Reserva solo con $10.000)',
    image: '/images/treking.jpg', // Cambia la ruta por la imagen correspondiente
  },
  {
    name: 'Tour Huilo Huilo Mágico',
    itinerary:
      'Visita a diferentes miradores durante el recorrido / Visita a Panguipulli / Visita Puerto Fuy / Almuerzo en Neltume o Puerto Fuy (incluye) / Portal Cavernas Volcánicas / Saltos del Llallalca / Portal Mirador los Ciervos / Criadero de los Jabalíes / Museo de los volcanes "Rakin Mapu" / Portal la Leona y Salto la Leona / Visita a Hotel Montaña Mágica / Traslados desde hospedaje',
    includes:
      'Traslado en van de turismo / Guía turística / Almuerzo a elección / Tickets de entrada a todos los senderos, portales, saltos y museo',
    price: 'Valor: $64.000 CLP (Reserva solo con $15.000)',
    image: '/images/huilco.jpg', // Cambia la ruta por la imagen correspondiente
  },
  {
    name: 'Tour Termas Geométricas',
    itinerary:
      'Visita Panguipulli / Visita Mirador Ñisoleufu / Visita diversos miradores durante el recorrido / Almuerzo en cercanías Salto Mili Mili / Visita Salto Mili Mili (opcional $2.500 P/P) / Termas Geométricas (3 horas de baño termal)',
    includes:
      'Almuerzo a elección / Guía turística / Ingreso a las Termas Geométricas (3 horas de baño termal) / Traslados en minivan o minibús de turismo',
    price: 'Valor oferta: $85.000 CLP (Reserva solo con $15.000)',
    image: '/images/termasgeometricas.jpg', // Cambia la ruta por la imagen correspondiente
  },
  {
    name: 'Termas Huilo Huilo + Navegación',
    itinerary:
      'Visita Panguipulli / Visita Licán Ray / Recorrido panorámico por el Lago Calafquén y miradores / Navegación Lago Calafquén / Paso por Coñaripe / Almuerzo en Liquiñe / Visita termas Huilo Huilo (3 horas) / Retorno a Valdivia',
    includes:
      'Traslado en van o minibús de turismo / Guiado turístico / Almuerzo a elección / Ticket Navegación Lago Calafquén / Entrada a las termas',
    price: 'Valor: $70.000 CLP (Reserva solo con $15.000)',
    image: '/images/huilohuilonavegacion.jpg', // Cambia la ruta por la imagen correspondiente
  },
  {
    name: 'Tour Saltos del Petrohué y Puerto Varas + Navegación',
    itinerary:
      'Sendero Laguna Verde y mirador Lago Llanquihue / Saltos del Petrohué / Compra artesanías / Puerto de Petrohué / Navegación lago Todos los Santos / Ensenada y Almuerzo / Puerto Varas / Regreso a Valdivia',
    includes:
      'Almuerzo a elección / Ingreso sendero Laguna Verde / Ingreso Saltos del Petrohué / Ticket de navegación lago Todos los Santos / Guía turístico / Traslados durante todo el día / Todas las visitas programadas',
    price: 'Valor: $68.000 CLP (Reserva solo con $15.000)',
    image: '/images/saltopetrohue.jpeg', // Cambia la ruta por la imagen correspondiente
  },
  {
    name: 'Tour Pucón, Villarrica y Ojos del Caburgua',
    itinerary:
      'Visita "Casa del Queso" y Cervecería Bundor / Visita Villarrica y Costanera / “Ruca Newen” Mapuche / Recorrido panorámico Lago Villarrica / Visita Pucón y Costanera / Almuerzo en Pucón / Playa de Caburgua / Mirador de Peces / Parque Ojos del Caburgua / Regreso a Valdivia',
    includes:
      'Almuerzo a elección / Guiado Turístico / Ticket ingreso Parque Ojos del Caburgua / Entrada a Mirador de Peces / Café de cortesía en Ruka Newen / Traslados durante todo el día',
    price: 'Valor: $65.000 CLP (Reserva solo con $15.000)',
    image: '/images/tourpucon.jpg', // Cambia la ruta por la imagen correspondiente
  },
  {
    name: 'Tour Lago Rupanco y Salto el Calzoncillo',
    itinerary:
      'Recogida desde lugar de hospedaje en Valdivia / Navegación hacia el "Salto el Calzoncillo" (90 minutos de duración, ida y retorno) / Visita a Puerto Octay / Visita a Frutillar / Tarde libre a disposición en Frutillar / Retorno a Valdivia',
    includes:
      'Alojamiento en Hostería en Lago Rupanco / 1 desayuno / 2 almuerzos / 1 cena / Ticket de navegación por Lago Rupanco / Guía de turismo / Todos los traslados',
    price: 'Valor: $185.000 CLP (Reserva solo con $20.000)',
    image: '/images/rupanco.jpeg', // Cambia la ruta por la imagen correspondiente
  },
];


const TourCard: React.FC<Tour> = ({ name, itinerary, includes, price, reservation, image }) => (
  <div className="tour-card">
    <img src={image} alt={name} className="tour-image" />
    <div className="tour-details">
      <h2>{name}</h2>
      <p>
        <strong>Itinerario:</strong> {itinerary}
      </p>
      <p>
        <strong>Incluye:</strong> {includes}
      </p>
      <p>
        <strong>Precio:</strong> {price}
      </p>
      {reservation && <p className="reservation">{reservation}</p>}
      <button className="reserve-btn">Más Información</button>
    </div>
  </div>
);

const TourValdivia: React.FC = () => (
  <div className="tours-valdivia-container">
    <h1>Excursiones por el Día y Termas en Valdivia</h1>
    <p>
      Si quieres experimentar y conocer en un día los atractivos e históricos que tiene para ti Valdivia, estos
      tours son ideales para ti.
    </p>
    <div className="tours-grid">
      {tours.map((tour, index) => (
        <TourCard key={index} {...tour} />
      ))}
    </div>
  </div>
);

export default TourValdivia;
