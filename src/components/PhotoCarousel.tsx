import React, { useState, useEffect } from "react";
import { Carousel, Button } from "react-bootstrap";

interface PhotoCarouselProps {
  images: string[];
  interval?: number;
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ images, interval = 4000 }) => {
  const [paused, setPaused] = useState(false);
  const [index, setIndex] = useState(0);

  const togglePause = () => setPaused(!paused);

  useEffect(() => {
    if (!paused) {
      const timer = setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, interval);
      return () => clearTimeout(timer);
    }
  }, [index, paused, interval, images.length]);

  return (
    <div>
      <Carousel activeIndex={index} onSelect={(i) => setIndex(i)} controls indicators fade interval={null}>
        {images.map((img, i) => (
          <Carousel.Item key={i} style={{ maxHeight: "80vh", overflow: "hidden" }}>
            <img
              className="d-block w-100"
              src={img}
              alt={`Slide ${i + 1}`}
              style={{ height: "auto", maxHeight: "80vh", objectFit: "contain", margin: "0 auto" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Button onClick={togglePause} className="mt-2">
        {paused ? "Riprendi" : "Pausa"}
      </Button>
    </div>
  );
};

export default PhotoCarousel;
