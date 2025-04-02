import React, { useContext } from "react";
import "../index.css";
import { LangContext } from "../App";

const Experiences = () => {
  const { translations } = useContext(LangContext);

  return (
    <section className="p-8">
      <h2 className="Experiences">{translations.my_experiences}</h2>
      <ul className="list-disc pl-5">
        
        {/* MEDIAWAN */}
        <b>
          <a href="https://rights.mediawan.com/" 
             className="text-blue-600 font-bold hover:underline" 
             target="_blank" 
             rel="noopener noreferrer">
            {translations.project_manager} - {translations.mediawan}
          </a>
        </b>
        <ul>
          <li>{translations.mediawan_desc1}</li>
          <li>{translations.mediawan_desc2}</li>
          <li>{translations.mediawan_desc3}</li>
        </ul>

        <br />

        {/* E2F TRANSLATIONS INC. */}
        <b>
          <a href="https://www.e2f.com/" 
             className="text-blue-600 font-bold hover:underline" 
             target="_blank" 
             rel="noopener noreferrer">
            {translations.quality_director} - {translations.e2f}
          </a>
        </b>
        <ul>
          <li>{translations.e2f_desc1}</li>
          <li>{translations.e2f_desc2}</li>
          <li>{translations.e2f_desc3}</li>
        </ul>

        <br />

        {/* APPLE INC. */}
        <b>
          <a href="https://www.apple.com/" 
             className="text-blue-600 font-bold hover:underline" 
             target="_blank" 
             rel="noopener noreferrer">
            {translations.qa_tester} - {translations.apple}
          </a>
        </b>
        <ul>
          <li>{translations.apple_desc1}</li>
          <li>{translations.apple_desc2}</li>
        </ul>

      </ul>
    </section>
  );
};

export default Experiences;