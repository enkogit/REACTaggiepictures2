import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const Index = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/about.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      }).catch(console.error);
  });

  const count = markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <Main
      title="Aggie Photography"
      description="Aggie: Professional photographer based in Calgary. Capturing moments with a unique touch. Book now for a memorable photoshoot experience"
    >
      <article className="post markdown" id="about">
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Column 1 - Existing header content */}
          <div className="title">
            <h2><Link to="/stories">Hi I&apos;m AGGIE - PHOTOGRAPHER</Link></h2>
            <p>(about me in {count} words)</p>
          </div>

          {/* Column 2 - Image */}
          <div>
            <img src="/images/profile/aggie.jpeg" alt="Aggie's Profile" />
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    </Main>
  );
};

export default Index;
