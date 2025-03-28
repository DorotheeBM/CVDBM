import React from "react";

const Projets = () => (
  <section className="p-8">
    <h2 className="Projets">Mes projets</h2>
    <ul className="list-disc pl-5 space-y-4">
  
        <a href="https://github.com/adatechschool/projet-collectif-nantes-quizz-det-team.git" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          Quiz Nourriture Française
        </a>
        <p><b>Objectif :</b> Concevoir et développer un quiz interactif sur la gastronomie française, permettant aux utilisateurs de tester leurs connaissances tout en découvrant des anecdotes culinaires.</p>
            <ul><li><b>Développement fullstack :</b> Implémentation du quiz avec JavaScript.</li>
            <li><b>Gestion de backlog et méthodologie agile :</b> Organisation des tâches.</li>
            <li><b>Écriture des questions et illustrations :</b> Conception des contenus et intégration d’éléments visuels pour améliorer l’expérience utilisateur.</li>
            <li><b>Traduction du quiz :</b> Adaptation des questions en anglais pour une accessibilité internationale.</li></ul>
            <br/>
        <a href="https://github.com/adatechschool/projet-collectif-nantes-dataviz-daf.git" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          DAF - Intégration API FBI et dataviz
        </a>
        <p><b>Objectif :</b> Exploiter les données ouvertes du FBI pour créer un tableau de bord interactif visualisant les tendances criminelles aux États-Unis.</p>
        <ul><li><b>Intégration d’API REST :</b> Connexion à l’API du FBI pour récupérer, traiter et afficher des données dynamiques.</li> 
            <li><b>Prototypage et conception UX :</b> Création d’un design épuré et intuitif pour faciliter la navigation.</li>
            <li><b>Méthodologie agile :</b> Découpage du projet en tâches, itérations et amélioration continue via des sprints courts.</li></ul>
            <br/>
     
        <a href="https://github.com/DorotheeBM/projet-collectif-nantes-extension-navigateur-dgct.git" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          Extension Chrome - Amélioration accessibilité
        </a>
        <p><b>Objectif :</b> Développer une extension de navigateur pour améliorer l’accessibilité web, en facilitant la lecture et la navigation pour les personnes ayant des déficiences visuelles ou cognitives.</p> 
        <ul><li><b>Développement d’une extension Chrome :</b> Utilisation de JavaScript, HTML, CSS et Manifest v3 pour la création d’une extension fonctionnelle.</li>
            <li><b>Amélioration de la lisibilité :</b> Implémentation de fonctionnalités permettant de modifier la typographie, la couleur et le contraste des sites web.</li>
            <li><b>Ajout d’un narratif vocal :</b> Intégration d’une synthèse vocale pour lire le contenu des pages web à haute voix.</li></ul>
        </ul>
  </section>
);

export default Projets;
