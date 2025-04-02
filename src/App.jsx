import React, { useState, useEffect, createContext } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";
import Home from "./components/Home";
import CompetencesTechniques from "./components/CompetencesTechniques";
import CompetencesDouces from "./components/CompetencesDouces";
import Experiences from "./components/Experiences";
import Projets from "./components/Projets";
import Diplomes from "./components/Diplomes";
import ContactPage from "./components/ContactPage";
import locales from "./locales/locales.json";

// Création d'un contexte pour partager la langue avec tous les composants
export const LangContext = createContext();

function App() {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "fr");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, translations: locales[lang] }}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/competences-techniques" element={<CompetencesTechniques />} />
              <Route path="/competences-douces" element={<CompetencesDouces />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/projets" element={<Projets />} />
              <Route path="/diplomes" element={<Diplomes />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LangContext.Provider>
  );
}

export default App;
