import React from "react";
import CarouselSelect from "./CarouselSelect";
import "./Carousel.scss";

function Carousel() {
  return (
    <>
      <div className="CarouselDesktop">
        <CarouselSelect types="breakfast" />
        <CarouselSelect types="dinner" />
        <CarouselSelect types="teatime" />
      </div>
      <div className="CarouselMobile">
        <CarouselSelect types="lunch" />
      </div>
    </>
  );
}

export default Carousel;