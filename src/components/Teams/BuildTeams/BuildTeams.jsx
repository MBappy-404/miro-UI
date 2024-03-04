import { useState } from "react";
import workJpg from "../../../assets/team.png";
import tools1 from "../../../assets/Vector.png";
import tools2 from "../../../assets/Vector (1).png";
import tools3 from "../../../assets/Vector (2).png";
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";

const BuildTeams = () => {
  // State for active feature
  const [active, setActive] = useState();

  // Features array
  const features = [
    {
        id: "1",
        name: "UX & Design",
        description: ["Build low-fi wireframes", "Involve stakeholders in the design process" ,"Run engaging design workshops"]
    },
    {
        id: "2",
        name: "Marketing",
        description: ["Develop strategic marketing" ," Utilize analytics and data-driven" ,"insights to optimize marketing efforts."]
    },
    {
        id: "3",
        name: "Product Management",
        description: ["Lead product development initiatives",  "and prioritize feature enhancements", "Collaborate with cross-functional teams."]
    },
    {
        id: "4",
        name: "Engineering",
        description: ["Leverage technical expertise", " build scalable  software solutions", "Follow best practices in coding."]
    },
    {
        id: "5",
        name: "Consultants",
        description: ["Provide expert advice and guidance", "various business challenges", "driving business growth and success."]
    },
    {
        id: "6",
        name: "Agile Coaches",
        description: ["improve collaboration and efficiency", "Guide teams in adopting agile principles and continuous improvement."]
    },
    {
        id: "7",
        name: "Sales",
        description: ["Drive revenue growth and business","effective sales strategies and techniques", "Build strong client relationships"]
    }
]

console.log(features);



  return (
    <div>
      {/* Section for building teams */}
      <div className="py-10">
        <div className="">
          {/* Header */}
          <h2 className="text-3xl tracking-tight font-bold text-gray-900 md:text-[48px]">
            Built for all kinds of teams
          </h2>
          {/* Features section */}
          <div className="mt-8 flex gap-2">
            <div className="inline-flex flex-wrap gap-2 md:gap-3 lg:gap-2 rounded-full">
              {/* Mapping features to buttons */}
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActive(feature.id)}
                  className={`inline-flex items-center border justify-center 
                  ${!active ? (feature.id === "1" ? "bg-gray-200" : "") : active}  
                   rounded-full text-sm font-medium   transition-colors  ${
                    active === feature.id ? "bg-gray-200 " : ""
                  }  h-10 px-4 py-2`}
                >
                  {feature.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Content section */}
        <div className="mt-12 md:flex justify-between gap-5">
          <div className="text-left text-[17.5px] mt-5 md:mt-3 w-full md:w-1/3">
            {/* List of features */}
            <ul className="mt-5 leading-8 text-gray-500">
              
              {active ? features[active - 1].description.map(item=><li key={item}>
                <FaCheck className="inline w-4 h-4 mr-3" />
                {item}
              </li>) :
              
              features[0].description.map(item=><li key={item}>
                <FaCheck className="inline w-4 h-4 mr-3" />
                {item}
              </li>)}
               
            </ul>
            {/* Learn more link */}
            <a
              className="text-[18px] leading-6   text-indigo-600 hover:text-indigo-500 mt-5 block"
              href="#"
            >
              Learn more  
              <FaArrowRightLong className="inline ml-1.5 w-3 h-3 " /> 
            </a>
            {/* Integration with tools */}
            <div className="mt-16">
              <p className="text-[18px] text-gray-500">Integrate your favorite tools</p>
              <div className="flex justify-start gap-5 mt-6">
                <img src={tools1} alt="" />
                <img src={tools2} alt="" />
                <img src={tools3} alt="" />
                <img src={tools1} alt="" />
              </div>
            </div>
          </div>
          {/* Image section */}
          <div className="w-full mt-6 md:mt-0 flex justify-end md:w-2/3">
            <img src={workJpg} className="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildTeams;
