import { useRef, useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience/';
import Projects from './components/Projects';
import Contact from './components/Contact';
import DecadeSelector from './components/Ages/DecadeSelector';
import Footer from './components/Footer';
import useHeaderHeight from './hooks/useHeaderHeight';
import useDecadeStore from './store/useDecadeStore';
import { profile, skills, experience, projects, contact, resumeUrl } from './data';
import { preload } from 'react-dom';
import bg1920 from './assets/1920-background.png';
import bg1940 from './assets/1940-background.png';
import bg1960 from './assets/1960-background.png';
import bg1980 from './assets/1980-background.png';
import bg2000 from './assets/2000-background.png';
import bg2020 from './assets/2020-background.png';
import bg2030 from './assets/2030-background.png';


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
  const decadeBackground = selectedDecade === '1920-1930'
    ? bg1920
    : selectedDecade === '1940-1950'
      ? bg1940
      : selectedDecade === '1960-1970'
        ? bg1960
        : selectedDecade === '1980-1990'
          ? bg1980
          : selectedDecade === '2000-2010'
            ? bg2000
            : selectedDecade === '2020'
              ? bg2020
              : bg2030;

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
      <Footer profile={profile} backgroundImage={decadeBackground} />
    </div>
  );
}

export default App;
