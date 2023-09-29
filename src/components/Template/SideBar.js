import React from 'react';
// import { Link } from 'react-router-dom';
// import Personal from '../Stats/Personal';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    {/* <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/avatar.jpg`} style={{ paddingLeft: '5px' }} alt="" />
      </Link>
    </section> */}
    <section className="blurb">
      <p>Hi, I&apos;m Aggie.</p>
      {/* <Personal /> */}
    </section>
    <section id="footer">
      <p className="copyright">&copy;aggie.pictures &apos;</p>
    </section>
  </section>
);

export default SideBar;
