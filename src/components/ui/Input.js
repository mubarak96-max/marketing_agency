import React from 'react';

const Input = ({
    label,
    error,
    type = 'text',
    className = '',
    ...props
}) => {
    const baseStyles = 'w-full px-4 py-2 rounded-md border transition-colors duration-200 focus:outline-none focus:ring-2';
    const inputStyles = error
        ? 'border-red-500 focus:ring-red-200'
        : 'border-gray-300 focus:ring-dubai-gold/20 focus:border-dubai-gold';

    const renderInput = () => {
        switch (type) {
            case 'textarea':
                return (
                    <textarea
                        className={`${baseStyles} ${inputStyles} ${className}`}
                        rows={4}
                        {...props}
                    />
                );
            case 'select':
                return (
                    <select
                        className={`${baseStyles} ${inputStyles} ${className}`}
                        {...props}
                    />
                );
            default:
                return (
                    <input
                        type={type}
                        className={`${baseStyles} ${inputStyles} ${className}`}
                        {...props}
                    />
                );
        }
    };

    return (
        <div className="space-y-1">
            {label && (
                <label className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            {renderInput()}
            {error && (
                <p className="text-sm text-red-500">{error}</p>
            )}
        </div>
    );
};

export default Input;
