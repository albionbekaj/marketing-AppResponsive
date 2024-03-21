import photo from "../../images/bg1.png";
import BlogDetails from "./BlogDetails";

function Blog() {
  return (
    <div className=" ml-14 mt-10 mr-14 ">
      <h1 className="xl:text-4xl md:text-3xl text-xl">Blog</h1>
      <div className="flex sm:flex-row flex-wrap justify-center sm:justify-start xl:justify-between  sm:space-x-2 mx-auto ">
        <div className="w-48 h-[300px] md:w-[227px] md:h-[351px] xl:w-[327px] xl:h-[421px] flex flex-col  mt-4 pt-2 text-left bg-[#ffffff]">
          <img
            src={photo}
            alt="bg"
            className="w-44 h-24 md:w-[195px] md:h-[140px] xl:w-[295px] xl:h-[207px] mx-auto"
          />
          <h1 className="xl:text-2xl p-2 md:pl-3.5 xl:pl-4  text-[#000000] text-sm">
            5 tips how to make User Flow in a short time
          </h1>
          <p className=" text-sm xl:text-lg p-2 md:pl-3.5 xl:pl-4 text-[#00000091]">
            Et vel ornare fusce bibendum cras et odio cras. Nunc nullam
            ultricies.
          </p>
          <div className="pt-2 flex flex-row">
            <span className="bg-[#CBCBCB] w-[30px] h-[30px] xl:w-[44px] xl:h-[44px] ml-2 md:ml-3.5 xl:ml-4  rounded-full"></span>
            <div className="xl:ml-3 ml-2 flex flex-col text-xs xl:text-sm">
              <p>John Doe</p>
              <p>Senior UI/UX Designer</p>
            </div>
          </div>
        </div>
        <BlogDetails />
        <BlogDetails />
        <BlogDetails />
      </div>
    </div>
  );
}

export default Blog;
