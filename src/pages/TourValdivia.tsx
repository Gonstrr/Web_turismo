import '../styles/TourValdivia.css';



const tours = [
    {
      title: "Walking Tour Valdivia",
      itinerary: [
        "Jardín Botánico UACH",
        "Parque Prochelle",
        "Puente Pedro de Valdivia",
        "Chocolatería Entre Lagos",
        "Monumentos Torreón",
        "Iglesia San Francisco",
        "AV. Libertad",
        "Mercado Municipal (compras de artesanía)",
        "Feria Fluvial (degustación de queso artesanal)",
        "Péndulo de Foucault",
      ],
      includes: [
        "Guía turístico",
        "10% descuento en chocolatería Entre Lagos",
        "Degustación de quesos artesanales",
      ],
      price: 9000,
      currency: "CLP",
      image: "/images/walkingvaldivia.jpeg",
    },
    {
      title: "City Tour Valdivia y Niebla",
      itinerary: [
        "Torreón del Barro",
        "Costanera de Valdivia",
        "Feria Fluvial",
        "Fachada Casa Carlos Anwandter",
        "Mercado Municipal",
        "Torreón de los Canelos",
        "Casonas Alemanas",
        "Plaza de la República",
        "Jardín Botánico",
        "Mirador Río Valdivia",
        "Mirador de Niebla",
        "Fuerte y Castillo de Niebla",
        "Visita express Cervecería Kunstmann",
      ],
      includes: ["Guía turística", "Traslados", "Ingresos"],
      price: 24000,
      reservation: 7000,
      currency: "CLP",
      image: "/images/laniebla.jpg",
    },

    // Nuevo tour
  {
    title: "Trekking Parque Oncol + Playa Pilolcura",
    itinerary: [
      "Ingreso y trekking en Parque Oncol",
      "Guía de ecoturismo",
      "Visita playa de Pilolcura",
      "Visita taller de escultura",
      "Mirador de Niebla",
      "Recorrido panorámico costero",
      "Visita Punta Curiñanco",
      "Foto en fachada de Cervecería Kunstmann",
      "Traslados desde hospedaje",
    ],
    includes: [
      "Ingreso y trekking en Parque Oncol",
      "Guía de ecoturismo",
      "Visita playa de Pilolcura",
      "Visita taller de escultura",
      "Mirador de Niebla",
      "Recorrido panorámico costero",
      "Visita Punta Curiñanco",
      "Foto en fachada de Cervecería Kunstmann",
      "Traslados desde hospedaje",
    ],
    price: 35000,
    reservation: 10000,
    currency: "CLP",
    image: "/images/treking.jpg", // Asumiendo que la imagen está en public/images
  },

   // Nuevo tour: Tour Huilo Huilo Mágico
   {
    title: "Tour Huilo Huilo Mágico",
    itinerary: [
      "Visita a diferentes miradores durante el recorrido",
      "Visita a Panguipulli",
      "Visita Puerto Fuy",
      "Almuerzo en Neltume o Puerto Fuy (incluye)",
      "Portal Cavernas Volcánicas",
      "Saltos del Llallalca",
      "Portal Mirador los Ciervos",
      "Criadero de los Jabalíes",
      "Museo de los volcanes 'Rakin Mapu'",
      "Portal la Leona y Salto la Leona",
      "Visita a Hotel Montaña Mágica",
      "Traslados desde hospedaje",
    ],
    includes: [
      "Traslado en van de turismo",
      "Guía turística",
      "Almuerzo a elección",
      "Tickets de entrada a todos los senderos, portales, saltos y museo",
    ],
    price: 64000,
    reservation: 15000,
    currency: "CLP",
    image: "/images/huilco.jpg", // Asumiendo que la imagen está en public/images
  },

  // Nuevo tour 1: Tour Termas Geométricas
  {
    title: "Tour Termas Geométricas",
    itinerary: [
      "Visita Panguipulli",
      "Visita Mirador Ñisoleufu",
      "Visita diversos miradores durante el recorrido",
      "Almuerzo en cercanías Salto Mili Mili",
      "Visita Salto Mili Mili (opcional $2.500 P/P)",
      "Termas Geométricas (3 horas de baño termal)",
    ],
    includes: [
      "Almuerzo a elección",
      "Guía turística",
      "Ingreso a las Termas Geométricas (3 horas de baño termal)",
      "Traslados en minivan o minibús de turismo",
    ],
    price: 85000,
    reservation: 15000,
    currency: "CLP",
    image: "/images/termasgeometricas.jpg",
  },
  // Nuevo tour 2: Termas Huilo Huilo + Navegación
  {
    title: "Termas Huilo Huilo + Navegación",
    itinerary: [
      "Visita Panguipulli",
      "Visita Licán Ray",
      "Recorrido panorámico por el Lago Calafquén y miradores",
      "Navegación Lago Calafquén",
      "Paso por Coñaripe",
      "Almuerzo en Liquiñe",
      "Visita termas Huilo Huilo (3 horas)",
      "Retorno a Valdivia",
    ],
    includes: [
      "Traslado en van o minibús de turismo",
      "Guiado turístico",
      "Almuerzo a elección",
      "Ticket Navegación Lago Calafquén",
      "Entrada a las termas",
    ],
    price: 70000,
    reservation: 15000,
    currency: "CLP",
    image: "/images/huilohuilo.jpg",
  },
  // Nuevo tour 3: Tour Saltos del Petrohué y Puerto Varas + Navegación
  {
    title: "Tour Saltos del Petrohué y Puerto Varas + Navegación",
    itinerary: [
      "Sendero Laguna Verde y mirador Lago Llanquihue",
      "Saltos del Petrohué",
      "Compra artesanías",
      "Puerto de Petrohué",
      "Navegación lago Todos los Santos",
      "Ensenada y Almuerzo",
      "Puerto Varas",
      "Regreso a Valdivia",
    ],
    includes: [
      "Almuerzo a elección",
      "Ingreso sendero Laguna Verde",
      "Ingreso Saltos del Petrohué",
      "Ticket de navegación lago Todos los Santos",
      "Guía turístico",
      "Traslados durante todo el día",
      "Todas las visitas programadas",
    ],
    price: 68000,
    reservation: 15000,
    currency: "CLP",
    image: "/images/valdivia.jpg",
  },
  // Nuevo tour 4: Tour Pucón, Villarrica y Ojos del Caburgua
  {
    title: "Tour Pucón, Villarrica y Ojos del Caburgua",
    itinerary: [
      "Visita 'Casa del Queso' y Cervecería Bundor",
      "Visita Villarrica y Costanera",
      "'Ruca Newen' Mapuche",
      "Recorrido panorámico Lago Villarrica",
      "Visita Pucón y Costanera",
      "Almuerzo en Pucón",
      "Playa de Caburgua",
      "Mirador de Peces",
      "Parque Ojos del Caburgua",
      "Regreso a Valdivia",
    ],
    includes: [
      "Almuerzo a elección",
      "Guiado Turístico",
      "Ticket ingreso Parque Ojos del Caburgua",
      "Entrada a Mirador de Peces",
      "Café de cortesía en Ruka Newen",
      "Traslados durante todo el día",
    ],
    price: 65000,
    reservation: 15000,
    currency: "CLP",
    image: "/images/tourpucon.jpg",
  },
  // Nuevo tour 5: Tour Lago Rupanco y Salto el Calzoncillo
  {
    title: "Tour Lago Rupanco y Salto el Calzoncillo",
    itinerary: [
      "Recogida desde lugar de hospedaje en Valdivia",
      "Navegación hacia el 'Salto el Calzoncillo' (90 minutos de duración, ida y retorno)",
      "Visita a Puerto Octay",
      "Visita a Frutillar",
      "Tarde libre a disposición en Frutillar",
      "Retorno a Valdivia",
    ],
    includes: [
      "Alojamiento en Hostería en Lago Rupanco",
      "1 desayuno",
      "2 almuerzos",
      "1 cena",
      "Ticket de navegación por Lago Rupanco",
      "Guía de turismo",
      "Todos los traslados",
    ],
    price: 185000,
    reservation: 20000,
    currency: "CLP",
    image: "/images/rupanco.jpeg",
  },
];

 
  
  const TourCard = ({
    title,
    itinerary,
    includes,
    price,
    reservation,
    currency,
    image,
  }: any) => (
    <div className="tour-card">
      <h2>{title}</h2>
      {image && <img src={image} alt={title} />}
      <h3>Itinerario:</h3>
      <ul>
        {itinerary.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Incluye:</h3>
      <ul>
        {includes.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>
        <strong>Precio:</strong>{" "}
        <span className="price-highlight">
          {price} {currency}
        </span>
      </p>
      {reservation && (
        <p>
          <strong>Reserva:</strong> {reservation} {currency}
        </p>
      )}
    </div>
  );
  
  const TourValdivia = () => (
    <div className="tour-valdivia">
      <h1>Conoce Valdivia y Sus Alrededores</h1>
      <p>
        La Región de los Ríos, ubicada entre lagos y volcanes, se caracteriza por
        su gran atractivo turístico. ¡Descubre Valdivia con nosotros!
      </p>
      <div className="tours-container">
        {tours.map((tour, index) => (
          <TourCard key={index} {...tour} />
        ))}
      </div>
    </div>
  );
  
  export default TourValdivia;
  