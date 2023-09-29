import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/pricing.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      }).catch(console.error);
  });

  return (
    <Main
      title="Contact"
      description="Contact via email"
    >
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2><Link to="/contact">Contact</Link></h2>
          </div>
        </header>
        <div className="email-at">
          <p>Feel free to contact me
            <br /> 403 969 0333
          </p>
          <EmailLink />
          {/* <a href="/book/pay" target="_blank">BOOK NOW</a> */}
        </div>
        <Markdown>
          {markdown}
        </Markdown>
        <ContactIcons />
      </article>
    </Main>
  );
};

export default Contact;
