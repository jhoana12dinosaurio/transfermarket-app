import React from 'react';

const LoadingSpinner = ({ message = "Cargando..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200"></div>
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-transfermarket-green border-t-transparent absolute top-0 left-0"></div>
      </div>
      <p className="mt-4 text-gray-600 text-lg font-medium">{message}</p>
      <div className="mt-2 flex space-x-1">
        <div className="w-2 h-2 bg-transfermarket-green rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-transfermarket-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-transfermarket-orange rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;