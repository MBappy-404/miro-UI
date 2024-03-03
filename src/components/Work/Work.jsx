import { FaArrowRightLong } from "react-icons/fa6";
import workImage from "../../assets/hybridwork.png.png";

const Work = () => {
  return (
    <div >
      <div className="grid md:grid-cols-2 items-center md:gap-20  gap-5 font-[sans-serif] text-[#333] max-w-[1200px]  max-md:max-w-md mx-auto">
        <div className="max-md:order-1 max-md:text-center">
          <h2 className="md:text-[48px] text-3xl md:leading-10 font-bold text-[#333] mb-4">
          Work together, <br /> wherever you work
          </h2>
          <p className="mt-4 text-base text-[#666] leading-relaxed">
          In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.
          </p>
          <div className="mt-5 flex max-sm:flex-col sm:space-x-4 max-sm:space-y-6">
            <a className="text-blue-600 underline" href="https://app.miro.com">Learn more <FaArrowRightLong className="inline ml-2 w-4 h-4 "/> </a>
          </div>
        </div>
        <div className="md:h-[450px]">
          <img
            src={workImage}
            className="w-full h-full object-cover rounded-lg  "
            alt="Dining Experience"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
