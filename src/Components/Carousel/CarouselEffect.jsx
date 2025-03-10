// import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./carousel.module.css";
import { Carousel } from "react-responsive-carousel";
import { dataImage } from "./images/data";

const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
      >
        {dataImage.map((image, index) => (
          <img src={image} alt="" key={index} />
        ))}
      </Carousel>
      <div className={classes.hero__img}></div>
    </div>
  );
};

export default CarouselEffect;
