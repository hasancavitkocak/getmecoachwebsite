'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PhoneMockupProps {
  image: string;
  title: string;
}

export default function PhoneMockup({ image, title }: PhoneMockupProps) {
  const [imgSrc, setImgSrc] = useState(image);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (imgSrc.includes('.png')) {
      setImgSrc(image.replace('.png', '.jpg'));
    } else {
      setHasError(true);
    }
  };

  return (
    <div className="relative w-[280px] h-[570px] bg-dark-950 dark:bg-dark-900 rounded-[2.5rem] p-1.5 shadow-2xl ring-4 ring-primary-500/5 dark:ring-dark-800/20 border border-white/10 dark:border-dark-700/30">
      {/* Screen Container */}
      <div className="relative w-full h-full bg-gradient-to-br from-primary-500/10 to-dark-100 dark:from-dark-850 dark:to-dark-900 rounded-[2.2rem] overflow-hidden">
        {/* Dynamic Island (Pill Cutout) */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20 shadow-inner flex items-center justify-center">
          {/* Subtle camera lens reflection effect */}
          <div className="absolute right-3 w-1.5 h-1.5 bg-neutral-900 rounded-full border-[0.5px] border-white/5" />
        </div>
        
        {hasError ? (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-primary-500/10 to-purple-500/10 dark:from-dark-900 dark:to-dark-850">
            <div className="w-12 h-12 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-4 text-primary-500">
              📸
            </div>
            <span className="text-dark-800 dark:text-dark-200 font-bold text-sm mb-1">{title}</span>
            <span className="text-dark-500 dark:text-dark-400 text-xs font-medium">Uygulama Ekranı</span>
            <span className="text-dark-400 dark:text-dark-500 text-[10px] mt-4 border border-dashed border-dark-300 dark:border-dark-700 rounded px-2 py-1 bg-white/50 dark:bg-black/20">
              {image.split('/').pop()}
            </span>
          </div>
        ) : (
          <Image
            src={imgSrc}
            alt={`${title} Ekran Görüntüsü`}
            fill
            className="object-cover"
            unoptimized
            onError={handleError}
          />
        )}
      </div>
    </div>
  );
}
