import { FaArrowRightLong } from "react-icons/fa6";
import BannerBg from "../../assets/Banner.png.png";
import log1 from "../../assets/companies/cisco.svg.png";
import log2 from "../../assets/companies/deloitte.svg.png";
import log3 from "../../assets/companies/okta.svg.png";
import log4 from "../../assets/companies/Volvo_Index_Only.svg.png";
import log5 from "../../assets/companies/Walmart_Index_Only.svg.png";

const Banner = () => {
  return (
    <div>
      <div className="font-sans text-[#333] max-w-[1200px] px-2 max-md:max-w-md mx-auto">
        <div className="grid md:grid-cols-2 items-center px-5 gap-6">
          {/* LEFT SIDE TEXT  */}

          <div className=" ">
            <h2 className="md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]">
              Take ideas from <br /> better to best
            </h2>
            <p className="mt-4 text-base text-gray-500 w-full md:w-80 leading-relaxed">
              Miro is your teams visual platform to connect, collaborate, and
              create — together.
            </p>
            <div className="w-full md:w-[70%]">
              <div className="bg-white border border-gray-300 mt-10 flex px-1 py-1.5 rounded-full shadow-[0_5px_22px_-8px_rgba(93,96,127,0.2)] overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="w-full outline-none bg-white pl-4 py-1.5 text-sm"
                />
              </div>
              <button className="bg-[#007bff] hover:bg-blue-700 mt-3 w-full transition-all duration-300 text-white px-4 py-3 rounded-full text-sm ml-0">
                Sign Up Free
                <FaArrowRightLong className="w-3  h-3 ml-1.5 inline" />
              </button>
            </div>
            <div className="flex items-center mt-2">
              <p className="text-base ml-3 text-gray-400">
                Collaborate with your team within minutes
              </p>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE  */}

          <div className="p-2">
            <img
              src={BannerBg}
              className="w-full h-full object-contain shadow-[0_2px_22px_-10px_rgba(93,96,127,0.2)]"
              alt="Dining Experience"
            />
          </div>
        </div>

        {/* COMPANIES  */}

        <div>
            <p className="text-base mt-5 md:mt-10 text-gray-400 text-center">Trusted by 45M+ users</p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-0  mx-auto   items-center">
            <img src={log5} className="mx-auto  w-28" alt="google-logo" />
            <img src={log4} className="mx-auto  w-12" alt="google-logo" />
            <img src={log3} className="mx-auto  w-16" alt="google-logo" />
            <img src={log2} className="mx-auto  w-56" alt="google-logo" />
            <img src={log1} className="mx-auto  w-56" alt="google-logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
