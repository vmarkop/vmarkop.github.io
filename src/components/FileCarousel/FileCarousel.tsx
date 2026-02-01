import { JSX, useEffect, useRef, useState } from 'react';
import './FileCarousel.css';
import File from './File/File';

const FILE_WIDTH = 210;
const GAP = 16;

const FileCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [index, setIndex] = useState(0);

  const files: JSX.Element[] = [
    <img src="vasileios_markopoulos_cv_en.jpg" alt="Resume Preview" />,
    <img src="vasileios_markopoulos_certificate_kepyes.png" alt="KEPYES Certificate" />,
    <img src="vasileios_markopoulos_cv_gr.jpg" alt="Resume Preview (GR)" />,
    <img src="vasileios_markopoulos_certificate_kepyes_gr.png" alt="KEPYES Certificate (GR)" />,
    <img src="eunis.png" alt="EUNIS Submission" />,
  ];

  // Recalculate how many files fit
  useEffect(() => {
    const updateVisibleCount = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;
      const count = Math.floor(width / (FILE_WIDTH + GAP));
      setVisibleCount(Math.max(1, count));
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, files.length - visibleCount);

  const scrollLeft = () => setIndex((i) => Math.max(0, i - 1));
  const scrollRight = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const translateX = index * (FILE_WIDTH + GAP);

  return (
    <section id="file-carousel">
      <h1>Featured Files</h1>

      <div className="carousel-wrapper">
        <button className="nav left" onClick={scrollLeft} disabled={index === 0}>
          ‹
        </button>

        <div className="carousel-viewport" ref={containerRef}>
          <div className="carousel-track" style={{ transform: `translateX(-${translateX}px)` }}>
            {files.map((content, i) => (
              <File key={i}>{content}</File>
            ))}
          </div>
        </div>

        <button className="nav right" onClick={scrollRight} disabled={index === maxIndex}>
          ›
        </button>
      </div>
    </section>
  );
};

export default FileCarousel;
