import React from 'react';
import './Footer.css';
import { Icon } from '@iconify/react';

const Footer: React.FC = () => {
  const repoUrl = 'https://github.com/vmarkop/vmarkop.github.io';

  return (
    <section id="footer">
      Find the repository{' '}
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        here
      </a>
    </section>
  );
};

export default Footer;
