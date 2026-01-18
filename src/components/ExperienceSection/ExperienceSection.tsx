import React from 'react';
import './ExperienceSection.css';

type ExperienceSectionProps = {
  name: string;
  title: string;
  url: string;
  img?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
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
          <h3>{props.startDate + (props.endDate ? ' - ' + props.endDate : '')}</h3>
        </div>
      </div>
      {/* <h2 className="experience-header">
        <img src={props.img} alt={props.name + ' logo'} className="experience-company-logo" />
        {props.name}
        {' - '}
        {props.title}
      </h2> */}
      {/* <p>{props.description}</p> */}
      {props.children}
    </section>
  );
};

export default ExperienceSection;
