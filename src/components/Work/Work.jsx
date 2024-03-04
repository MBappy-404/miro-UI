import { FaArrowRightLong } from "react-icons/fa6";
import workImage from "../../assets/hybridwork.png.png";

const Work = () => {
  return (
    <div>
      {/* Main Content */}
      <div className="grid md:grid-cols-2 items-center gap-5 py-10 text-[#333]">
        {/* Text Content */}
        <div className="max-md:order-1 text-center md:text-left">
          <h2 className="md:text-[48px] text-3xl md:leading-[50px] font-bold text-[#333] mb-4">
            Work together, <br /> wherever you work
          </h2>
          <p className="mt-8 text-[18px] w-full md:w-[90%] text-[#666] leading-relaxed">
            In the office, remote, or a mix of the two, with Miro, your team can
            connect, collaborate, and co-create in one space no matter where you
            are.
          </p>
          {/* Call to Action */}
          <div className="mt-8 flex max-sm:flex-col sm:space-x-4 max-sm:space-y-6">
            <a className="text-blue-600 text-[18px] underline" href="https://app.miro.com">
              Learn more <FaArrowRightLong className="inline ml-1 w-3 h-3 " /> 
            </a>
          </div>
        </div>
        {/* Image */}
        <div className="md:h-[450px]">
          <img
            src={workImage}
            className="w-full h-full object-cover rounded-lg"
            alt="Dining Experience"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
