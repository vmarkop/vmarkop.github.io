import React from 'react';
import { ClickableMagnifierLink } from './ClickableMagnifierLink';
import DownloadImagePreview from './DownloadImagePreview';
import { ImageMagnifier } from './ImageMagnifier';
import { PreviewDownload } from './PreviewDownload';
import { RecDownloadImagePreview } from './RecDownloadImagePreview';
import './Resume.css';

const Resume: React.FC = () => {
  return (
    <section id="resume">
      <h1>Resume</h1>
      <p>You can find my CV here. Click to download:</p>
      <div className="resumes-flex">
        <div>
          <h3>English</h3>
          <RecDownloadImagePreview
            src="vasileios_markopoulos_cv_en.jpg"
            alt="Resume Preview"
            url="/vasileios_markopoulos_cv_en.pdf"
            zoom={0.5}
          />
        </div>
        <div>
          <h3>Greek</h3>
          <RecDownloadImagePreview
            src="vasileios_markopoulos_cv_gr.jpg"
            alt="Resume Preview"
            url="/vasileios_markopoulos_cv_gr.pdf"
            zoom={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
