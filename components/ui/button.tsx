import { cn } from '@/lib/utils';
import React from 'react';

const buttonVariants = {
  default: '',
  blue: 'bg-blue-500 text-white',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: keyof typeof buttonVariants;
}

export const Button = ({
  children,
  className,
  variant = 'default',
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        'px-4 py-2 hover:opacity-60',
        buttonVariants[variant],
        className
      )}
    >
      {children}
    </button>
  );
};
