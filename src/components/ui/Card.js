import React from 'react';

const Card = ({
    children,
    variant = 'default',
    className = '',
    ...props
}) => {
    const baseStyles = 'rounded-lg overflow-hidden transition-all duration-300';

    const variants = {
        default: 'bg-white shadow-md hover:shadow-lg',
        hover: 'bg-white shadow-md hover:shadow-xl hover:-translate-y-1',
        featured: 'bg-dubai-light text-luxury-white shadow-xl hover:shadow-2xl hover:-translate-y-2',
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
