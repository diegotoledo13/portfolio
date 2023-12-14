import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Habilidades from "./components/Habilidades";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import { englishVersion } from "./data/englishVersion";
import { españolVersion } from "./data/españolVersion";
import Contact from "./components/Contact";

function App() {
  const [language, setLanguage] = useState("english");
  const text = language === "english" ? englishVersion : españolVersion;

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/habilidades" element={<Habilidades text={text} />} />
        <Route path="/main" element={<Main text={text} />} />
        <Route path="/portfolio" element={<Portfolio language={language} />} />
        <Route path="/" element={<Main text={text} />} />
      </Routes>
      <Footer setLanguage={setLanguage} language={language} />
    </Router>
  );
}

export default App;
