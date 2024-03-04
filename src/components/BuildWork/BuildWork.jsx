import { useState } from "react";
import workJpg from "../../assets/work.jpg.png";
import { FaArrowRightLong } from "react-icons/fa6";

const BuildWork = () => {
  const [active, setActive] = useState();
  console.log(active);

  const features = [
    {
      id: "1",
      name: "Brainstorming",
      description:"Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes."
    },
    {
      id: "2",
      name: "Diagramming",
      description:"Incorporate images to visually represent concepts, illustrate ideas, or provide inspiration. Images can add depth and context to your projects."
    },
    {
      id: "3",
      name: "Meetings & Workshops",
      description:"Create mind maps to visualize connections between ideas, topics, or concepts. Mind maps help organize thoughts and stimulate creative thinking."
    },
    {
      id: "4",
      name: "Scrum Events",
      description:"Integrate videos to convey complex information, tell stories, or showcase prototypes. Videos engage viewers and enhance communication."
    },
    {
      id: "5",
      name: "Mapping",
      description:"Utilize drawing capabilities to sketch diagrams, illustrate concepts, or annotate designs. Drawing tools offer flexibility and encourage creativity."
    },
    {
      id: "6",
      name: "Research & Design",
      description:"Incorporate images to visually represent concepts, illustrate ideas, or provide inspiration. Images can add depth and context to your projects."
    },
    {
      id: "7",
      name: "Strategic Planning",
      description:"Integrate videos to convey complex information, tell stories, or showcase prototypes. Videos engage viewers and enhance communication."
    },
  ];

  return (
    <div>
      <div className="py-20">
        {/* Title */}
        <div>
          <h2 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-[48px]">
            Built for the way you work
          </h2>
          {/* Feature Buttons */}
          <div className="mt-8 flex gap-2">
            <div className="inline-flex flex-wrap gap-2 rounded-full">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActive(feature.id)}
                  className={`inline-flex items-center border justify-center 
                  ${
                    !active ? (feature.id === "1" ? "bg-gray-200" : "") : active
                  }  
                   rounded-full text-sm font-medium   transition-colors  ${
                     active === feature.id ? "bg-gray-200 " : ""
                   }  h-10 px-5 py-2`}
                >
                  {feature.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Description */}
        <div className="mt-12 md:flex justify-between gap-5">
          <div className="text-left mt-8 w-full md:w-[360px]">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {active ? features[active - 1].name : features[0].name}
            </h3>
            <p className="mt-8 text-[18px] leading-6 text-gray-500">
            {active ? features[active - 1].description : features[0].description}
            </p>
            <a
              className="text-[18px] leading-6   text-indigo-600 hover:text-indigo-500 mt-8 block"
              href="#"
            >
              Learn More
              <FaArrowRightLong className="inline ml-1.5 w-3 h-3 " /> 
            </a>
          </div>
          {/* Image */}
          <div className="w-full pt-5 md:pt-0 flex justify-end md:w-[700px]">
            <img src={workJpg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildWork;
