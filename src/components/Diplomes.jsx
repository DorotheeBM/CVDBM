import React, { useContext } from "react";
import { LangContext } from "../App";

const Diplomes = () => {
  const { translations } = useContext(LangContext);

  return (
    <section className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
        {translations.my_degrees}
      </h2>
      <ul className="space-y-6">
        {/* ADA Tech School */}
        <a
          href="https://adatechschool.fr/ecole/"
          className="text-blue-600 font-bold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {translations.ada_degree}
        </a>
        <ul className="list-disc list-inside text-gray-700 pl-6">
          <li><b>{translations.project_learning}</b> {translations.project_learning_desc}</li>
          <li><b>{translations.agile_methods}</b> {translations.agile_methods_desc}</li>
          <li><b>{translations.eco_design}</b> {translations.eco_design_desc}</li>
          <li><b>{translations.tech_stack}</b> {translations.tech_stack_desc}</li>
        </ul>
        
        <br/>

        {/* Sorbonne */}
        <a
          href="https://formations.pantheonsorbonne.fr/fr/catalogue-des-formations/master-M/master-droit-de-la-propriete-intellectuelle-KBUM5XGD/master-parcours-droit-economie-et-gestion-de-l-audiovisuel-fi-KBUM6H0H.html"
          className="text-blue-600 font-bold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {translations.sorbonne_degree}
        </a>
        <ul className="list-disc list-inside text-gray-700 pl-6">
          <li><b>{translations.marketing_strategy}</b> {translations.marketing_strategy_desc}</li>
          <li><b>{translations.transmedia_vod}</b> {translations.transmedia_vod_desc}</li>
          <li><b>{translations.copyright_law}</b> {translations.copyright_law_desc}</li>
          <li><b>{translations.content_negotiation}</b> {translations.content_negotiation_desc}</li>
        </ul>

        <br/>

        {/* UCO Angers */}
        <a
          href="https://www.uco.fr/fr/formations/humanites/master-traduction-et-interpretation"
          className="text-blue-600 font-bold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {translations.uco_degree}
        </a>
        <ul className="list-disc list-inside text-gray-700 pl-6">
          <li><b>{translations.multilingual_project}</b> {translations.multilingual_project_desc}</li>
          <li><b>{translations.cat_tools}</b> {translations.cat_tools_desc}</li>
          <li><b>{translations.dtp_skills}</b> {translations.dtp_skills_desc}</li>
          <li><b>{translations.international_experience}</b> {translations.international_experience_desc}</li>
        </ul>
      </ul>
    </section>
  );
};

export default Diplomes;
