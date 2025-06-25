import React from 'react';

const projectData = [
  {
    title: 'YouTube Clone',
    tech: 'React.js, Netlify',
    link: 'https://dancing-travesseiro-dbc267.netlify.app/',
    desc: 'Responsive YouTube clone with search and embedded video playback.'
  },
  {
    title: 'Video Points Tracker',
    tech: 'React.js, JavaScript',
    link: 'https://vocal-kataifi-c5d343.netlify.app/',
    desc: 'Custom video player with session tracking and progress display.'
  },
  {
    title: 'Electroplating Services Website',
    tech: 'HTML, CSS',
    link: 'https://startling-boba-d4af5d.netlify.app/',
    desc: 'Business website with map integration and mobile-first design.'
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectData.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p><strong>Tech:</strong> {proj.tech}</p>
            <p>{proj.desc}</p>
            <a href={proj.link} target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
