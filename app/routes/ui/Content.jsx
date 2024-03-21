import laptop from "../../images/laptop.png";
import bg1 from "../../images/bg1.png";
import bg2 from "../../images/bg2.png";
import bg3 from "../../images/bg3.png";
import icon1 from "../../images/icon1.svg";
import icon2 from "../../images/icon2.svg";
import icon3 from "../../images/icon3.svg";
import ProductItem from "./ProductItem";
import WhyProducts from "./WhyProducts";

const whyProducts = [
  {
    icon: icon1,
  },
  {
    icon: icon2,
  },
  {
    icon: icon3,
  },
];

const products = [
  {
    src: bg1,
    text: "Red and orange color",
  },
  {
    src: bg2,
    text: "Black and green color",
  },
  {
    src: bg3,
    text: "Black and red color",
  },
  {
    src: bg1,
    text: "Red and orange color",
  },
  {
    src: bg2,
    text: "Black and green color",
  },
  {
    src: bg3,
    text: "Black and red color",
  },
];

function Content() {
  return (
    <div className=" ">
      <div className="ml-14 md:ml-18 mt-5 md:mt-10  flex flex-col sm:flex-row md:flex-row lg:flex-row">
        <div className="">
          <img
            src={laptop}
            alt="laptop"
            className="sm:w-[350px] w-[200px] xl:w-[400px] "
          />
        </div>
        <div className="w-11/12 sm:w-1/2 ml-0 sm:ml-6 lg:ml-24 ">
          <h1 className="my-4 font-bold md:text-2xl xl:text-3xl text-lg">
            solution25 academy
          </h1>
          <p className="text-xs md:text-sm lg:text-base xl:text-lg text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
            <br />
            <br />
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
            <br />
            <br />
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry’s standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
            <br />
            <br />
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
            <br />
            <br />
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
      <div className="ml-14 mr-14 md:ml-18 flex flex-col  ">
        <h1 className="mt-7  md:mt-14 md:text-xl xl:text-3xl font-bold text-base ">
          This is a design for the academy
        </h1>
        <div className="flex flex-wrap items-center justify-center 2xl:justify-between sm:justify-start mt-4 md:flex-nowrap verflow-clip overflow-x-scroll ">
          {products.map((product, index) => (
            <ProductItem key={index} src={product.src} text={product.text} />
          ))}
        </div>
      </div>
      <div className="sm:flex min-h-fit sm:mr-14 sm:h-56 w-full bg-[#F4F4F4] pt-8 pb-8 sm:pt-0 sm:mt-6 items-center justify-center">
        <h1 className="text-lg lg:text-xl xl:text-3xl text-[#3D3D3D]  sm:ml-14 flex items-center justify-center">
          Why Our Products?
        </h1>
        <div className="sm:flex mx-auto  w-2/4 text-xs  text-center sm:space-x-8">
          {whyProducts.map((product, index) => (
            <WhyProducts key={index} icon={product.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
