import { useEffect, useRef, useState } from 'react';
import { preload } from 'react-dom';
import bg1920 from './assets/1920-background.webp';
import bg1940 from './assets/1940-background.webp';
import bg1960 from './assets/1960-background.webp';
import bg1980 from './assets/1980-background.webp';
import bg2000 from './assets/2000-background.webp';
import bg2020 from './assets/2020-background.webp';
import bg2030 from './assets/2030-background.webp';
import About from './components/About';
import DecadeSelector from './components/Ages/DecadeSelector';
import Contact from './components/Contact';
import Experience from './components/Experience/';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { contact, experience, profile, projects } from './data';
import useHeaderHeight from './hooks/useHeaderHeight';
import useDecadeStore from './store/useDecadeStore';


function App() {

  preload(bg1920, { as: 'image' });
  preload(bg1940, { as: 'image' });
  preload(bg1960, { as: 'image' });
  preload(bg1980, { as: 'image' });
  preload(bg2000, { as: 'image' });
  preload(bg2020, { as: 'image' });
  preload(bg2030, { as: 'image' });

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
          <Skills />
          <Experience experience={experience} />
          <Projects projects={projects} />
          <Contact contact={contact} resumeUrl={"../Omars Resume.pdf"} />
        </main>
      </div>
      <Footer profile={profile} />
    </div>
  );
}

export default App;
