import React from 'react';

const Card = ({
    children,
    variant = 'default',
    className = '',
    ...props
}) => {
    const baseStyles = 'rounded-lg overflow-hidden transition-all duration-300';

    const variants = {
        default: 'bg-card-light shadow-md hover:shadow-lg border border-border-light',
        hover: 'bg-card-light shadow-md hover:shadow-xl hover:-translate-y-1 border border-border-light',
        featured: 'bg-brand-primary text-white shadow-xl hover:shadow-2xl hover:-translate-y-2',
        dark: 'bg-card-dark shadow-md hover:shadow-lg border border-border-dark text-text-on-dark',
    };

    return (
        <div
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
