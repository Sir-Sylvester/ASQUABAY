import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 text-center';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white focus:ring-primary-500 shadow-glow hover:shadow-glow-lg',
    secondary: 'bg-gradient-to-r from-secondary-600 to-secondary-500 hover:from-secondary-700 hover:to-secondary-600 text-white focus:ring-secondary-500 shadow-glow hover:shadow-glow-lg',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white dark:border-white dark:text-white dark:hover:bg-primary-600 dark:hover:text-white focus:ring-primary-500 hover:shadow-glow',
    ghost: 'text-neutral-700 hover:bg-neutral-100 dark:text-primary-500 dark:hover:bg-neutral-800 focus:ring-neutral-500',
  };

  const sizeClasses = {
    sm: 'px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm',
    md: 'px-4 py-2.5 sm:px-6 sm:py-3 text-sm',
    lg: 'px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base',
  };

  const iconSize = {
    sm: 'h-3 w-3 sm:h-4 sm:w-4',
    md: 'h-4 w-4 sm:h-5 sm:w-5',
    lg: 'h-4 w-4 sm:h-5 sm:w-5',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className={`${iconSize[size]} ${children ? 'mr-1.5 sm:mr-2' : ''}`} />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className={`${iconSize[size]} ${children ? 'ml-1.5 sm:ml-2' : ''}`} />
      )}
    </button>
  );
};

export default Button;