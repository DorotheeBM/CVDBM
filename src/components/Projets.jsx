import React, { useContext } from "react";
import "../index.css";
import { LangContext } from "../App";

const Projets = () => {
  const { translations } = useContext(LangContext);

  return (
    <section className="p-8">
      <div>
      <h2 className="Projets">{translations.my_projects}</h2>
      <ul className="list-disc pl-5 space-y-4">

        {/* Quiz Nourriture Française */}
        <a href="https://github.com/adatechschool/projet-collectif-nantes-quizz-det-team.git"
           target="_blank" rel="noopener noreferrer"
           className="text-blue-600 hover:underline">
          {translations.quiz_project}
        </a>
        <p><b>{translations.quiz_objective}</b></p>
        <ul>
          <li>{translations.quiz_desc1}</li>
          <li>{translations.quiz_desc2}</li>
          <li>{translations.quiz_desc3}</li>
          <li>{translations.quiz_desc4}</li>
        </ul>

        <br/>

        {/* DAF - Intégration API FBI et dataviz */}
        <a href="https://github.com/adatechschool/projet-collectif-nantes-dataviz-daf.git"
           target="_blank" rel="noopener noreferrer"
           className="text-blue-600 hover:underline">
          {translations.daf_project}
        </a>
        <p><b>{translations.daf_objective}</b></p>
        <ul>
          <li>{translations.daf_desc1}</li>
          <li>{translations.daf_desc2}</li>
          <li>{translations.daf_desc3}</li>
        </ul>

        <br/>

        {/* Extension Chrome - Amélioration accessibilité */}
        <a href="https://github.com/DorotheeBM/projet-collectif-nantes-extension-navigateur-dgct.git"
           target="_blank" rel="noopener noreferrer"
           className="text-blue-600 hover:underline">
          {translations.extension_project}
        </a>
        <p><b>{translations.extension_objective}</b></p>
        <ul>
          <li>{translations.extension_desc1}</li>
          <li>{translations.extension_desc2}</li>
          <li>{translations.extension_desc3}</li>
        </ul>
        </ul>
        </div>

     <div>
      {/* Section "Dans le futur" */}
      <h2 className="Projets">{translations.future_projects}</h2>
      <ul className="list-disc pl-5 space-y-4">
        <a href="https://www.linkedin.com/posts/dorothee-braud_application-kidycom-aide-%C3%A0-la-communication-activity-7296190119621844992-Ix5e?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAORgWEBCnSSB1S7nxZblUE-URgDOseFTzE"
           target="_blank" rel="noopener noreferrer"
           className="text-blue-600 hover:underline">
          {translations.kidycom_project}
        </a>
        <p><b>{translations.kidycom_objective}</b></p>
        <ul>
          <li>{translations.kidycom_desc1}</li>
          <li>{translations.kidycom_desc2}</li>
          <li>{translations.kidycom_desc3}</li>
        </ul>
       </ul> 
    </div>
    </section>
  );
};

export default Projets;
