import '../styles/Knowme.css';

const Knowme = () => (
  <div className="knowme-container">
    <h2 className="knowme-title">Conócenos</h2>
    <div className="knowme-content">
      <div className="knowme-description">
        <p>
          Somos una agencia de turismo dedicada a brindarte experiencias inolvidables. 
          Nuestro compromiso es ofrecer un servicio personalizado, acercándote a los 
          destinos más bellos y únicos de nuestra región.
        </p>
        <p>
          Valoramos la conexión humana, la sostenibilidad y la pasión por descubrir 
          nuevos lugares. Queremos ser parte de tus mejores recuerdos y ayudarte a 
          explorar el mundo como nunca antes.
        </p>
      </div>
      <div className="knowme-map">
        {/* Google Maps Embed API */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.8638544279187!2d-73.25163158474498!3d-39.81749197943761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x962204c510dfd719%3A0x35f0eb29c8f1de59!2sValdivia%2C%20Regi%C3%B3n%20de%20Los%20R%C3%ADos!5e0!3m2!1ses-419!2scl!4v1698446443383!5m2!1ses-419!2scl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa Valdivia"
        ></iframe>
      </div>
    </div>
    <div className="knowme-contact">
      <h3>¿Quieres saber más de nosotros?</h3>
      <p>Ponte en contacto con nosotros o síguenos en nuestras redes sociales:</p>
      <div className="knowme-socials">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="knowme-social-link"
        >
          <i className="fab fa-facebook"></i> Facebook
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="knowme-social-link"
        >
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="knowme-social-link"
        >
          <i className="fab fa-twitter"></i> Twitter
        </a>
      </div>
    </div>
  </div>
);

export default Knowme;
