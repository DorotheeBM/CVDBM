import React from "react";
import "../index.css";

const CompetencesTechniques = () => (
  <section className="p-8 tech">
    <h2 className="Tech">Mes compétences techniques</h2>
    <ul><h3 className="text-2xl text-blue-600">Développement</h3>
    <ul className="list-disc pl-5">
      <li><b>Langages et stacks :</b> Java, JavaScript, HTML, CSS, PHP, Wordpress</li>
      <li><b>Frameworks :</b> React, Tailwind CSS, Symfony</li>
      <li><b>Base de données :</b> MySQL</li>
    </ul></ul>
    <ul><h3 className="text-2xl text-blue-600">Outils</h3>
    <ul className="list-disc pl-5">
      <li><b>Développement et Collaboration :</b> Github, Codepen, VSCode</li>
      <li><b>Design et Prototypage :</b> Figma, Miro, Bruno</li>
      <li><b>Gestion de Projet :</b> Lotus Notes</li>
      <li><b>PAO (Publication Assistée par Ordinateur) :</b> InDesign, Photoshop, Canva</li>
    </ul></ul>
  </section>
);

export default CompetencesTechniques;
