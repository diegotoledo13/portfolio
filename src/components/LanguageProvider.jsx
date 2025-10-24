import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/translations.js";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    // Check for saved language preference or default to Spanish
    const savedLang = localStorage.getItem("language");
    const browserLang = navigator.language.startsWith("es");

    const initialLang = savedLang || (browserLang ? "es" : "en");
    setLanguage(initialLang);
    document.documentElement.lang = initialLang;
  }, []);

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
    document.documentElement.lang = newLang;
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
