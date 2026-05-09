import React from 'react';
import './ExperienceSection.css';

type ExperienceSectionProps = {
  name: string;
  title: string;
  url: string;
  img?: string;
  startDate?: string;
  endDate?: string;
  children?: React.ReactNode;
};

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ ...props }) => {
  return (
    <section id={props.name + '-experience'}>
      <div className="heading-block">
        <img
          src={props.img}
          alt={props.name + ' logo'}
          aria-hidden="true"
          className="heading-icon"
        />

        <div className="heading-text">
          <h2>
            {props.name}
            {' - '}
            {props.title}
          </h2>
          <h3>{props.startDate + ' - ' + (props.endDate ? props.endDate : 'present')}</h3>
        </div>
      </div>
      {props.children}
    </section>
  );
};

export default ExperienceSection;
