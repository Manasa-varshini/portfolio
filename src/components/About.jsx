


import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 scroll-mt-20 text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/myimage.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-2xl text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg mb-6">
          Hi, I'm <span className="font-semibold">Manasavarshini</span>, a passionate web developer and designer.
          I love creating responsive and user-friendly applications using modern web technologies.
        </p>
        <a
          href="/Manasavarshini G D Resume.pdf"
          download
          className="px-6 py-3 bg-black rounded-full shadow hover:bg-gray-700 transition"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default About;
