import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: '🌌 Space Project',
    description: 'Explore outer space destinations using React and Tailwind CSS.',
    image: '/public/projects/preview.jpg',
    link: 'https://github.com/osasdev-web/space-project',
  },
  {
    title: '💰 Crypto Exchange',
    description: 'A crypto wallet and exchange platform with live prices and wallet integration.',
    image: '/public/projects/3d-cryptocurrency-rendering-design.jpg',
    link: 'https://github.com/osasdev-web/crypto-exchange',
  },
  {
    title: '☁ Global Weather App',
    description: 'A weather app built with React, fetching global data from OpenWeather API.',
    image: '/projects/weather.png',
    link: 'https://github.com/osasdev-web/weather-app',
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="px-8 md:px-20 py-20 bg-[#0f172a] text-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-10 text-center md:text-left"
      >
        My Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1e293b] p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="text-xl font-semibold text-indigo-400">{project.title}</h3>
            <p className="text-sm text-gray-400 mt-2">{project.description.slice(0, 60)}...</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <ProjectModal
        isOpen={selectedProject !== null}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}