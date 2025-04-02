import React, { useContext } from "react";
import "../index.css";
import { LangContext } from "../App";

const CompetencesTechniques = () => {
  const { translations } = useContext(LangContext);

  return (
    <section className="p-8 douce">
      <h2>{translations.my_technical_skills}</h2>

      {/* Développement */}
      <ul>
        <h3 className="text-2xl text-blue-600">{translations.development}</h3>
        <ul className="list-disc pl-5">
          <li><b>{translations.languages_stacks} :</b> {translations.languages_stacks_desc}</li>
          <li><b>{translations.frameworks} :</b> {translations.frameworks_desc}</li>
          <li><b>{translations.databases} :</b> {translations.databases_desc}</li>
        </ul>
      </ul>

      {/* Outils */}
      <ul>
        <h3 className="text-2xl text-blue-600">{translations.tools}</h3>
        <ul className="list-disc pl-5">
          <li><b>{translations.dev_collab} :</b> {translations.dev_collab_desc}</li>
          <li><b>{translations.design_prototyping} :</b> {translations.design_prototyping_desc}</li>
          <li><b>{translations.project_management} :</b> {translations.project_management_desc}</li>
          <li><b>{translations.dtp} :</b> {translations.dtp_desc}</li>
        </ul>
      </ul>
    </section>
  );
};

export default CompetencesTechniques;