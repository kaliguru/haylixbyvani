import { useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

function ImageViewer({ image, onClose }) {
  const { isDark } = useTheme();

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className={`relative max-w-4xl w-full mx-4 rounded-lg overflow-hidden animate-scale-up ${
          isDark ? 'bg-[#242424]' : 'bg-white'
        }`}
        onClick={e => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        <img 
          src={image} 
          alt="Preview" 
          className="w-full h-auto animate-fade-in"
        />
      </div>
    </div>
  );
}

export default ImageViewer;
