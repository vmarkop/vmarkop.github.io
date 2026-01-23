import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { Icon } from '@iconify/react';
import { Briefcase, FileText, Mail, Moon, Sun, User } from 'lucide-react';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const Sidebar: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <aside className="sidebar">
      <div className="profile">
        <picture className="profile-picture">
          <source srcSet="/profile_picture.webp" type="image/webp" />
          <img
            src="/profile_picture_transparent.png"
            alt="Profile Picture"
            className="profile-picture"
            width={128}
            height={128}
            loading="lazy"
          />
        </picture>
        <h2 className="name">Vasileios Markopoulos</h2>
      </div>
      <nav>
        <a href="#about" className="nav-item">
          <span className="nav-icon" aria-hidden="true">
            <Icon icon="lucide:user" width={24} inline={true} />
            {/* <User /> */}
          </span>
          <span className="nav-label">About</span>
        </a>
        <a href="#experience" className="nav-item">
          <span className="nav-icon" aria-hidden="true">
            <Icon icon="lucide:briefcase" width={24} inline={true} />
            {/* <Briefcase /> */}
          </span>
          <span className="nav-label">Experience</span>
        </a>
        {/* <a href="#projects" className="nav-item">
        <span className="nav-icon" aria-hidden="true">
          <Icon icon="lucide:folder" width={24} inline={true} />
          {/* <Folder /> * /}
        </span>
        <span className="nav-label">Projects</span>
      </a> */}
        <a href="#resume" className="nav-item">
          <span className="nav-icon" aria-hidden="true">
            <Icon icon="lucide:file-text" width={24} inline={true} />
            {/* <FileText /> */}
          </span>
          <span className="nav-label">Resume</span>
        </a>
        <a href="#contact" className="nav-item">
          <span className="nav-icon" aria-hidden="true">
            <Icon icon="lucide:mail" width={24} inline={true} />
            {/* <Mail /> */}
          </span>
          <span className="nav-label">Contact</span>
        </a>
        <a className="nav-item nav-button" onClick={() => setDarkMode((d) => !d)}>
          <span className="nav-icon" aria-hidden="true">
            {darkMode ? (
              <Icon icon="lucide:sun" width={24} inline={true} />
            ) : (
              <Icon icon="lucide:moon" width={24} inline={true} />
            )}
          </span>
          <span className="nav-label">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </a>
        {/* <DarkModeToggle /> */}
      </nav>
    </aside>
  );
};

export default Sidebar;
