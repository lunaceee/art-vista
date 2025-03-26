import React from 'react';
import Link from 'next/link';

console.log('Button component loaded');

export type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'link';
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    className?: string;
    href?: string;
};

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = 'button',
    variant = 'primary',
    disabled = false,
    size = 'md',
    href,
}) => {
    const baseStyles =
        'rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all cursor-pointer';
    const variants = {
        primary: 'bg-violet-600 text-white hover:bg-violet-500 focus:ring-violet-600',
        secondary: 'text-violet-600 border-2 border-violet-600 hover:bg-zinc-100 focus:ring-amber-400',
    };

    const sizes = {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    const disabledStyles = 'opacity-50 cursor-not-allowed';

    const computedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]}
         ${disabled ? disabledStyles : ''} `;

    return type === 'link' ? (
        <Link
            href={href || "#"}
            className={`${baseStyles}  text-violet-600 hover:underline underline-offset-4 ease-in-out ${sizes[size]} `}
            role="button"
        >
            {children}
        </Link>
    ) : (
        <button
            onClick={onClick}
            disabled={disabled}
            className={computedClassName}
        >
            {children}
        </button>
    );
};

export default Button;