import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const repoUrl = 'https://github.com/vmarkop/vmarkop.github.io';

  return (
    <section id="footer">
      Last updated: May 2026.
      Find the repository on{' '}
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        Github
      </a>.
    </section>
  );
};

export default Footer;
