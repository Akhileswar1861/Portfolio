import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaGraduationCap,FaPhone, FaBriefcase, FaCodeBranch, FaDatabase, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiReact, SiPython } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const projectsData = [
  {
    id: 1,
    title: 'Butterfly Effect',
    category: ['AI/ML', 'Data Analytics'],
    image: 'https://i.postimg.cc/yx0KS4hF/Butterfly-effect.jpg',
    github: 'https://github.com/akhileswar1861/butterfly-effect'
  },
  {
    id: 2,
    title: 'SkillQuest Bootcamp',
    category: ['Full-Stack', 'Web Development', 'Education'],
    image: 'https://i.postimg.cc/PfDT7YGP/skillquest.jpg',
    github: 'https://github.com/akhileswar1861/skillquest'
  },
  {
    id: 3,
    title: 'Bramhand',
    category: ['AI/ML', 'Full-Stack'],
    image: 'https://i.postimg.cc/sXQssZvH/bram.jpg',
    github: 'https://github.com/akhileswar1861/bramhand'
  },
  {
    id: 4,
    title: 'W25 DFS System',
    category: ['Full-Stack', 'Web Development'],
    image: 'https://i.postimg.cc/YSyM5xqm/db.png',
    github: 'https://github.com/akhileswar1861/w25-dfs'
  },
  {
    id: 5,
    title: 'SmartSave',
    category: ['Full-Stack', 'Data Visualization'],
    image: 'https://i.postimg.cc/ZRGZRKNb/Doller.webp',
    github: 'https://github.com/akhileswar1861/smartsave'
  },
  {
    id: 6,
    title: 'Digital Divide Dashboard',
    category: ['Data Analytics', 'Data Visualization', 'Education'],
    image: 'https://i.postimg.cc/Xq4HxRSK/Chat-GPT-Image-Apr-20-2025-12-10-01-AM.png',
    github: 'https://github.com/akhileswar1861/digital-divide'
  }
];


