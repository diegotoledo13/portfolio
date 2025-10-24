import { useState, useEffect } from "react";

export default function LanguageToggle() {
  const [isSpanish, setIsSpanish] = useState(true);

  useEffect(() => {
    // Check for saved language preference or default to Spanish
    const savedLang = localStorage.getItem("language");
    const browserLang = navigator.language.startsWith("es");

    if (savedLang === "en" || (!savedLang && !browserLang)) {
      setIsSpanish(false);
      document.documentElement.lang = "en";
    } else {
      setIsSpanish(true);
      document.documentElement.lang = "es";
    }
  }, []);

  const toggleLanguage = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const newLang = !isSpanish;
    setIsSpanish(newLang);

    const langCode = newLang ? "es" : "en";
    document.documentElement.lang = langCode;
    localStorage.setItem("language", langCode);

    // Dispatch custom event for language change
    window.dispatchEvent(
      new CustomEvent("languageChange", { detail: langCode })
    );
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
      aria-label="Toggle language"
    >
      <span className="text-gray-700 dark:text-gray-300">
        {isSpanish ? "ES" : "EN"}
      </span>
      <div
        className={`w-8 h-4 rounded-full transition-colors duration-300 ${
          isSpanish ? "bg-blue-500" : "bg-green-500"
        }`}
      >
        <div
          className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isSpanish ? "translate-x-0.5" : "translate-x-4"
          }`}
        ></div>
      </div>
    </button>
  );
}
