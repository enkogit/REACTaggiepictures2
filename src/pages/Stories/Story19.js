import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Main from '../../layouts/Main';

const Story19 = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  const images = Array.from({ length: 12 }).map((_, idx) => `/images/stories/2410/AL/al${idx + 1}.jpeg`);

  return (
    <Main
      title="Gallery"
      description="Photograph gallery"
    >
      <article className="story">
        <header>
          <div className="title">
            <h2><Link to="/contact">Gallery</Link></h2>
          </div>
        </header>
        <div className="tile-container">
          {images.map((image) => (
            <div key={image} role="button" tabIndex={0} onClick={() => handleImageClick(image)} onKeyPress={() => handleImageClick(image)}>
              <img src={image} alt="" className="tile" />
            </div>
          ))}
        </div>
        {enlargedImage && (
          <div className="fullscreen-overlay" onClick={closeEnlargedImage}>
            <img src={enlargedImage} alt="" className="fullscreen-image" />
          </div>
        )}
      </article>
    </Main>
  );
};

export default Story19;
