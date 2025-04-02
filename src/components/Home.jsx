import React, { useContext } from "react";
import "../index.css";
import { LangContext } from "../App";

function Home() {
  const { translations } = useContext(LangContext);

  return (
    <section className="bio">
      <h2 className="infos">{translations.about_me_title}</h2>
      <p className="text-gray-700">
        {translations.about_me_description.split(/(<[^>]*>)/).map((part, index) => (
          part.startsWith('<') ? (
            <React.Fragment key={index}>{part}</React.Fragment>
          ) : (
            <React.Fragment key={index}>
              {part.split('ADA Tech School').map((text, i) => (
                <React.Fragment key={i}>
                  {text}
                  {i < part.split('ADA Tech School').length - 1 && (
                    <a
                      href="https://adatechschool.fr/ecole/"
                      className="text-blue-600 font-bold hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ADA Tech School
                    </a>
                  )}
                </React.Fragment>
              ))}
            </React.Fragment>
          )
        ))}
      </p>
    </section>
  );
}

export default Home;
