import { useState } from "react"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Main from "./components/Main"
import Habilidades from "./components/Habilidades"
import Footer from "./components/Footer"
import { englishVersion } from "./data/englishVersion"
import { españolVersion } from "./data/españolVersion"


function App() {
  const [language, setLanguage] = useState('english')

  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'español' : 'english');
  }

  const text = language === 'english' ? englishVersion : españolVersion;

  return (
    <>
      <Header/>
      <Menu/>
      <button type="button" onClick={toggleLanguage}>Español</button>
      <Main text={text}/>      
      <Habilidades text={text}/>
      <Footer/>
    </>
  )
}

export default App
