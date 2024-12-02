import '../styles/Contact.css';

const Contact = () => (
  <div className="contact-container">
    <h2 className="contact-title">Contacto</h2>
    <p className="contact-description">
      Ponte en contacto con nosotros para más información o consulta nuestras oficinas.
    </p>
    <div className="contact-content">
      {/* Información de contacto */}
      <div className="contact-info">
        <h3 className="contact-info-title">Oficinas</h3>
        <p><strong>Valdivia:</strong> Esmeralda 670, Oficina 9B</p>
        <p><strong>Santiago:</strong> General Ordóñez 155, Maipú</p>
        <p><strong>Teléfonos:</strong></p>
        <p>+569 6133 4989 - Valdivia</p>
        <p>+569 3429 1262 - Santiago</p>
        <p><strong>Correos:</strong></p>
        <p>santiago@caminoaventura.cl</p>
        <p>valdivia@caminoaventura.cl</p>
      </div>

      {/* Formulario de contacto */}
      <div className="contact-form-container">
        <h3 className="contact-form-title">Formulario de Contacto</h3>
        <form className="contact-form">
          <input
            type="text"
            placeholder="Nombre y Apellido"
            className="contact-input"
            required
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            className="contact-input"
            required
          />
          <textarea
            placeholder="Mensaje"
            className="contact-textarea"
            rows={5}
            required
          ></textarea>
          <button type="submit" className="contact-button">Enviar</button>
        </form>
      </div>
    </div>
  </div>
);

export default Contact;
