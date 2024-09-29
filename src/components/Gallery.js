import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";

// Image paths

const Gallery = (props) => {
  const imagePaths = props.images;
  const [rows, setRows] = useState([[], [], []]);
  const containerRef = useRef(null);

  const rowWidthFunc = () => {
    const width = window.screen.width; // Corrected to window.screen.width
    if (width >= 1200) return 368.27;
    if (width >= 992) return 308.08;
    if (width >= 768) return 229.67;
    if (width >= 576) return 170.27;
    return 368.27; // Default value if none of the conditions match
  };

  useEffect(() => {
    const loadImage = (path) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = require(`../assets/images/gallery/${path}`);
        img.alt = `Gallery pic ${path}`;
        img.onload = () => resolve(img);
        img.onerror = (error) => reject(error);
      });
    };

    const arrangeImages = async () => {
      try {
        const images = await Promise.all(imagePaths.map(loadImage));
        const rowHeights = [0, 0, 0];
        const newRows = [[], [], []];

        images.forEach((img) => {
          const minRowIndex = rowHeights.indexOf(Math.min(...rowHeights));
          newRows[minRowIndex].push(img);
          const rowWidth = rowWidthFunc();
          const imgWidth = img.naturalWidth;
          const ratio = imgWidth / rowWidth;
          rowHeights[minRowIndex] += Math.round(img.naturalHeight / ratio);
        });

        setRows(newRows);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    arrangeImages();
  }, [imagePaths]); // Added imagePaths to the dependency array

  return (
    <section
      className="gallery container"
      ref={containerRef}
      id="gallerySection"
    >
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((img, imgIndex) => (
            <img
              key={imgIndex}
              src={img.src}
              alt={`Gallery pic ${rowIndex + 1}-${imgIndex + 1}`}
              className="p-1"
            />
          ))}
        </div>
      ))}
    </section>
  );
};

export default Gallery;
