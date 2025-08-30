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
        primary: 'bg-brand-primary text-white hover:bg-brand-accent hover:text-text-on-light shadow-lg hover:shadow-xl',
        secondary: 'bg-section-medium text-text-on-dark hover:bg-brand-accent hover:text-text-on-light',
        outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white',
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
