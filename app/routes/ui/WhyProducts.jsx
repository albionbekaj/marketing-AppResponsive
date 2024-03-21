function WhyProducts({ icon }) {
  return (
    <div>
      <span className="flex flex-col items-center pt-6 sm:pt-0">
        <span className="bg-blue-500 flex items-center justify-center w-10 h-10 rounded-full">
          <img src={icon} alt="icon1" />
        </span>
        <p className="pt-4 xl:text-base text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
      </span>
    </div>
  );
}

export default WhyProducts;
