import ContactImg from "../../images/ContactImg.png";
import Pin from "../../images/ContactMapImg.svg";
import Phone from "../../images/ContactPhoneImg.svg";
import Mobile from "../../images/ContactMobileImg.svg";

function ContactUs() {
  return (
    <div className=" flex justify-center">
      <div className="bg-[#FFFFFF] lg:rounded-xl mt-20 mb-40 lg:w-[900px] h-[700px] xl:w-[1115px] xl:h-[747px] flex flex-row">
        <div className="text-[#1F1F1F] basis-1/2 text-base ">
          <div className="mt-24 ml-[75px] mr-[75px] space-y-9 ">
            <h1 className="texl-xl md:text-2xl lg:text-4xl font-bold">
              Contact us
            </h1>
            <span className="text-base flex flex-row items-center space-x-4">
              <img src={Pin} alt="MapPin" />
              <p>123 Prishtina St., Bremen</p>
            </span>
            <span className="flex flex-row items-center space-x-4">
              <img src={Phone} alt="MapPin" />
              <p>123 456 7890</p>
            </span>
            <span className="flex flex-row items-center space-x-4">
              <img src={Mobile} alt="MapPin" />
              <p>123 456 7891</p>
            </span>
            <div className="space-x-2 flex flex-wrap sm:flex-nowrap">
              <input
                name="name"
                placeholder="Name"
                className="bg-[#F4F4F4C2] w-40 h-10 sm:w-48 sm:h-12 pl-2"
              />
              <input
                name="email"
                placeholder="Email"
                className="bg-[#F4F4F4C2] w-40 h-10 sm:w-48 sm:h-12 pl-2"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your message here"
              className="w-[328px]  sm:w-[392px] h-[120px] bg-[#F4F4F4C2]"
            />
            <button className="w-[328px] h-12 sm:w-[392px] sm:h-12 bg-[#000000] text-[#FAFAFA]">
              Send
            </button>
          </div>
        </div>
        <div className="basis-1/2 my-auto ml-6 mr-6 hidden sm:block ">
          <img src={ContactImg} alt="ContactImg " />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
