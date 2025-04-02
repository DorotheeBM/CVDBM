import React, { useContext } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { LangContext } from "../App";

const Footer = () => {
  const { translations } = useContext(LangContext);

  return (
    <footer className="bg-blue-600 text-white p-4 text-center mt-auto">
      <div className="icon-container">
        <Link to="/contact" className="contact-link" title={translations.contact_title}>
          <img src="/assets/enveloppe2.png" alt={translations.contact_alt} className="footer-icon" />
        </Link>
        <a href="https://github.com/DorotheeBM" target="_blank" rel="noopener noreferrer" title={translations.github_title}>
          <img src="/src/components/assets/LogoGH1.png" alt={translations.github_alt} className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/dorothee-braud/" target="_blank" rel="noopener noreferrer" title={translations.linkedin_title}>
          <img src="/assets/LogoLI1.png" alt={translations.linkedin_alt} className="footer-icon" />
        </a>
        <a href="./assets/DorotheeBraudMeignant_CV_DevFullStack.pdf" download="CV_Dorothée_Braud-Meignant.pdf" title={translations.cv_title}>
          <img src="/assets/CV1.png" alt={translations.cv_alt} className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
