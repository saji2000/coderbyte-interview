import { useState, useContext, createContext } from "react";

const languages = ["Javascript", "Python"];

const LanguageContext = createContext({
  languages,
  language: languages[0],
  setLanguage: () => {},
});

const MainSection = () => {
  const { languages, language, setLanguage } = useContext(LanguageContext);
  const currentIndex = languages.indexOf(language);
  const toggleLanguage = () => {
    return currentIndex === languages.length - 1
      ? setLanguage(languages[0])
      : setLanguage(languages[currentIndex + 1]);
  };

  return (
    <div>
      <h3>Context API</h3>
      <p>My favorite language is {language}</p>
      <button onClick={toggleLanguage}>Change language</button>
    </div>
  );
};

const ContextApi = () => {
  const [language, setLanguage] = useState(languages[0]);

  return (
    <LanguageContext.Provider value={{ languages, language, setLanguage }}>
      <MainSection />
    </LanguageContext.Provider>
  );
};

export default ContextApi;
