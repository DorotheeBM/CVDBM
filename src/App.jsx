import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";
import Home from "./components/Home";
import CompetencesTechniques from "./components/CompetencesTechniques";
import CompetencesDouces from "./components/CompetencesDouces";
import Experiences from "./components/Experiences";
import Projets from "./components/Projets";
import Diplomes from "./components/Diplomes";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/competences-techniques"element={<CompetencesTechniques />} />
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
  );
}

export default App;
