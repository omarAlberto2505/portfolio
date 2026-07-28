import { forwardRef, type Dispatch, type ForwardedRef, type SetStateAction } from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Header = forwardRef(function Header(
  { menuOpen, setMenuOpen }: HeaderProps,
  ref: ForwardedRef<HTMLElement>,
) {
  return (
    <header className={styles.siteHeader} ref={ref}>
      <div className={clsx('container', styles.headerInner)}>
        <a className={styles.logo} href="#home">
          Omar Alberto Murillo Moreno
        </a>
        <nav className={clsx(styles.nav, menuOpen && styles.open)} id="nav-menu">
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
        <button
          className={styles.menuToggle}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((current) => !current)}
        >
          ☰
        </button>
      </div>
    </header>
  );
});

export default Header;
