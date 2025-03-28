import React from "react";
import "../index.css";

const Experiences = () => (
  <section className="p-8">
    <h2 className="Experiences">Mes expériences professionnelles</h2>
    <ul className="list-disc pl-5">
       <b><a href="https://rights.mediawan.com/" className="text-blue-600 font-bold hover:underline" target="_blank" rel="noopener noreferrer">Cheffe de projets - MEDIAWAN</a></b>
      <ul><li>Coordination des équipes techniques et marketing pour le développement du site B2B
      </li>
      <li>Déploiement de stratégies d'automatisation des processus</li>
      <li>Interface entre clients, équipes de production et direction pour garantir l’alignement des objectifs</li></ul>
    <br/>
    <b><a href="https://www.e2f.com/" className="text-blue-600 font-bold hover:underline" target="_blank" rel="noopener noreferrer">Directrice Qualité - E2F TRANSLATIONS INC.</a></b>
      <ul><li>Mise en place de processus qualité et amélioration des workflows</li>
      <li>Accompagnement des équipes dans l’adoption d’outils technologiques innovants</li>
      <li>Formation et encadrement des équipes sur des outils de traduction automatique</li>
      </ul><br/>
      <b><a href="https://www.apple.com/" className="text-blue-600 font-bold hover:underline" target="_blank" rel="noopener noreferrer">QA Tester - APPLE INC.</a></b>
      <ul><li>Tests linguistiques pour des produits Apple (notamment iCloud)</li>
      <li>Formation et gestion d’équipes internationales (35 personnes)
      </li></ul>
    </ul>
  </section>
);

export default Experiences;
