import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = (props) => {
  const { images } = props;
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleBodyClick = (event) => {
      const clickedElement = event.target;
      const imgElements = document.querySelectorAll(".img");

      if (clickedElement.classList.contains("img")) {
        imgElements.forEach((img) => img.classList.remove("open"));

        clickedElement.classList.add("open");

        let imageUrl = clickedElement.style.backgroundImage;
        imageUrl = imageUrl.slice(5, imageUrl.length - 2); 

        setSelectedImage(imageUrl); 
      } else {
        imgElements.forEach((img) => img.classList.remove("open"));
      }
    };

    document.body.addEventListener("click", handleBodyClick);

    // Cleanup event listener when the component unmounts
    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  return (
    <section className="navigation container">
      <div id="imgDisplay" className={`imgDisplay ${!selectedImage && 'hidden'}`}>
        {selectedImage && <img src={selectedImage} alt="img display" />}
      </div>
      <div className="wrapper" id="navigationWrapper">
        <div className="img_parent" id="img_parent">
          {images.map((image, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${require(`../assets/images/gallery/${image}`)})` }}
              className="img"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navigation;
