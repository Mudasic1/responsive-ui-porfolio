'use client';

import './About.css';

const About = () => {
  return (
    <div className="about-page bg-orange-500 text-white py-10 px-4" id="About">
      {/* Container */}
      <div className="container mx-auto max-w-[1200px]">
        {/* Title Section */}
        <div className="title-section">
          <h1 className="title text-3xl md:text-4xl uppercase text-center underline">About Me</h1>
          {/* Description */}
          <div className="description text-center pt-6">
            <p className="text-base sm:text-lg md:text-xl font-light tracking-wide leading-relaxed">
              I’m a passionate full-stack web developer with expertise in building dynamic and responsive web applications. My skill set includes JavaScript, TypeScript, Express.js, Next.js, TailwindCSS, HTML, and CSS. I thrive on crafting efficient and scalable solutions, bringing ideas to life through clean and intuitive design. Let’s create something amazing together!
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section mt-12">
          <h1 className="skills-title text-3xl md:text-4xl text-center font-bold">My Skills</h1>

          <div className="skills-container flex flex-wrap mt-8 justify-center gap-6 sm:gap-8">
            {/* Skill items */}
            {[
              { skill: 'HTML', percentage: 90 },
              { skill: 'CSS', percentage: 85 },
              { skill: 'JavaScript', percentage: 95 },
              { skill: 'TypeScript', percentage: 80 },
              { skill: 'ReactJS', percentage: 90 },
              { skill: 'Next.js', percentage: 85 },
              { skill: 'TailwindCSS', percentage: 88 },
              { skill: 'Express.js', percentage: 80 },
            ].map(({ skill, percentage }, index) => (
              <div
                key={index}
                className="skill-card flex flex-col items-center bg-white text-black p-4 sm:p-6 rounded-lg shadow-lg w-[150px] sm:w-[180px] md:w-[200px] hover:scale-105 transition-transform"
              >
                <h2 className="skill-name text-lg md:text-xl font-bold">{skill}</h2>
                <div className="progress-bar-wrapper relative w-full h-2 mt-4 rounded-full bg-gray-200">
                  <div
                    className="progress-bar absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="percentage text-sm md:text-base font-semibold mt-2">
                  {percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
