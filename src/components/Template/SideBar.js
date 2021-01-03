import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <header>
        <h2>Long Nguyen</h2>
        <p><a href="mailto:nlhlong@protonmail.com">nlhlong@protonmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Long 👋. I&apos;m an ex-Autodesk software engineer intern,
        now aspired Front-end Software Engineer 👨‍💻.
        I like making interactive visual client-side applications using ReactJS,
        or maintaining large-scale projects using TypeScript ☕.
        I have a dream of architecting a complex performant application which has a positive impact
        on the lives of many people 🐱‍🏍.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Michael D&apos;Angelo <a href="https://mldangelo.com/">mldangelo.com</a>.</p>
    </section>
  </section>
);

export default SideBar;
