// src/components/ImageMagnifier.tsx
import React, { FC, useEffect, useRef } from 'react';
import './ImageMagnifier.css';

export interface ImageMagnifierProps {
  src: string;
  zoom?: number; // e.g. 2 for 2×, 0.5 for half-zoom
  baseSize?: number; // diameter of the small circle (px)
  lensSize?: number; // diameter of the big circle (px)
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

    // once image is loaded, set the high-res background
    const setBackground = () => {
      const nw = img.naturalWidth;
      const nh = img.naturalHeight;
      lens.style.backgroundImage = `url(${src})`;
      lens.style.backgroundSize = `${nw * zoom}px ${nh * zoom}px`;
    };
    if (img.complete) {
      setBackground();
    } else {
      img.addEventListener('load', setBackground);
    }

    // one global mousemove handler
    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const imgRect = img.getBoundingClientRect();
      const lensRect = lens.getBoundingClientRect();

      // circle hit‐test for base image
      const imgCX = imgRect.left + imgRect.width / 2;
      const imgCY = imgRect.top + imgRect.height / 2;
      const imgR = imgRect.width / 2; // assume square display
      const dxImg = x - imgCX,
        dyImg = y - imgCY;
      const overImgCircle = dxImg * dxImg + dyImg * dyImg <= imgR * imgR;

      // circle hit‐test for lens
      const lensCX = lensRect.left + lensRect.width / 2;
      const lensCY = lensRect.top + lensRect.height / 2;
      const lensR = lensRect.width / 2;
      const dxLens = x - lensCX,
        dyLens = y - lensCY;
      const overLensCircle = dxLens * dxLens + dyLens * dyLens <= lensR * lensR;

      if (overImgCircle || overLensCircle) {
        // show the lens if it’s not already
        if (lens.style.display !== 'block') {
          lens.style.display = 'block';
        }
        // pan the background relative to the image
        let mx = x - imgRect.left;
        let my = y - imgRect.top;
        mx = Math.max(0, Math.min(mx, imgRect.width));
        my = Math.max(0, Math.min(my, imgRect.height));
        const px = (mx / imgRect.width) * 100;
        const py = (my / imgRect.height) * 100;
        lens.style.backgroundPosition = `${px}% ${py}%`;
      } else {
        // hide if outside both circles
        if (lens.style.display !== 'none') {
          lens.style.display = 'none';
        }
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      img.removeEventListener('load', setBackground);
    };
  }, [src, zoom]);

  return (
    <div className="zoom-container" style={{ width: baseSize, height: baseSize }}>
      {/* the small circular image */}
      <div className="image-wrapper">
        <img ref={imgRef} src={src} className="zoom-image" alt="Zoomable" />
      </div>
      {/* the overlaid big circular lens */}
      <div ref={lensRef} className="zoom-lens" style={{ width: lensSize, height: lensSize }} />
    </div>
  );
};
