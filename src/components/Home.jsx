import React from "react";
import "../index.css";

const Home = () => (
  <section className="bio">
     <h2 className="infos">Quelques informations me concernant</h2>
      <p className="text-gray-700">
        Je suis en formation à <a href="https://adatechschool.fr/ecole/" className="text-blue-600 font-bold hover:underline" target="_blank" rel="noopener noreferrer">
        ADA Tech School </a> à Nantes depuis septembre 2024, afin de me perfectionner dans la gestion de projets agiles et de développer mes compétences techniques en informatique.
        <br></br>
        J’ai <b>plus de 15 ans d’expérience internationale</b> en gestion de projet, management, coordination et suis spécialisée dans les nouvelles technologies, la traduction  et l’audiovisuel. 
        Je pense qu’on guide mieux une équipe quand on maîtrise les mêmes connaissances techniques.
      C’est pourquoi j’ai commencé cette formation de développeuse chez ADA, pour perfectionner mes connaissances de développement afin de pouvoir prétendre dans un futur proche à des postes de PM ou PO dans la tech.
        </p>
  </section>
);

export default Home;