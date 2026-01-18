import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import './Contact.css';

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
          <Linkedin className="w-6 h-6" />
        </a>
        <a href={`mailto:${email}?body=${encodeURIComponent(body)}`}>
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
