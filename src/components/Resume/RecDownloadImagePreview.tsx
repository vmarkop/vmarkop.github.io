import React, { FC, useRef } from 'react';
import './RecDownloadImagePreview.css';

interface DownloadImagePreviewProps {
  /** preview image URL */
  src: string;
  /** download target */
  url: string;
  /** alt text and aria-label */
  alt?: string;
  /** zoom factor (e.g. 2 = 2×) */
  zoom?: number;
  /** base rectangle width (px) */
  baseWidth?: number;
  /** base rectangle height (px) */
  baseHeight?: number;
  /** zoom rectangle width (px) */
  zoomWidth?: number;
  /** zoom rectangle height (px) */
  zoomHeight?: number;
}

export const RecDownloadImagePreview: FC<DownloadImagePreviewProps> = ({
  src,
  url,
  alt = 'Downloadable preview',
  baseWidth = 210,
  baseHeight = 297, // A4 portrait at 1px/mm roughly
  zoomWidth = 420, // 2× size
  zoomHeight = 594,
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  // offsets to center the zoomed rectangle
  const offsetX = (zoomWidth - baseWidth) / 2;
  const offsetY = (zoomHeight - baseHeight) / 2;

  const unfocus = () => {
    console.log('Unfocusing link');
    linkRef.current?.blur();
  };

  return (
    <a
      ref={linkRef}
      href={url}
      download
      className="dip-link"
      aria-label={alt}
      onClick={unfocus}
      style={
        {
          '--bw': `${baseWidth}px`,
          '--bh': `${baseHeight}px`,
          '--zw': `${zoomWidth}px`,
          '--zh': `${zoomHeight}px`,
          '--ox': `${-offsetX}px`,
          '--oy': `${-offsetY}px`,
        } as React.CSSProperties
      }
    >
      {/* base rectangle */}
      <div className="dip-thumb">
        <img src={src} alt={alt} />
      </div>
      {/* zoom rectangle */}
      <div className="dip-zoom" aria-hidden="true">
        <img src={src} alt="" />
      </div>
    </a>
  );
};
