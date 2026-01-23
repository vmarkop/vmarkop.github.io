import React from 'react';
// import { Icon, Linkedin, Mail } from 'lucide-react';
import './Contact.css';
import { Icon } from '@iconify/react';

const Contact: React.FC = () => {
  const name = 'Vasileios';
  const url = 'vmarkop.gr';
  const email = 'vmarkop+portfoliowebsite@outlook.com';
  const body = `Dear ${name},\n\nI have found your contact information through ${url} `;

  return (
    <section id="contact">
      <h1>Contact me</h1>
      <div className="contact-bar">
        <a href="https://www.linkedin.com/in/vmarkop/" target="_blank" rel="noopener noreferrer">
          <Icon icon="simple-icons:linkedin" width={24} inline={true} />
        </a>
        <a href={`mailto:${email}?body=${encodeURIComponent(body)}`}>
          <Icon icon="lucide:mail" width={24} inline={true} />
        </a>
        <a href="https://github.com/vmarkop">
          <Icon icon="simple-icons:github" width={24} inline={true} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
