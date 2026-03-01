import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ title, subtitle, children }) => {
  const { t } = useTranslation();

  return (
    <div className="lg:fixed lg:w-2/5 h-screen p-8 lg:p-12 lg:pl-[10%] flex flex-col justify-between min-w-[300px] max-w-[800px] border-r border-gray-800">
      <div>
        <Link to="/" className="block mb-8 hover:opacity-80 transition-opacity">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">{title}</h1>
          {subtitle && (
            <p className="text-gray-400 text-sm lg:text-base">{subtitle}</p>
          )}
        </Link>
        {children}
      </div>
      <div className="text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} {t('common.copyright')}</p>
        <p className="mt-2">{t('common.studentNotes')}</p>
      </div>
    </div>
  );
};

export default Sidebar;

