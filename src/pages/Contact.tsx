import '../styles/Contact.css'

const Contact = () => (
  <div className="contact-container">
    <h2 className="contact-title">Contacto</h2>
    <p className="contact-description">
      Ponte en contacto con nosotros para más información.
    </p>
    <form className="contact-form">
      <input
        type="text"
        placeholder="Tu nombre"
        className="contact-input"
        required
      />
      <input
        type="email"
        placeholder="Tu correo electrónico"
        className="contact-input"
        required
      />
      <textarea
        placeholder="Tu mensaje"
        className="contact-textarea"
        rows={5}
        required
      ></textarea>
      <button type="submit" className="contact-button">
        Enviar
      </button>
    </form>
  </div>
);

export default Contact;
