import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { Briefcase, FileText, Folder, Mail, Moon, Sun, User } from 'lucide-react';
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
        <img
          src="/profile_picture_transparent.png" // Replace this with your own image path
          alt="Profile Picture"
          className="profile-picture"
        />
        <h2 className="name">Vasileios Markopoulos</h2>
      </div>
      <nav>
        <a href="#about" className="nav-item">
          <span className="nav-icon" aria-hidden="true">
            <User />
          </span>
          <span className="nav-label">About</span>
        </a>
        <a href="#experience" className="nav-item">
          <span className="nav-icon" aria-hidden="true">
            <Briefcase />
          </span>
          <span className="nav-label">Experience</span>
        </a>
        {/* <a href="#projects" className="nav-item">
        <span className="nav-icon" aria-hidden="true">
          <Folder />
        </span>
        <span className="nav-label">Projects</span>
      </a> */}
        <a href="#resume" className="nav-item">
          <span className="nav-icon" aria-hidden="true">
            <FileText />
          </span>
          <span className="nav-label">Resume</span>
        </a>
        <a href="#contact" className="nav-item">
          <span className="nav-icon" aria-hidden="true">
            <Mail />
          </span>
          <span className="nav-label">Contact</span>
        </a>
        <a className="nav-item nav-button" onClick={() => setDarkMode((d) => !d)}>
          <span className="nav-icon" aria-hidden="true">
            {darkMode ? <Sun /> : <Moon />}
          </span>
          <span className="nav-label">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </a>
        {/* <DarkModeToggle /> */}
      </nav>
    </aside>
  );
};

export default Sidebar;
