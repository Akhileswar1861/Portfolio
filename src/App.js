
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Akhileswar Elluru</h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-6">Aspiring Data Analyst | Developer | Tech Explorer</p>
        <div className="flex gap-4">
          <a href="https://github.com/akhileswar1861" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl hover:text-blue-400" />
          </a>
          <a href="https://www.linkedin.com/in/akhileswar-elluru-a4581323a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl hover:text-blue-400" />
          </a>
          <a href="mailto:akhileswar1861@gmail.com">
            <FaEnvelope className="text-3xl hover:text-blue-400" />
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-12 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">BRAMHAND</h3>
            <p className="text-gray-300 mb-4">Smart AI Reformer that auto-cleans, validates and summarizes uploaded datasets using ML logic and Streamlit.</p>
            <a href="https://github.com/akhileswar1861/bramhand" target="_blank" className="text-blue-400 hover:underline">View on GitHub</a>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">W25 DFS System</h3>
            <p className="text-gray-300 mb-4">A distributed file system built using C and sockets, enhanced with a React UI to upload/download files securely.</p>
            <a href="https://github.com/akhileswar1861/w25-dfs" target="_blank" className="text-blue-400 hover:underline">View on GitHub</a>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">SkillQuest Bootcamp</h3>
            <p className="text-gray-300 mb-4">Avengers-themed tech training platform with gamified modules in frontend, backend, ML, and cloud deployment.</p>
            <a href="https://github.com/akhileswar1861/skillquest" target="_blank" className="text-blue-400 hover:underline">View on GitHub</a>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Resume</h2>
        <div className="text-center">
          <a href="/Akhileswar_Resume.pdf" download className="bg-blue-500 px-6 py-2 rounded-lg text-white hover:bg-blue-600">Download Resume</a>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="px-6 py-8 bg-gray-800 text-center">
        <p className="text-gray-400">© 2025 Akhileswar Elluru. All rights reserved.</p>
      </footer>
    </div>
  );
}
