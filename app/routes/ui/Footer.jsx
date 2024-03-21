import facebook from "../../images/facebookLogo.svg";
import twitter from "../../images/twitterLogo.svg";
import linkedin from "../../images/linkedinLogo.svg";
import youtube from "../../images/youtubeLogo.svg";
import phone from "../../images/phoneLogo.svg";

function Footer() {
  return (
    <div className="h-[504px] flex  items-center justify-center ">
      <div className=" flex flex-row flex-wrap sm:flex-nowrap items-center justify-center">
        <div className=" mt-5 basis-3/6 flex flex-col items-center justify-center ">
          <h1 className="text-xl md:text-2xl lg:text-4xl text-[#3D3D3D]">
            solution25 academy
          </h1>
          <p className="w-2/3 text-sm md:text-base mt-4 lg:text-lg text-[#737373]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-row mx-14 sm:mx-0 space-x-2 mt-10">
            <a href="https://facebook.com" target="">
              <span className="bg-black flex items-center justify-center w-10 h-10 rounded-full">
                <img src={facebook} alt="fbLogo" />
              </span>
            </a>
            <a href="https://twitter.com" target="">
              <span className="bg-black flex items-center justify-center w-10 h-10 rounded-full">
                <img src={twitter} alt="twitterLogo" />
              </span>
            </a>
            <a href="https://linkedin.com" target="">
              <span className="bg-black flex items-center justify-center w-10 h-10 rounded-full">
                <img src={linkedin} alt="linkedinLogo" />
              </span>
            </a>
            <a href="https://youtube.com" target="">
              <span className="bg-black flex items-center justify-center w-10 h-10 rounded-full">
                <img src={youtube} alt="youtubeLogo" />
              </span>
            </a>
            <a href="https://phone.com" target="">
              <span className="bg-black flex items-center justify-center w-10 h-10 rounded-full">
                <img src={phone} alt="phoneLogo" />
              </span>
            </a>
          </div>
        </div>
        <div className="mt-10 sm:mt-5  ml-14 sm:ml-16 mr-14 basis-3/6 flex flex-row space-x-14">
          <div>
            <h1 className="text-base md:text-xl lg:text-2xl mb-2">Products</h1>
            <ul className="space-y-2 text-sm md:text-base lg:text-lg">
              <li>Product 1</li>
              <li>Product 2</li>
              <li>Product 3</li>
              <li>Product 4</li>
            </ul>
          </div>
          <div>
            <h1 className="text-base md:text-xl lg:text-2xl mb-2">Services</h1>
            <ul className="space-y-2 text-sm md:text-base lg:text-lg">
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
              <li>Service 4</li>
            </ul>
          </div>
          <div>
            <h1 className="text-base md:text-xl lg:text-2xl mb-2">Resources</h1>
            <ul className="space-y-2 text-sm md:text-base lg:text-lg">
              <li>News</li>
              <li>Blogs</li>
              <li>Videos</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
