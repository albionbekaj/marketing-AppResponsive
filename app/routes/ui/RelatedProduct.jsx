import productPic from "../../images/productPic.png";

function RelatedProduct() {
  return (
    <div className="mt-4 xl:mt-9">
      <div className="flex flex-col justify-center items-center">
        <div className="relative ">
          <img
            src={productPic}
            alt="pink"
            className="xl:w-[394px] xl:h-[394px] md:w-[250px] md:h-[250px] w-[200px] h-[200px] "
          />
          <button className="xl:w-[351px] xl:h-[47px] md:w-[230px] md:h-[42px] w-[180px] h-[38px] bg-[#FFFFFF] xl:text-base text-[#1B1B1B] absolute bottom-2 xl:bottom-3 inset-x-2 xl:inset-x-5">
            View Product
          </button>
        </div>
        <h1 className="text-base md:text-lg xl:text-xl font-bold mt-2">
          Product
        </h1>
        <p className="w-3/5 text-sm xl:text-base text-[#BABABA]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          quis rhoncus ex.
        </p>
        <h1 className="text-lg md:text-xl xl:text-2xl font-extrabold mt-2.5">
          6000$
        </h1>
      </div>
    </div>
  );
}

export default RelatedProduct;
