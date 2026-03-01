import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

const GlobeIcon = FaGlobe as any;

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pl' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors shadow-lg"
      title={i18n.language === 'en' ? 'Switch to Polish' : 'Przełącz na angielski'}
    >
      <GlobeIcon className="text-lg" />
      <span className="font-semibold uppercase">{i18n.language}</span>
    </button>
  );
};

export default LanguageSwitcher;

