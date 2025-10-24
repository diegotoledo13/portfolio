import { useState, useEffect } from "react";
import { translations } from "../data/translations.js";

export default function PortfolioContent() {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "es";
    setLang(savedLang);

    const handleLanguageChange = (e) => {
      setLang(e.detail);
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () =>
      window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  const t = translations[lang];

  return (
    <>
      {/* About Section */}
      <section className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl sm:text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-3 border-primary-400 uppercase tracking-wide">
          {t.aboutTitle}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify text-sm sm:text-base">
          {t.about}
        </p>
      </section>

      {/* Experience Section */}
      <section className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl sm:text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-3 border-primary-400 uppercase tracking-wide">
          {t.experienceTitle}
        </h3>
        <div className="space-y-4 sm:space-y-6">
          {t.experience.map((exp, idx) => (
            <div key={idx}>
              <div className="mb-3 sm:mb-4">
                <h4 className="text-lg sm:text-xl font-semibold text-primary-700 dark:text-primary-300 mb-1">
                  {exp.title}
                </h4>
                <div className="text-gray-600 dark:text-gray-400 font-medium mb-1">
                  {exp.company}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500 italic">
                  {exp.period}
                </div>
              </div>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 ml-4 sm:ml-6 text-sm sm:text-base">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl sm:text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-3 border-primary-400 uppercase tracking-wide">
          {t.skillsTitle}
        </h3>
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-primary-700 dark:text-primary-300 mb-3 sm:mb-4">
              {t.skillsCategories.frontend}
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {t.skills.frontend.map((skill, i) => (
                <span
                  key={i}
                  className="bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-primary-200 dark:border-primary-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold text-primary-700 dark:text-primary-300 mb-3 sm:mb-4">
              {t.skillsCategories.cms}
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {t.skills.cms.map((skill, i) => (
                <span
                  key={i}
                  className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-green-200 dark:border-green-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold text-primary-700 dark:text-primary-300 mb-3 sm:mb-4">
              {t.skillsCategories.tools}
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {t.skills.tools.map((skill, i) => (
                <span
                  key={i}
                  className="bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-purple-200 dark:border-purple-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold text-primary-700 dark:text-primary-300 mb-3 sm:mb-4">
              {t.skillsCategories.other}
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {t.skills.other.map((skill, i) => (
                <span
                  key={i}
                  className="bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-orange-200 dark:border-orange-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
