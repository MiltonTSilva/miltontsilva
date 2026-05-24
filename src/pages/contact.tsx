import linkedinIcon from "../assets/linkedin.png";
import { Home } from "./home";

export function Contact() {
  return (
    <Home>
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
              <a href="tel:+5511967099318">(11) 9.6707-9318</a>
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
              <a
                href="https://www.linkedin.com/in/miltontsilva/"
                target="_blank"
              >
                Milton Tomé da Silva
              </a>
            </span>
          </div>
        </div>
      </section>
    </Home>
  );
}
