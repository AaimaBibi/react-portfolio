import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const skills = [
  'Html5', 'CSS3', 'JavaScript', 'Responsive Designs',
  'React', 'APIs', 'useEffect Cleanup',
  'Debounce Logic','Performance Optimization',
];

const Home = () => {
  return (
    <main className="home-page">

      {/* 🌟 Hero Section */}
      <section className="hero">
        <h1>Hi, I’m Aaima — Aspiring Frontend Developer </h1>
        <p>I build interactive web experiences that blend clean code with meaningful design.</p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn">View Projects</Link>
          {/* <Link to="/about" className="btn outline">About Me</Link> */}
        </div>
      </section>

      {/* 👤 About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
         I’m an aspiring Frontend Developer with a strong foundation in HTML, CSS, and JavaScript, currently focusing on modern frameworks like React.

My learning approach is highly project-driven—I enjoy turning concepts into interactive web experiences. I pay attention to detail, whether it's styling a component for responsive layouts or optimizing performance using hooks like useEffect. I’m also exploring best practices in UI/UX to craft interfaces that feel intuitive and engaging.

I believe that great developers aren’t born—they’re built through consistent practice and curiosity. That’s the mindset I bring to every line of code. 
        </p>
        <p>I've Earned Certification in Responsive Web Design from FreeCodeCamp</p>
      </section>

      {/* 🧠 Skills Section */}
      <section className="skills">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <span className="skill-tag" key={idx}>{skill}</span>
          ))}
        </div>
      </section>

      {/* 🧪 Featured Projects Preview */}
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <p>Here’s a glimpse of what I’ve been building recently.</p>
        <div className="project-preview">
          <Link to="/projects" className="btn">Explore Full Gallery</Link>
        </div>
      </section>


      {/* 🔻 Footer */}
      <footer className="footer">
        <p>Designed & Built with 💛 by Aaima — 2025</p>
      </footer>

    </main>
  );
};

export default Home;
