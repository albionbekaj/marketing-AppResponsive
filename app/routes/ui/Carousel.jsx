import background from "../../images/background.png";
import { Carousel } from "react-responsive-carousel";

function CarouselSwipe() {
  return (
    <div className="relative ">
      <Carousel
        autoPlay
        interval={3000}
        transitionTime={3000}
        showThumbs={false}
        infiniteLoop
      >
        <div>
          <img src={background} alt="background" className="bg-cover " />
        </div>
        <div>
          <img src={background} alt="background" className="bg-cover" />
        </div>
        <div>
          <img src={background} alt="background" className="bg-cover" />
        </div>
      </Carousel>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white mx-8 pt-10">
        <h1 className="xl:text-6xl lg:text-4xl md:text-2xl text-sm sm:w-1/2 w-full text-center font-bold  ">
          Mockup to empower your creative workflow
        </h1>
        <div className="pt-4">
          <p className="sm:w-7/12  w-full text-center mx-auto lg:text-base text-xs ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-4 space-x-2 text-black text-xs lg:text-base xl:text-[22px]">
          <button className="rounded-none bg-white w-[82px] h-[23px] md:w-[102px] md:h-[30px] lg:w-[162px] lg:h-[38px] xl:w-[202px] xl:h-[68px] ">
            Lorem Ipsum
          </button>
          <button className="rounded-none bg-white w-[82px] h-[23px] md:w-[102px] md:h-[30px] lg:w-[162px] lg:h-[38px] xl:w-[202px] xl:h-[68px]">
            Lorem Ipsum
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarouselSwipe;
