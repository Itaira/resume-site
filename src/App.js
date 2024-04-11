import React from 'react';
import { Link } from 'react-scroll';
import './App.css';
import resume from './resume.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="typing-text">Itai Raviv - DevOps Engineer</div>
        <nav>
          {/* Changed to buttons */}
          <Link activeClass="active" to="abouts" spy={true} smooth={true} offset={-70} duration={500}>
            <button>Abouts</button>
          </Link>
          <Link activeClass="active" to="resume" spy={true} smooth={true} offset={-70} duration={500}>
            <button>Resume</button>
          </Link>
          <Link activeClass="active" to="links" spy={true} smooth={true} offset={-70} duration={500}>
            <button>Links</button>
          </Link>
        </nav>
      </header>
      <main>
        <section id="abouts">
          <h2>Abouts</h2>
          <p> Welcome to my professional sphere! I’m a dedicated DevOps Engineer, deeply passionate about innovating within the realm of software deployment and operations. With a year of intensive experience under my belt, I’ve honed my skills in orchestrating containerized applications with Kubernetes, leveraging the expansive capabilities of AWS, and employing Terraform for infrastructure as code to ensure efficient and scalable cloud environments. My journey has also been enriched by a strong foundation in Linux, which underpins my work with a robust and versatile operating system understanding.

Beyond my core technical competencies, my fervor for technology extends to a constant quest for knowledge. The rapid evolution of the tech landscape inspires me to continuously explore and master new tools and technologies. This perpetual learning mindset not only fuels my professional growth but also enhances the value I bring to my team and projects.

Driven by a blend of expertise and curiosity, I aspire to contribute to transformative projects that push the boundaries of what's possible. Through this website, I look forward to sharing insights, experiences, and the myriad ways in which I contribute to the world of DevOps and beyond.

Thank you for visiting, and I am excited to navigate the future of technology together. </p>
        </section>
        <section id="resume">
          <h2>Resume</h2>
          <img src={resume} alt="Resume" className="resume-image" />
        </section>
        <section id="links">
          <h2>Links</h2>
          <p>Here are some important links.</p>
        </section>
      </main>
    </div>
  );
}

export default App;