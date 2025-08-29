import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = ({
    children,
    variant = 'primary',
    isLoading = false,
    className = '',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-dubai-gold text-dubai-dark hover:bg-opacity-90',
        secondary: 'bg-dubai-light text-luxury-white hover:bg-dubai-accent',
        outline: 'border-2 border-dubai-gold text-dubai-gold hover:bg-dubai-gold hover:text-dubai-dark',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            disabled={isLoading}
            {...props}
        >
            {isLoading ? (
                <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Loading...
                </>
            ) : children}
        </button>
    );
};

export default Button;
