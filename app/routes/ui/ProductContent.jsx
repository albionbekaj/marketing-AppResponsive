import { useState } from "react";
import productPic from "../../images/productPic.png";

function ProductContent() {
  const [count, setCount] = useState(1);

  function handleInc() {
    setCount(count + 1);
  }

  function handleDec() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="mt-4 sm:ml-36 sm:mr-10 flex flex-row flex-wrap  justify-center sm:flex-nowrap ">
      <div>
        <img
          src={productPic}
          alt="pink&blue"
          className="xl:w-[622px] xl:h-[376px]  sm:w-[382px] sm:h-[286px]  w-72 h-44"
        />
        <div className="flex flex-row mt-4 xl:space-x-8 md:space-x-4 space-x-2">
          <img
            src={productPic}
            alt="pink&blue"
            className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] xl:w-[98px] xl:h-[98px]"
          />
          <img
            src={productPic}
            alt="pink&blue"
            className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] xl:w-[98px] xl:h-[98px]"
          />
          <img
            src={productPic}
            alt="pink&blue"
            className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] xl:w-[98px] xl:h-[98px]"
          />
          <img
            src={productPic}
            alt="pink&blue"
            className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] xl:w-[98px] xl:h-[98px]"
          />
        </div>
      </div>
      <div className="flex flex-col w-2/4 ml-10 ">
        <h1 className="text-xs mt-3">Pink and blue color</h1>
        <h1 className="text-xl xl:text-2xl mb-4 font-bold">
          Lorem ipsum dolor sit amet, adipiscing
        </h1>
        <h1 className="text-xl xl:text-2xl font-extrabold">45.00$</h1>
        <p className="text-sm xl:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
          ultrices eros in cursus turpis massa pretium.
        </p>
        <p className="text-sm md:text-base mt-4">Quantity</p>
        <div className="lg:w-[130px] lg:h-[49px] md:w-20 md:h-8 w-16 h-8 bg-white flex justify-evenly 2xl:mt-2 items-center">
          <button
            className="text-sm md:text-xl 2xl:text-4xl"
            onClick={handleDec}
          >
            -
          </button>
          <span className="text-xl">{count}</span>
          <button
            className="text-sm md:text-xl 2xl:text-4xl"
            onClick={handleInc}
          >
            +
          </button>
        </div>
        <button className="bg-[#0054CB] 2xl:w-[530px] 2xl:h-[49px] xl:w-[220px] xl:h-[49x] h-8 mt-4">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default ProductContent;
