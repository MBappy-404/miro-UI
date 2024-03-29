import { FaArrowRightLong } from "react-icons/fa6";
import team1 from "../../../assets/Team/team1.png";
import team2 from "../../../assets/Team/team2.png";
import team3 from "../../../assets/Team/team3.png";

const Testimonials = () => {
  return (
    <div>
      {/* Testimonials Section */}
      <div className="py-12">
        <div className="flex flex-col justify-center items-center">
          {/* Section Title */}
          <h2 className="text-3xl md:text-[48px] text-center font-bold">
            Loved by the worlds best teams
          </h2>
          {/* Button */}
          <button className="border border-blue-400 mt-10 text-blue-500  text-[18px] md:w-[25%] transition-all duration-300 px-4 py-2.5 rounded-full ml-0">
            See all customer stories
            <FaArrowRightLong className="w-3 h-3 ml-1.5 inline" />
          </button>
        </div>
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 mt-10 md:mt-20">
          {/* Testimonial 1 */}
          <div className="rounded-lg shadow-lg md:shadow-none py-5 text-center md:text-left w-full">
            {/* Testimonial Content */}
            <div className="p-0 mt-8 md:mt-5 lg:mt-0 ">
              <h3 className="text-3xl font-bold">vmware</h3>
              <p className="mt-8 text-[18px] text-gray-600">
                “When the pandemic hit, those of us who thrive on in-person
                collaboration were worried that our creativity and productivity
                would suffer. Miro was the perfect tool to help us with
                collaboration, whiteboarding, and retrospectives while remote.”
              </p>
              {/* Testimonial Author */}
              <div className="flex items-center justify-center md:justify-start text-left mt-4 pt-0 lg:pt-5">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                    <img src={team1} alt="" />
                  </span>
                </span>
                <div className="ml-4">
                  <p className="font-semibold">Roxanne Mustafa</p>
                  <p className="text-sm text-gray-500">
                    Design Team Lead at Vmware
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="rounded-lg shadow-lg md:shadow-none py-5 text-center md:text-left w-full">
            {/* Testimonial Content */}
            <div className="p-0 mt-8 md:mt-5 lg:mt-0 ">
              <h3 className="text-3xl font-bold">DocuSign</h3>
              <p className="mt-8 text-[18px] text-gray-600">
                “Miro helps solve one of the major gaps in product design: how
                to manage tasks across product designers whose projects are in
                different tools.”
              </p>
              {/* Testimonial Author */}
              <div className="flex items-center justify-center md:justify-start text-left pt-0 lg:pt-24 mt-5">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                    <img src={team2} alt="" />
                  </span>
                </span>
                <div className="ml-4">
                  <p className="font-semibold">Jane Ashley</p>
                  <p className="text-sm text-gray-500">
                    Head of Design at DocuSign
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="rounded-lg shadow-lg md:shadow-none py-5 text-center md:text-left w-full">
            {/* Testimonial Content */}
            <div className="p-0 mt-8 md:mt-5 lg:mt-0 ">
              <h3 className="text-3xl font-bold">frog</h3>
              <p className="mt-8 text-[18px] text-gray-600">
                “As we used Miro we moved from skepticism to belief to
                innovation, and now we have a tool that’s at the core of what we
                do and will continue to extend into the future.”
              </p>
              {/* Testimonial Author */}
              <div className="flex items-center justify-center md:justify-start text-left mt-5 pt-0 lg:pt-[70px]">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                    <img src={team3} alt="" />
                  </span>
                </span>
                <div className="ml-4">
                  <p className="font-semibold">Laura Baird</p>
                  <p className="text-sm text-gray-500">
                    Associate Design Director at frog
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
