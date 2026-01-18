// PreviewDownload.tsx
import React, { FC } from 'react';
import './PreviewDownload.css';

interface PreviewDownloadProps {
  href: string;
  img: string;
  alt: string;
  size?: number; // diameter of thumbnail
  zoomSize?: number; // diameter of zoomed preview
}

export const PreviewDownload: FC<PreviewDownloadProps> = ({
  href,
  img,
  alt,
  size = 256,
  zoomSize = 512,
}) => {
  const offset = (zoomSize - size) / 2;

  return (
    <a
      href={href}
      download
      className="preview-link"
      aria-label={alt}
      style={
        {
          '--pd-size': `${size}px`,
          '--pd-zoom': `${zoomSize}px`,
          '--pd-offset': `${-offset}px`,
        } as React.CSSProperties
      }
    >
      <div className="thumb-wrapper">
        <img src={img} alt={alt} className="preview-thumb" />
      </div>
      <div className="zoom-wrapper" aria-hidden="true">
        <img src={img} alt="" className="preview-zoom" />
      </div>
    </a>
  );
};
