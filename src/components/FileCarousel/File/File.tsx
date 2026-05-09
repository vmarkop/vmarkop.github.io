import React, { useState } from 'react';
import './File.css';
import { Icon } from '@iconify/react';

type FileProps = {
  children?: React.ReactNode;
  fileName?: string;
  downloadUrl?: string;
  active?: boolean;
  onToggle?: () => void;
};

const File: React.FC<FileProps> = ({
  children,
  fileName,
  downloadUrl,
  active = false,
  onToggle
}) => {

  return (
    <div
      className={`file ${active ? 'active' : ''}`}
      onClick={onToggle}
    >
      {children || <Icon icon="lucide:file" width={210} height={297} inline={true} />}

      <div className="file-overlay">
        <span className="file-name">{fileName}</span>

        {downloadUrl && (
          <a href={downloadUrl} download className="download-btn">
            <Icon icon="lucide:download" width={20} />
          </a>
        )}
      </div>
    </div>
  );
};

export default File;
