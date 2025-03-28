import React from "react";
import { Link } from "react-router-dom";
import Photo from "./assets/photodetouree.png"; // Assurez-vous que le chemin est correct
import "../index.css"; // Assurez-vous que le fichier CSS est correctement importé

const Header = () => (
  <header className="header">
    <div className="header-container">
      <img src={Photo} alt="Dorothée Braud-Meignant" className="header-photo" />
      <h1 className="header-name">Dorothée Braud-Meignant</h1>
    </div>
    <nav className="nav-links">
      <Link to="/" className="nav-link">Infos</Link>
      <Link to="/experiences" className="nav-link">Expériences</Link>
      <Link to="/projets" className="nav-link">Projets</Link>
      <Link to="/competences-techniques" className="nav-link">Compétences techniques</Link>
      <Link to="/competences-douces" className="nav-link">Compétences douces</Link>
      <Link to="/diplomes" className="nav-link">Diplomes</Link>
    </nav>
  </header>
);

export default Header;