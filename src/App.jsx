import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Habilidades from "./components/Habilidades";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import { englishVersion } from "./data/englishVersion";
import { españolVersion } from "./data/españolVersion";
import { contactEn } from "./data/contactEn";
import { contactEs } from "./data/contactEs";
import Contact from "./components/Contact";

const languageVersions = {
  english: {
    main: englishVersion,
    contact: contactEn,
  },
  español: {
    main: españolVersion,
    contact: contactEs,
  },
};

function App() {
  const [language, setLanguage] = useState("english");
  const text = languageVersions[language].main;
  const contactText = languageVersions[language].contact;

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/contact" element={<Contact text={contactText} />} />
        <Route
          path="/habilidades"
          element={<Habilidades text={text} language={language} />}
        />
        <Route
          path="/main"
          element={<Main text={text} language={language} />}
        />
        <Route path="/portfolio" element={<Portfolio language={language} />} />
        <Route path="/" element={<Main text={text} />} />
      </Routes>
      <Footer setLanguage={setLanguage} language={language} />
    </Router>
  );
}

export default App;
