import { FaArrowRightLong } from "react-icons/fa6";
import connectImage from "../../assets/connect.png";
import sectionBg from "../../assets/section.png";

const Connect = () => {
  return (
    <div className="mx-auto max-w-5xl max-md:max-w-md ">
      <div className="grid md:grid-cols-2 items-center md:gap-20  gap-5 font-[sans-serif] text-[#333] ">
        <div className="md:h-[450px]">
          <img
            src={connectImage}
            className="w-full h-full object-cover rounded-lg  "
            alt="Dining Experience"
          />
        </div>
        <div className="max-md:order-1 max-md:text-center">
          <h2 className="md:text-4xl text-3xl md:leading-10 font-extrabold text-[#333] mb-4">
            Connect your tools, close your tabs
          </h2>
          <p className="mt-4 text-base text-[#666] leading-relaxed">
            Whether you want to edit your Google Docs, resolve Jira issues, or
            collaborate over Zoom, Miro has 100+ integrations with tools you
            already use and love.
          </p>
          <div className="mt-5 flex max-sm:flex-col sm:space-x-4 max-sm:space-y-6">
            <a className="text-blue-600 underline" href="https://app.miro.com">
              Learn more <FaArrowRightLong className="inline ml-2 w-4 h-4 " />{" "}
            </a>
          </div>
        </div>
      </div>
      <div>
        <img src={sectionBg} alt="" />
      </div>
    </div>
  );
};

export default Connect;
