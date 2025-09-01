import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projectList = [
    {
      title: "Notes App",
      description: "A simple notes app using HTML, CSS, JS.",
      link: "https://notes-app-w8lw-1xiyo34pk-manasas-projects-92167049.vercel.app/",
    },
    {
      title: "MERN Text-to-Image Converter",
      description: "AI-powered image generator with authentication.",
      link: "https://imagify-frontend-etio.vercel.app/",
    },
    {
      title: "Portfolio",
      description: "Personal portfolio using React.",
      link: "https://portfolio-js3ru12j6-manasas-projects-92167049.vercel.app/",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="min-h-screen bg-white px-6 py-12 scroll-mt-20 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
