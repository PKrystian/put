import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  description?: string;
  link: string;
  badge?: string;
  icon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, link, badge, icon }) => {
  return (
    <Link
      to={link}
      className="block p-6 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 rounded-lg transition-all duration-200 group"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-3">
          {icon && <div className="text-2xl">{icon}</div>}
          <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
        </div>
        {badge && (
          <span className="px-3 py-1 text-xs font-medium bg-blue-900 text-blue-300 rounded-full">
            {badge}
          </span>
        )}
      </div>
      {description && (
        <p className="text-gray-400 text-sm mt-2">{description}</p>
      )}
    </Link>
  );
};

export default Card;

