import React from 'react';
import ExperienceSection from '../ExperienceSection/ExperienceSection';

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <h1>Experience</h1>
      <ExperienceSection
        name="GUNet"
        title="Software engineer"
        img="GUnet_Logo_2.svg"
        url="https://gunet.gr"
        startDate="01-10-2021"
        endDate="30-05-2023"
        // description="Worked as a Software Engineer"
      >
        <div>
          Software Engineering Internship, focused on Identity Management, User Authentication and
          contributing to open-source projects. Skills acquired:
          <ul>
            <li>
              Real world experience with Python, as well as MySQL, Javascript, and the Flask
              framework.
            </li>
            <li>Github version control proficiency.</li>
            <li>
              Research and configuration of OpenID Connect, LDAP and SAML authentication methods.
            </li>
          </ul>
        </div>
        <div>
          Software Engineering role, specializing in Identity Management.
          <ul>
            <li>
              Research and development of a modern and secure European Digital Wallet
              implementation.
            </li>
            <li>Contribution to Greek HEI authentication mechanisms.</li>
            <li>
              Development of University certificate recognition ecosystems in Greece and across
              Europe.
            </li>
            <li>CI/CD of full-stack applications, on bare minimum Linux servers.</li>
          </ul>
        </div>
      </ExperienceSection>
      <ExperienceSection
        name="Netcompany"
        title="Consultant"
        img="netcompany-logo.png"
        url="https://netcompany.com"
        startDate="01-06-2023"
        endDate="28-02-2025"
        // description="Worked as a Consultant"
      >
        <div>
          Associate Consultant / Full-stack Developer, with responsibilities in system architecture.
          <ul>
            <li>
              Maintained and developed a full-stack Java Spring boot application for Danish
              pensioners.
            </li>
            <li>
              Contributed to system architecture tasks, including major version migrations and
              database optimizations.
            </li>
            <li>
              Collaborated in a fast-paced, multicultural environment with talented individuals from
              across Europe.
            </li>
            <li>Delivered real-time support, including hotfixes, to ensure smooth deployments.</li>
            <li>
              Consulted Danish-speaking clients, ensuring clear communication of technical
              requirements and delivering effective software solutions.
            </li>
          </ul>
        </div>
      </ExperienceSection>
      <ExperienceSection
        name="Hellenic Army"
        title="Software engineer"
        img="ges.png"
        url="https://army.gr"
        startDate="10-03-2025"
        endDate="10-03-2026 (expected)"
        description="Fulfilled my mandatory military service, offering my services as a Full-Stack Software Engineer"
      >
        <div>
          Fulfilled my mandatory military service, offering my services as a Full-Stack Software
          Engineer for the maintainance and development of confidential internal software systems
          for the Hellenic army. Expected completion: March 2026
          <ul>
            <li>
              Developed and maintained confidential software systems in a high-security, offline
              environment.
            </li>
            <li>
              Delivered a frontend application for visualizing live operational data using modern
              web frameworks.
            </li>
            <li>
              Assisted in maintaining a released full-stack application built with enterprise-grade
              backend and frontend technologies.
            </li>
            <li>
              Containerized a full-stack application suite for rapid deployment across diverse
              environments.
            </li>
            <li>
              Configured Windows and Linux machines from a fresh install to a deployed application
              stack.
            </li>
            <li>
              Collaborated with trained officers, skilled developers, and cybersecurity experts, in
              accordance with ISO 27001:2022 standards.
            </li>
          </ul>
        </div>
      </ExperienceSection>
    </section>
  );
};

export default Experience;
