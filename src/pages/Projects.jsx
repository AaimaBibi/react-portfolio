import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projectData = [
      {
      title: "FoodMuse",
      description:"FoodMuse is a React app inspired by real-world food platforms. Built with cart state logic, quantity controls, category filtering, and a functional checkout form—it guides the user from selection to satisfaction. Designed with warmth, responsiveness, and a love for good UI/UX.",
      tech: ["React", "Styled UI", "Routing", "Cart Logic", "Frontend Project"],
      link: "https://foodmuse.vercel.app/",
      repo: "https://github.com/AaimaBibi/foodmuse",
      },

      {
      title: 'Text-Translator',
      description:'A fast, multilingual text translation tool built for globalcommunication. This app empowers users to instantly convert text between dozens of languages using real-time API integration.',
      tech:  ['React', 'API Integration: Axios', 'Vite', 'Tailwind CSS'],
      link: 'https://text-translator-kappa-ebon.vercel.app/',
      repo: "https://github.com/AaimaBibi/Text-Translator"
      },

      {  
      title: 'Random-String-Generator',
      description:'A sleek and secure password generator with a modern UI. Users can choose the desired length and instantly create strong, randomized passwords—ideal for everyday security needs.',
      tech:  ['React', 'Tailwind CSS'],
      link: 'https://random-string-generator-zeta.vercel.app/',
      repo: "https://github.com/AaimaBibi/Random-string-generator"
     },

      {
      title: 'Mock Weather App',
      description: 'A weather simulation UI that responds to city input with emoji-rich mock data, dynamic backgrounds, and elegant transitions—all built without APIs.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Mock Data', 'Responsive Design', 'Animated UI'],
      link: 'https://mock-weather-app-six.vercel.app/',
      repo: "https://github.com/AaimaBibi/mock-weather-app",
      },
      {
      title: 'Todo List App',
      description: 'A clean and interactive task manager with localStorage, animated task entries, and a modern UI—built with vanilla JavaScript.',
      tech:  ['HTML', 'CSS', 'JavaScript', 'LocalStorage', 'DOM Manipulation'],
      link: 'https://todo-list-zeta-six-70.vercel.app/',
      repo: "https://github.com/AaimaBibi/todo-list"
     },
    
  ];

  return (
    <section style={{ padding: '2rem' }}>
      <h1>Projects</h1>
      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        {projectData.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
