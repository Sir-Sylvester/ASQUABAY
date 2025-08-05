import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  padding = 'md',
  style
}) => {
  const paddingClasses = {
    sm: 'p-4 sm:p-6',
    md: 'p-6 sm:p-8',
    lg: 'p-8 sm:p-10',
  };

  return (
    <div 
      className={`
        bg-white dark:bg-neutral-800 rounded-xl sm:rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50 
        ${hover ? 'hover:shadow-large hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300' : 'shadow-soft'}
        ${paddingClasses[padding]} ${className}
      `}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;