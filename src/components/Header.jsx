import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Photo from "./assets/photodetouree.png"; // Assurez-vous que le chemin est correct
import FR from "./assets/FR.png";
import USA from "./assets/USA.png";
import "../index.css"; // Assurez-vous que le fichier CSS est correctement importé
import { LangContext } from "../App";

function Header() {
  const { lang, setLang, translations } = useContext(LangContext);

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <nav className="flex items-center space-x-4">
        <div className="header-container">
          <img src={Photo} alt="Dorothée Braud-Meignant" className="header-photo" />
          <h1 className="header-name">{translations.header_name}</h1>
          <div className="language-buttons">
          <button onClick={() => setLang("fr")} className={`px-2 ${lang === "fr" ? "font-bold" : ""}`}>
              <img src={FR} alt="Français" className="flag-icon" />
            </button>
            <button onClick={() => setLang("en")} className={`px-2 ${lang === "en" ? "font-bold" : ""}`}>
              <img src={USA} alt="English" className="flag-icon" />
            </button>
            </div>
          </div>
        <ul className="nav-links">
          <Link to="/" className="nav-link">{translations.home}</Link>
          <Link to="/experiences" className="nav-link">{translations.experience}</Link>
          <Link to="/projets" className="nav-link">{translations.projects}</Link>
          <Link to="/competences-techniques" className="nav-link">{translations.technical_skills}</Link>
          <Link to="/competences-douces" className="nav-link">{translations.soft_skills}</Link>
          <Link to="/diplomes" className="nav-link">{translations.diplomas}</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
