import React from 'react';
import './File.css';
import { Icon } from '@iconify/react';

type FileProps = {
  key?: number;
  children?: React.ReactNode;
};

const File: React.FC<FileProps> = ({ children }) => {
  return (
    <div className="file">
      {children || <Icon icon="lucide:file" width={210} height={297} inline={true} />}
    </div>
  );
};

export default File;
