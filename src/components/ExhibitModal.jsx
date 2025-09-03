import React, { useEffect } from 'react';
import { X, Calendar, User } from 'lucide-react';

export default function ExhibitModal({ exhibits, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (exhibits) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [exhibits, onClose]);

  if (!exhibits) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal box */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto 
      transition-all duration-300 transform">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:bg-white
           dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
        >
          <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
        </button>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left: Image */}
          <div className="relative">
            <img
              src={exhibits.image}
              alt={exhibits.name}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          
          {/* Right: Details */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {exhibits.name}
            </h2>
            
            <div className="flex flex-wrap gap-4 mb-6">
              {/* Year */}
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Calendar className="h-5 w-5 mr-2" />
                <span className="font-medium">{exhibits.year}</span>
              </div>
              
              {/* Artist (only if present) */}
              {exhibits.artist && (
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <User className="h-5 w-5 mr-2" />
                  <span className="font-medium">{exhibits.artist}</span>
                </div>
              )}
            </div>
            
            {/* Description */}
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {exhibits.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}