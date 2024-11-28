'use client';

import './Projects.css';

const Projects = () => {
  const projects = [
    { title: 'E-commerce Website', description: 'An online store built with Next.js, TailwindCSS, and Stripe for payment integration.', link: '#' },
    { title: 'Portfolio Builder', description: 'A dynamic tool for users to build and download personalized portfolios.', link: '#' },
    { title: 'Meme Generator', description: 'A fun web app to create and share memes.', link: '#' },
    { title: 'Todo List App', description: 'A simple yet functional React app to manage daily tasks.', link: '#' },
    { title: 'Blog Platform', description: 'A full-stack blogging platform with user authentication.', link: '#' },
  ];

  return (
    <div className="projects-page bg-gray-100 min-h-screen py-10 px-4" id='Projects'>
      <div className="container mx-auto max-w-7xl">
        {/* Title Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          My <span className="text-orange-500">Projects</span>
        </h1>
        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-500 fade-in"
            >
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-700 font-medium"
              >
                View Project &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
