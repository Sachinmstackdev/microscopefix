import React from 'react';
import { Plus } from 'lucide-react';

const MapHeader = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex items-center px-4 py-3 bg-white border rounded-t-2xl">
        {/* Left side - Logo */}
        <div className="relative">
          <div className="w-6 h-6 bg-black transform rotate-45" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-400 rounded-full" />
        </div>
          
        {/* Centered Title and Subtitle */}
        <div className="flex-1 flex justify-center">
          <div className="flex flex-col items-center">
            <h1 className="font-medium text-gray-800">Directory Stack Market Map</h1>
            <span className="text-sm text-gray-500">
              Made with{' '}
              <a href="#" className="text-gray-700 hover:text-black underline">
                Macroscope.so
              </a>
            </span>
          </div>
        </div>

        {/* Right side - Suggest Button */}
        <button className="flex items-center space-x-1 px-4 py-1.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm">
          <Plus size={16} />
          <span>Suggest</span>
        </button>
      </div>
    </div>
  );
};

export default MapHeader;