import { useState } from "react";
import workJpg from "../../assets/work.jpg.png";

const BuildWork = () => {
  const [active, setActive] = useState();
  //   console.log(active);

  const features = [
    {
      id: "1",
      name: "Brainstorming",
    },
    {
      id: "2",
      name: " Diagramming",
    },
    {
      id: "3",
      name: "  Meetings & Workshops",
    },
    {
      id: "4",
      name: " Scrum Events",
    },
    {
      id: "5",
      name: " Mapping",
    },
    {
      id: "6",
      name: "  Research &amp; Design",
    },
    {
      id: "7",
      name: " Strategic Planning",
    },
  ];
  return (
    <div>
      <div className="max-w-[1200px] mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="">
          <h2 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-[48px]">
            Built for the way you work
          </h2>
          <div className="mt-6 flex  gap-2 ">
            <div className="inline-flex flex-wrap gap-2   rounded-full  ">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActive(feature.name)}
                  className={`inline-flex items-center border justify-center 
                  ${
                    !active ? (feature.id === "1" ? "bg-gray-200" : "") : active
                  }  
                   rounded-full text-sm font-medium   transition-colors  ${
                     active === feature.name ? "bg-gray-200 " : ""
                   }  h-10 px-5 py-2`}
                >
                  {feature.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 md:flex justify-between gap-5 ">
          <div className="text-left mt-8 w-full md:w-1/3">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {active ? active : "Brainstorming"}
            </h3>
            <p className="mt-5 text-base leading-6 text-gray-500">
              Unleash creative ideas and build on them with the help of sticky
              notes, images, mind maps, videos, drawing capabilities — the list
              goes.
            </p>
            <a
              className="text-base leading-6 font-medium text-indigo-600 hover:text-indigo-500 mt-5 block"
              href="#"
            >
              Learn more →
            </a>
          </div>
          <div className=" w-full md:w-2/3">
            <img src={workJpg} alt="" />
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default BuildWork;
