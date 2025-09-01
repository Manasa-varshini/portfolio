


import React from "react";
import { motion } from "framer-motion";

const Certifications = () => {
  const certs = [
    "NPTEL-Practical Cybersecurity for Cybersecurity Practitioners",
    "Hackerank (Java Basic)",
    "Hackerank (Problem Solving)",
    "TCS - ion Caree Edge Young Professional",
  ];

  return (
    <motion.section
      id="certifications"
      className="min-h-screen bg-gray-50 px-6 py-12 scroll-mt-20 text-center"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <h2 className="text-4xl font-bold mb-12 text-gray-800">Certifications</h2>
      <div className="space-y-8 max-w-2xl mx-auto">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            className="relative p-6 rounded-lg shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            {/* Gradient Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-300 via-gold-300 to-black-300 rounded-lg blur opacity-75 animate-gradient-slow"></div>

            {/* Inner Card */}
            <div className="relative bg-white rounded-lg p-6 flex items-center justify-center">
              <p className="text-lg font-medium">{cert}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;
