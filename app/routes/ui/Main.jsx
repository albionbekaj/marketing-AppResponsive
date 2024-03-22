import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselSwipe from "./Carousel";
import Content from "./Content";
import Blog from "./Blog";
import Academy from "./Academy";
import Footer from "./Footer";
import Header from "./Header";

function Main() {
  return (
    <div className="relative bg-[#fbfbfb]">
      <div className="bg-transparent">
        <Header />
      </div>
      <CarouselSwipe />
      <Content />
      <Blog />
      <Academy />
      <Footer />
    </div>
  );
}

export default Main;
