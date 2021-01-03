import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Long Nguyen via email @ nlhlong@protonmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <a href="mailto:nlhlong@protonmail.com">nlhlong@protonmail.com</a>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
