import { motion } from 'framer-motion';

export default function ProjectModal({ isOpen, onClose, project }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-[#1e293b] p-6 rounded-lg max-w-xl w-full shadow-lg relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-indigo-400 mb-4">{project.title}</h2>
        <p className="text-gray-300 mb-4">{project.description}</p>

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-md mb-4"
          />
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 underline"
          >
            View Project →
          </a>
        )}
      </motion.div>
    </div>
  );
}