import { FaArrowRightLong } from "react-icons/fa6";
import connectImage from "../../assets/connect.png";
import sectionBg from "../../assets/connect2.png";

const Connect = () => {
  return (
    <div className="py-16">
      {/* Main Content */}
      <div className="grid md:grid-cols-2 items-center md:gap-20 gap-5 text-[#333]">
        {/* Image Section */}
        <div className="max-w-[550px]">
          <img
            src={connectImage}
            className="w-full h-full rounded-lg"
            alt="Dining Experience"
          />
        </div>
        {/* Text Section */}
        <div className="max-md:order-1 text-center md:text-left">
          <h2 className="md:text-[48px] text-3xl md:leading-[50px] font-bold text-[#333] mb-4">
            Connect <br /> your tools, <br /> close your tabs
          </h2>
          <p className="mt-8 text-[18px] text-[#666] leading-relaxed">
            Whether you want to edit your Google Docs, resolve Jira issues, or
            collaborate over Zoom, Miro has 100+ integrations with tools you
            already use and love.
          </p>
          {/* Learn More Link */}
          <div className="mt-8 flex text-[18px]  max-sm:flex-col sm:space-x-4 max-sm:space-y-6">
            <a className="text-blue-600 underline" href="https://app.miro.com">
              Learn more <FaArrowRightLong className="inline ml-1 w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Background Image Section */}
      <div
        className="flex w-full my-10 justify-center"
        style={{
          backgroundImage: `url(${sectionBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="py-52 w-full flex items-center justify-end px-20">
          <div className="text-center mt-5">
            <h2 className="md:text-[22px] text-3xl md:leading-[50px] font-bold text-[#333]">
              The Ways We Work
            </h2>
            <p className="text-[18px] ">
              How has our relationship with work changed?
            </p>
            {/* Sign Up Button */}
            <button className="bg-[#007bff] mx-auto hover:bg-blue-700 mt-3 transition-all duration-300 px-6 text-white py-2.5 rounded-full text-base">
              Sign Up Free
              <FaArrowRightLong className="w-3 h-3 ml-1.5  inline" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
