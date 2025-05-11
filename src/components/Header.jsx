import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Photo from "./assets/photodetouree.png";
import FR from "./assets/FR.png";
import USA from "./assets/USA.png";
import { LangContext } from "../App";
import "../index.css";

function Header() {
  const { lang, setLang, translations } = useContext(LangContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-container">
      <div className="header-top">
        <div className="header-left">
          <img src={Photo} alt="Dorothée Braud-Meignant" className="header-photo" />
          <h1 className="header-name">Dorothée Braud-Meignant</h1>
        </div>

        {/* Bouton hamburger */}
        <button className="burger" onClick={toggleMenu}>
          ☰
        </button>

        {/* Drapeaux */}
        <div className="language-buttons">
          <button onClick={() => setLang("fr")} title={translations.french_title}>
            <img src={FR} alt={translations.french_alt} className="flag-icon" />
          </button>
          <button onClick={() => setLang("en")} title={translations.english_title}>
            <img src={USA} alt={translations.english_alt} className="flag-icon" />
          </button>
        </div>
      </div>

      {/* Navigation principale */}
      <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>{translations.home}</Link>
        <Link to="/experiences" className="nav-link" onClick={() => setMenuOpen(false)}>{translations.experience}</Link>
        <Link to="/projets" className="nav-link" onClick={() => setMenuOpen(false)}>{translations.projects}</Link>
        <Link to="/competences-techniques" className="nav-link" onClick={() => setMenuOpen(false)}>{translations.technical_skills}</Link>
        <Link to="/competences-douces" className="nav-link" onClick={() => setMenuOpen(false)}>{translations.soft_skills}</Link>
        <Link to="/diplomes" className="nav-link" onClick={() => setMenuOpen(false)}>{translations.diplomas}</Link>
      </nav>
    </header>
  );
}

export default Header;