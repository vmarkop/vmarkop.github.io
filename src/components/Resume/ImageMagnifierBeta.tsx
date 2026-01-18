// src/components/ImageMagnifier.tsx
import React, { FC, useEffect, useRef } from 'react';
import './ImageMagnifier.css';

export interface ImageMagnifierProps {
  src: string;
  zoom?: number;
  /** Diameter of the base circle in px */
  baseSize?: number;
  /** Diameter of the zoom lens in px */
  lensSize?: number;
}

export const ImageMagnifier: FC<ImageMagnifierProps> = ({
  src,
  zoom = 2,
  baseSize = 256,
  lensSize = 512,
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const lensRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const img = imgRef.current;
    const lens = lensRef.current;
    if (!img || !lens) return;

    // Background setup
    lens.style.backgroundImage = `url(${src})`;
    lens.style.backgroundSize = `${baseSize * zoom}px ${baseSize * zoom}px`;

    // Handlers
    const showLens = () => {
      lens.style.display = 'block';
    };
    const hideLens = () => {
      lens.style.display = 'none';
    };
    const moveLens = (e: MouseEvent) => {
      const { left, top, width, height } = img.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const px = (x / width) * 100;
      const py = (y / height) * 100;
      lens.style.backgroundPosition = `${px}% ${py}%`;
    };

    img.addEventListener('mouseenter', showLens);
    img.addEventListener('mouseleave', hideLens);
    img.addEventListener('mousemove', moveLens);

    return () => {
      img.removeEventListener('mouseenter', showLens);
      img.removeEventListener('mouseleave', hideLens);
      img.removeEventListener('mousemove', moveLens);
    };
  }, [src, zoom, baseSize]);

  return (
    <div className="zoom-container" style={{ width: baseSize, height: baseSize }}>
      {/* only this div clips to circle */}
      <div className="image-wrapper" style={{ width: baseSize, height: baseSize }}>
        <img ref={imgRef} src={src} className="zoom-image" alt="Zoomable" />
      </div>

      {/* lens lives in the unclipped parent */}
      <div ref={lensRef} className="zoom-lens" style={{ width: lensSize, height: lensSize }} />
    </div>
  );
};
