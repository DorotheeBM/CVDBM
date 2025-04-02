import React, { useContext } from "react";
import "../index.css";
import { LangContext } from "../App";

const CompetencesDouces = () => {
  const { translations } = useContext(LangContext);

  return (
    <section className="p-8 douce">
      <h2>{translations.soft_skills}</h2>
      <ul>
        <h3 className="text-2xl text-blue-600">{translations.agility_skills_title}</h3>
        <ul className="list-disc pl-5">
          <li><b>{translations.backlog_management} :</b> {translations.backlog_management_desc}</li>
          <li><b>{translations.business_needs} :</b> {translations.business_needs_desc}</li>
          <li><b>{translations.agile_rituals} :</b> {translations.agile_rituals_desc}</li>
          <li><b>{translations.problem_solving} :</b> {translations.problem_solving_desc}</li>
          <li><b>{translations.communication} :</b> {translations.communication_desc}</li>
        </ul>
      </ul>
      <ul>
        <h3 className="text-2xl text-blue-600">{translations.soft_skills_title}</h3>
        <ul className="list-disc pl-5">
          <li><b>{translations.autonomy} :</b> {translations.autonomy_desc}</li>
          <li><b>{translations.rigor} :</b> {translations.rigor_desc}</li>
          <li><b>{translations.team_spirit} :</b> {translations.team_spirit_desc}</li>
        </ul>
      </ul>
    </section>
  );
};

export default CompetencesDouces;
