import React from 'react';
import { motion } from 'framer-motion';
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
export function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = ''
}: ButtonProps) {
  const baseStyles = 'relative flex items-center justify-center rounded-full font-medium tracking-wide transition-all duration-300 overflow-hidden';
  const sizeStyles = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg'
  };
  const variantStyles = {
    primary: 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg hover:shadow-pink-500/25 hover:from-pink-600 hover:to-purple-700',
    secondary: 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/15 hover:shadow-lg hover:shadow-white/10',
    outline: 'bg-transparent border border-white/30 text-white hover:border-white/70 hover:bg-white/5'
  };
  return <motion.button className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`} onClick={onClick} whileHover={{
    scale: 1.03
  }} whileTap={{
    scale: 0.98
  }}>
      {variant === 'primary' && <span className="absolute inset-0 bg-gradient-to-r from-pink-300/20 to-purple-400/20 blur-xl animate-pulse"></span>}
      <span className="relative z-10">{children}</span>
    </motion.button>;
}