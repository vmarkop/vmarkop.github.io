import React, { FC, MouseEvent, useEffect, useRef } from 'react';
import './ClickableMagnifierLink.css';

interface ClickableMagnifierLinkProps {
  /** image to magnify */
  src: string;
  /** download target */
  downloadHref: string;
  baseSize?: number; // diameter of small circle
  lensSize?: number; // diameter of big lens
  zoom?: number; // zoom factor
}

export const ClickableMagnifierLink: FC<ClickableMagnifierLinkProps> = ({
  src,
  downloadHref,
  baseSize = 256,
  lensSize = 512,
  zoom = 0.5,
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);

  // --- 1) set up the magnifier (same as before) ---
  useEffect(() => {
    const img = imgRef.current;
    const lens = lensRef.current;
    if (!img || !lens) return;

    const setBg = () => {
      const nw = img.naturalWidth;
      const nh = img.naturalHeight;
      lens.style.backgroundImage = `url(${src})`;
      lens.style.backgroundSize = `${nw * zoom}px ${nh * zoom}px`;
    };
    if (img.complete) setBg();
    else img.addEventListener('load', setBg);

    const onMouseMove = (e: MouseEvent) => {
      const rect = img.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      x = Math.max(0, Math.min(x, rect.width));
      y = Math.max(0, Math.min(y, rect.height));
      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;
      lens.style.backgroundPosition = `${px}% ${py}%`;
    };

    const container = img.parentElement!;
    container.addEventListener('mouseenter', () => (lens.style.display = 'block'));
    container.addEventListener('mouseleave', () => (lens.style.display = 'none'));
    container.addEventListener('mousemove', onMouseMove as any);

    return () => {
      container.removeEventListener('mousemove', onMouseMove as any);
      container.removeEventListener('mouseenter', () => {});
      container.removeEventListener('mouseleave', () => {});
      img.removeEventListener('load', setBg);
    };
  }, [src, zoom]);

  // --- 2) only allow the download if click was inside one of the two circles ---
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const img = imgRef.current;
    const lens = lensRef.current;
    if (!img || !lens) return;

    const x = e.clientX;
    const y = e.clientY;

    // helper: true if (x,y) is inside the circle boundingRect
    const inCircle = (r: DOMRect) => {
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = x - cx,
        dy = y - cy;
      return dx * dx + dy * dy <= (r.width / 2) ** 2;
    };

    const imgRect = img.getBoundingClientRect();
    const lensRect = lens.getBoundingClientRect();

    if (!(inCircle(imgRect) || inCircle(lensRect))) {
      // click was outside both circles → cancel the link
      e.preventDefault();
    }
    // otherwise, let the <a> download as normal
  };

  return (
    <a
      ref={linkRef}
      href={downloadHref}
      download
      onClick={handleClick}
      className="cm-link"
      style={{ width: baseSize, height: baseSize }}
    >
      <div className="cm-image-wrapper" style={{ width: baseSize, height: baseSize }}>
        <img ref={imgRef} src={src} className="cm-image" alt="Zoomable" />
      </div>
      <div ref={lensRef} className="cm-lens" style={{ width: lensSize, height: lensSize }} />
    </a>
  );
};
