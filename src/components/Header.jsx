import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Photo from "./assets/photodetouree.png";
import FR from "./assets/FR.png";
import USA from "./assets/USA.png";
import "../index.css";
import { LangContext } from "../App";

function Header() {
  const { lang, setLang, translations } = useContext(LangContext);

  return (
    <header className="header-container">
      {/* Partie gauche : Photo et nom */}
      <div className="header-left">
        <img src={Photo} alt="Dorothée Braud-Meignant" className="header-photo" />
        <h1 className="header-name">{translations.header_name}</h1>
      </div>
  
      {/* Partie centrale : navigation */}
      <div className="header-center">
        <nav className="nav-links">
          <Link to="/" className="nav-link">{translations.home}</Link>
          <Link to="/experiences" className="nav-link">{translations.experience}</Link>
          <Link to="/projets" className="nav-link">{translations.projects}</Link>
          <Link to="/competences-techniques" className="nav-link">{translations.technical_skills}</Link>
          <Link to="/competences-douces" className="nav-link">{translations.soft_skills}</Link>
          <Link to="/diplomes" className="nav-link">{translations.diplomas}</Link>
        </nav>
      </div>
  
      {/* Partie droite : Drapeaux */}
      <div className="language-buttons">
        <button
          onClick={() => setLang("fr")}
          className={`px-2 ${lang === "fr" ? "font-bold" : ""}`}
          title={translations.french_title}
        >
          <img src={FR} alt={translations.french_alt} className="flag-icon" />
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-2 ${lang === "en" ? "font-bold" : ""}`}
          title={translations.english_title}
        >
          <img src={USA} alt={translations.english_alt} className="flag-icon" />
        </button>
      </div>
    </header>
  );
}  

export default Header;
