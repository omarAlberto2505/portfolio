import { useRef, useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience/';
import Projects from './components/Projects';
import Contact from './components/Contact';
import DecadeSelector from './components/Ages/DecadeSelector';
import useHeaderHeight from './hooks/useHeaderHeight';
import useDecadeStore from './store/useDecadeStore';
import { profile, skills, experience, projects, contact, resumeUrl } from './data';

function App() {
  const headerRef = useRef<HTMLElement | null>(null);
  const headerHeight = useHeaderHeight(headerRef);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const selectedDecade = useDecadeStore((s) => s.decade);

  // keep html[data-theme] in sync with the selected decade
  useEffect(() => {
    const themeKey = `decade_${selectedDecade.replace(/-/g, '_')}`;
    document.documentElement.setAttribute('data-theme', themeKey);
  }, [selectedDecade]);

  return (
    <div>
      <Header ref={headerRef} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="app-grid">
        <DecadeSelector headerHeight={headerHeight} />
        <main>
          <Hero profile={profile} />
          <About profile={profile} />
          <Skills skills={skills} />
          <Experience experience={experience} />
          <Projects projects={projects} />
          <Contact contact={contact} resumeUrl={resumeUrl} />
        </main>
      </div>
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2026 Omar Alberto Murillo Moreno. Built for GitHub Pages.</p>
          <div className="footer-links">
            <a href="#home">Top</a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
