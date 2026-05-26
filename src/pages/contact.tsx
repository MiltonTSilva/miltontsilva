import linkedinIcon from "../assets/linkedin.png";

export function Contact() {
  return (
    <section className="section-contact" id="contact">
      <span className="section-title">Contatos</span>
      <div className="contact-info">
        <div className="contact-item">
          <span className="material-symbols-outlined">mail</span>
          <span>
            <a href="mailto:miltontsilva@gmail.com">miltontsilva@gmail.com</a>
          </span>
        </div>
        <div className="contact-item">
          <span className="material-symbols-outlined">mobile</span>
          <span>
            <a
              href="https://wa.me/5511967079318"
              target="_blank"
              rel="noopener noreferrer"
            >
              (11) 9.6707-9318
            </a>
          </span>
        </div>
        <div className="contact-item">
          <span>
            <img
              src={linkedinIcon}
              alt="LinkedIn Icon"
              className="contact-icon"
            />
          </span>
          <span>
            <a href="https://www.linkedin.com/in/miltontsilva/" target="_blank">
              Milton Tomé da Silva
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
