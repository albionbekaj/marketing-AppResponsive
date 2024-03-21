import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import { AiOutlineUser } from "react-icons/ai";
// import { IoIosSearch } from "react-icons/io";
// import { FiShoppingCart } from "react-icons/fi";
import CarouselSwipe from "./Carousel";
import Content from "./Content";
import Blog from "./Blog";
import Navigation from "./Navigation";
import Academy from "./Academy";
import Footer from "./Footer";

function Main() {
  return (
    <div className="relative bg-[#fbfbfb]">
      {/* <div className="absolute top-[35px] lg:right-20 md:right-10 right-5 z-10 ">
        <ul className="flex lg:space-x-8 space-x-4 ">
          <li className="text-white font-poppins font-bold flex text-[37px] items-center lg:pr-28 md:pr-20 pr-16">
            LOGO
          </li>
          <li className="text-white">Home</li>
          <li className="text-white">Product</li>
          <li className="text-white">Solutions</li>
          <li className="text-white">About</li>
          <li className="text-white">Contact</li>
          <li className="text-white flex items-center space-x-4 pl-10 lg:pr-14 pr-10">
            <AiOutlineUser />
            <IoIosSearch />
            <FiShoppingCart />
          </li>
        </ul>
      </div> */}
      <Navigation />
      <CarouselSwipe />
      <Content />
      <Blog />
      <Academy />
      <Footer />
    </div>
  );
}

export default Main;
