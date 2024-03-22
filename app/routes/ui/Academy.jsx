import footerImg1 from "../../images/footerImg.png";
import footerImg2 from "../../images/footerImg2.png";

function Academy() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 md:mt-16 xl:mt-24">
      <h1 className="text-lg sm:text-xl md:text-2xl xl:text-3xl mb-4 text-[#3D3D3D]">
        solution25 academy
      </h1>
      <p className="text-sm md:text-base xl:text-lg w-1/2 text-center mb-4 lg:mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="ml-14 mr-14 flex flex-row flex-wrap sm:flex-nowrap sm:space-x-2 sm:space-y-0 space-y-1 items-center justify-center">
        <img
          src={footerImg1}
          alt="footer1"
          className="lg:w-96 lg:h-64 md:w-72 md:h-48 w-56 h-36"
        />
        <img
          src={footerImg2}
          alt="footer2"
          className="lg:w-96 lg:h-64 md:w-72 md:h-48 w-56 h-36"
        />
      </div>
    </div>
  );
}

export default Academy;
