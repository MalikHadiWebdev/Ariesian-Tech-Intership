import React, { useState } from "react";
import Gallery from "../../components/Gallery";
import { Button } from "react-bootstrap";
import Navigation from "../../components/Navigation";

const Task1 = () => {
  const images = [
    "1.png",
    "2.png",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.png",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.png",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.png",
    "18.jpg",
    "19.jpg",
    "20.jpg",
    "21.png",
    "22.png",
  ];
  const [isGalleryMode, setIsGalleryMode] = useState(true);
  const handleToggleMode = () => {
    setIsGalleryMode(!isGalleryMode);
  };
  return (
    <>
      <Button
        style={{ width: "200px" }}
        className="mx-auto w-25 mt-4 mb-4 bg-hover"
        variant="outline-dark"
        onClick={handleToggleMode}
      >
        {isGalleryMode ? "View Navigation Mode" : "View Gallery Mode"}
      </Button>{" "}
      {isGalleryMode ? (
        <Gallery images={images} />
      ) : (
        <Navigation images={images} />
      )}
    </>
  );
};

export default Task1;