const categories = ['All', 'AI/ML', 'Data Analytics', 'Full-Stack', 'Web Development', 'Data Visualization', 'Education'];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_m9toccb',        // your EmailJS service ID
    'template_dxkqelr',       // your EmailJS template ID
    form.current,
    'WfW7-i5zCZiJIiCpl'       // your public key
  ).then(
    () => {
      alert('✅ Message sent successfully!');
    },
    (error) => {
      alert('❌ Failed to send message. Please try again.');
      console.log(error);
    }
  );

  e.target.reset(); // optional: clear form
};


  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category.includes(activeCategory));

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-950 shadow-md sticky top-0 z-50">
        <div className="text-2xl font-bold text-blue-400">A.E.</div>
        <div className="hidden md:flex space-x-6 text-lg">
          <a href="#hero" className="text-white hover:text-blue-400 border-b-2 border-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
        <a href="/Akhileswar_Resume.pdf" download className="border-2 border-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500">Download Resume</a>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-center h-screen px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-lg text-purple-400">Hello, I'm Akhileswar Elluru</h2>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
            Building tech that <span className="text-blue-400">thinks</span>, <span className="text-blue-400">feels</span>, and <span className="text-blue-400">solves</span> 💡
          </h1>
          <p className="text-lg text-gray-300 mb-6 max-w-xl">
            I'm a full-stack developer and data analyst crafting immersive experiences with code and creativity. Currently pursuing a Master of Applied Computing at the University of Windsor.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a href="#projects" className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition">View Projects →</a>
            <a href="#contact" className="bg-black border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition">Contact Me</a>
          </div>
        </div>
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <img
            src="https://i.postimg.cc/52Tzf8tD/Visa-Photograph.jpg"
            alt=""
            className="rounded-full border-4 border-blue-400 shadow-xl w-64 h-64 object-cover"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-16 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-6">About <span className="text-blue-400">Me</span></h2>
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-2">I'm a <span className="text-blue-400">Full-Stack Developer</span> and <span className="text-blue-400">Data Analyst</span></h3>
          <p className="text-gray-300 mb-6">
            A Master of Applied Computing student at the University of Windsor, passionate about blending data, AI, and full–stack development to create immersive, impactful solutions.
          </p>
          <p className="text-gray-300">
            My passion lies in creating solutions that merge analytical thinking with creative design. I believe technology should not only function flawlessly but also deliver experiences that resonate emotionally with users.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <FaGraduationCap className="text-xl text-white" />
              <h4 className="text-white text-xl font-semibold">Education</h4>
            </div>
            <p className="text-gray-300">Master of Applied Computing</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <FaBriefcase className="text-xl text-white" />
              <h4 className="text-white text-xl font-semibold">Experience</h4>
            </div>
            <p className="text-gray-300">Workato Developer – Infoteck Solutions, Hyderabad</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-16 bg-gray-950">
        <h2 className="text-4xl font-bold text-center mb-12">My <span className="text-blue-400">Skills</span></h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {[{ name: "Python", icon: <SiPython className='text-4xl text-blue-400' />, level: "w-4/5" },
            { name: "React", icon: <SiReact className='text-4xl text-blue-400' />, level: "w-4/5" },
            { name: "Node.js", icon: <FaNodeJs className='text-4xl text-blue-400' />, level: "w-4/5" },
            { name: "SQL", icon: <FaDatabase className='text-4xl text-blue-400' />, level: "w-5/6" },
            { name: "MongoDB", icon: <SiMongodb className='text-4xl text-blue-400' />, level: "w-4/5" },
            { name: "Git", icon: <FaCodeBranch className='text-4xl text-blue-400' />, level: "w-4/5" }
          ].map((skill, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-gray-800 p-6 rounded-lg mb-3 inline-block">{skill.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{skill.name}</h4>
              <div className="h-2 w-full bg-gray-700 rounded-full">
                <div className={`h-2 bg-blue-400 rounded-full ${skill.level}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Tag-based Skills */}
        <div className="mt-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-black p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {["Python", "React", "Node.js", "Power BI", "SQL", "XGBoost", "MongoDB", "Git", "Workato", "JavaScript", "TypeScript", "Data Analytics", "Machine Learning", "HTML/CSS"].map((skill, index) => (
                <span key={index} className="bg-gray-700 text-sm px-3 py-1 rounded-full">{skill}</span>
              ))}
            </div>
          </div>
          <div className="bg-black p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {["Problem Solving", "Teamwork", "Communication", "Adaptability", "Time Management", "Critical Thinking", "Leadership", "Creativity"].map((skill, index) => (
                <span key={index} className="bg-gray-700 text-sm px-3 py-1 rounded-full">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-16 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-8">Featured <span className="text-blue-400">Projects</span></h2>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                activeCategory === cat ? 'bg-blue-500 text-white' : 'bg-black text-white hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <a
                  href={project.github}
                  target="_blank"
                  className="inline-block mt-2 text-blue-400 hover:underline"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 py-16 bg-gray-950">
        <h2 className="text-4xl font-bold text-center mb-12">Contact <span className="text-blue-400">Me</span></h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's Talk</h3>
            <p className="text-gray-300 mb-6">
              Have a project in mind or just want to say hi? I'd love to hear from you. Fill out the form and I'll get back to you as soon as possible.
            </p>
            <div className="bg-gray-800 p-4 rounded mb-4 flex items-center gap-4">
              <FaEnvelope className="text-blue-400 text-2xl" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-300">akhileswar1861@gmail.com</p>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded flex items-center gap-4">
              <FaPhone className="text-blue-400 text-2xl" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-300">+1 (647) 123-4567</p>
              </div>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="bg-gray-800 p-6 rounded-lg">
  <div className="grid md:grid-cols-2 gap-4">
    <div>
      <label className="block mb-1">Your Name</label>
      <input name="user_name" type="text" placeholder="John Doe" className="w-full p-2 rounded bg-gray-900 text-white" required />
    </div>
    <div>
      <label className="block mb-1">Your Email</label>
      <input name="user_email" type="email" placeholder="john@example.com" className="w-full p-2 rounded bg-gray-900 text-white" required />
    </div>
  </div>
  <div className="mt-4">
    <label className="block mb-1">Subject</label>
    <input name="subject" type="text" placeholder="How can I help you?" className="w-full p-2 rounded bg-gray-900 text-white" required />
  </div>
  <div className="mt-4">
    <label className="block mb-1">Message</label>
    <textarea name="message" rows="5" placeholder="Tell me about your project..." className="w-full p-2 rounded bg-gray-900 text-white" required />
  </div>
  <button type="submit" className="mt-6 bg-blue-500 px-6 py-2 rounded text-white hover:bg-blue-600">
    Send Message
  </button>
</form>

        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-gray-900 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com/akhileswar1861" target="_blank" rel="noopener noreferrer"><FaGithub className="text-2xl hover:text-blue-400" /></a>
          <a href="https://www.linkedin.com/in/akhileswar-elluru-a4581323a/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-2xl hover:text-blue-400" /></a>
          <a href="mailto:akhileswar1861@gmail.com"><FaEnvelope className="text-2xl hover:text-blue-400" /></a>
        </div>
        <p className="text-gray-400">© 2025 Akhileswar Elluru. All rights reserved.</p>
      </footer>
    </div>
  );
}
