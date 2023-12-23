import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function CarouselCont({ images }) {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      interval={3000}
      showArrows={false}
      showStatus={false}
      className="min-[1000px]:w-[1000px]"
    >
      {images.map((e, i) => (
        <div key={i}>
          <img src={e} alt="Slide 1" />
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselCont;
