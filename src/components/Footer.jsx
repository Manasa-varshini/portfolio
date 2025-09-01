import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      id="footer"
      className="bg-gray-900 text-white py-6 scroll-mt-20 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <p>© {new Date().getFullYear()} Manasavarshini. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="https://github.com/Manasa-varshini?tab=repositories" target="_blank" rel="noreferrer" className="hover:text-blue-400">GitHub</a>
        <a href="https://www.linkedin.com/in/manasavarshini-g-d-645b85257/" target="_blank" rel="noreferrer" className="hover:text-blue-400">LinkedIn</a>
        <a href="mailto:manasavarshini05@gmail.com" className="hover:text-blue-400">Email</a>
      </div>
    </motion.footer>
  );
};

export default Footer;
