import { FiShoppingCart } from "react-icons/fi";

function ProductItem({ src, text }) {
  return (
    <div className=" px-3 ml-[-12px]">
      <img
        className="w-36 h-24 md:w-44 md:h-40 xl:w-56 xl:h-48   rounded-xl "
        src={src}
        alt="images"
      />
      <p className="text-black pt-3 text-xs md:text-[16px] ">{text}</p>
      <div className="flex flex-row mt-6 mb-6">
        <button className="bg-black  w-28 h-6 md:w-36 xl:w-40 xl:h-10  text-white text-xs sm:text-[17px] xl:text-xl">
          Zum Produkt
        </button>
        <span className="mt-1.5 sm:mt-1.5 xl:mt-3 ml-4">
          <FiShoppingCart />
        </span>
      </div>
    </div>
  );
}

export default ProductItem;
