import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  imageSrc: string;
  title?: string;
  description?: string;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  imageSrc,
  title,
  description,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blucy-navy/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all focus:outline-none"
          aria-label="Close image preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Preview Container */}
        <div className="overflow-auto flex-grow flex items-center justify-center p-2 sm:p-4 bg-slate-900">
          <img
            src={imageSrc}
            alt={title || 'Image Preview'}
            className="max-h-[75vh] w-auto object-contain rounded-xl"
          />
        </div>

        {/* Caption */}
        {(title || description) && (
          <div className="p-4 sm:p-5 bg-white border-t border-blucy-ice">
            {title && (
              <h4 className="font-heading font-bold text-blucy-navy text-lg">
                {title}
              </h4>
            )}
            {description && (
              <p className="text-xs sm:text-sm text-blucy-muted mt-1 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
