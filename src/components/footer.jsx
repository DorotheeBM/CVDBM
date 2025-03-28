import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-blue-600 text-white p-4 text-center mt-auto">
    <div className="icon-container">
      <Link to="/contact" className="contact-link" title="Contactez-moi par email">
        <img src="/assets/enveloppe2.png" alt="Mailto" className="footer-icon" />
      </Link>
      <a href="https://github.com/DorotheeBM" target="_blank" rel="noopener noreferrer" title="Visitez mon GitHub">
        <img src="/assets/github-icon-2.svg" alt="Github" className="footer-icon" />
      </a>
      <a href="https://www.linkedin.com/in/dorothee-braud/" target="_blank" rel="noopener noreferrer" title="Visitez mon LinkedIn">
        <img src="/assets/LogoLI1.png" alt="LinkedIn" className="footer-icon" />
      </a>
      <a href="./assets/DorotheeBraudMeignant_CV_DevFullStack.pdf" download="CV_Dorothée_Braud-Meignant.pdf" title="Téléchargez mon CV">
        <img src="/assets/CV1.png" alt="CV" className="footer-icon" />
      </a>
    </div>
  </footer>
);

export default Footer;
