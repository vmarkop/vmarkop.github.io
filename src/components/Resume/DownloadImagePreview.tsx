import React, { useEffect, useRef } from 'react';
import './DownloadImagePreview.css';
import { ImageMagnifier } from './ImageMagnifier';

interface DownloadImagePreviewProps {
  src: string;
  alt?: string;
  url: string;
  zoom?: number;
  baseSize?: number; // diameter of the small circle (px)
  lensSize?: number; // diameter of the big circle (px)
}

const DownloadImagePreview: React.FC<DownloadImagePreviewProps> = ({
  src,
  alt,
  url,
  zoom = 3,
  baseSize = 256,
  lensSize = 512,
}) => {
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    const { clientX: x, clientY: y } = e;
    const img = e.currentTarget.querySelector('img') as HTMLImageElement;
    const lens = e.currentTarget.querySelector('.zoom-lens') as HTMLElement;
    if (!img || !lens) return;

    const imgRect = img.getBoundingClientRect();
    const lensRect = lens.getBoundingClientRect();

    // helper to test if (x,y) is inside a circle defined by rect
    const isInCircle = (rect: DOMRect) => {
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = x - cx,
        dy = y - cy;
      return dx * dx + dy * dy <= (rect.width / 2) * (rect.width / 2);
    };

    // if click is *not* in either circle, cancel download
    if (!(isInCircle(imgRect) || isInCircle(lensRect))) {
      e.preventDefault();
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Click to download, Hover to Zoom</h1>
      {/* <a href={url} download className="magnifier-link" onClick={handleClick}> */}
      <a
        href="/file.pdf"
        download
        className="magnifier-link"
        style={
          {
            // set these CSS-vars so our CSS can read them:
            '--lensSize': `${lensSize}px`,
            '--baseRadius': `${baseSize / 2}px`,
            '--lensRadius': `${lensSize / 2}px`,
            '--offset': `${(lensSize - baseSize) / 2}px`,
          } as React.CSSProperties
        }
      >
        <ImageMagnifier
          src={src} /* put an actual image in public/ */
          zoom={zoom}
          baseSize={baseSize}
          lensSize={lensSize}
        />
      </a>
    </div>
  );
};

export default DownloadImagePreview;
