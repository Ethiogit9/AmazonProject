// import React from 'react'

import Category from "../../Components/category/Category";
import Product from "../../Components/product/Product";
import Header from "../../Components/header/Header";
import CarouselEffect from "../../Components/carousel/CarouselEffect";

const Landing = () => {
  return (
    <div>
      <Header />
      <CarouselEffect />
      <Category />
      <Product />
    </div>
  );
};

export default Landing;
