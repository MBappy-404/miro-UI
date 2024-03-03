import { useState } from "react";
import workJpg from "../../../assets/team.png";
import tools1 from "../../../assets/Vector.png";
import tools2 from "../../../assets/Vector (1).png";
import tools3 from "../../../assets/Vector (2).png";
import { FaCheck } from "react-icons/fa6";

const BuildTeams = () => {
  const [active, setActive] = useState();
//   console.log(active);

  const features = [
    {
      id: "1",
      name: "UX & Design",
    },
    {
      id: "2",
      name: " Marketing",
    },
    {
      id: "3",
      name: "Product Management",
    },
    {
      id: "4",
      name: "Engineering",
    },
    {
      id: "5",
      name: "Consultants",
    },
    {
      id: "6",
      name: "Agile Coaches",
    },
    {
      id: "7",
      name: "Sales",
    },
  ];
  return (
    <div>
      <div className="max-w-[1200px]  mx-auto py-10 sm:px-6  ">
        <div className="">
          <h2 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-[48px]">
          Built for all kinds of teams
          </h2>
          <div className="mt-8 flex  gap-2 ">
            <div   className="inline-flex  flex-wrap gap-2 md:gap-3 lg:gap-2 rounded-full  ">
            {features.map((feature) => (
                <button key={feature.id}
                  onClick={() => setActive(feature.name)}
                  className={`inline-flex items-center border justify-center 
                  ${!active ? feature.id === '1' ? "bg-gray-200" : "" : active}  
                   rounded-full text-sm font-medium   transition-colors  ${
                    active === feature.name ? "bg-gray-200 " : "" }  h-10 px-4 py-2`}
                >
                  {feature.name}
                </button>
            ))}
            </div>
          </div>
        </div>
        <div className="mt-12 md:flex justify-between gap-5 ">
          <div className="text-left  text-[18px]  mt-8 w-full md:w-1/3">
            
            <ul className="mt-5 leading-8 text-gray-500">
               <li> <FaCheck className="inline w-3 h-3 mr-2"/>Build low-fi wireframes</li>
               <li> <FaCheck className="inline w-3 h-3 mr-2"/>Involve stakeholders in the design process</li>
               <li> <FaCheck className="inline w-3 h-3 mr-2"/>Run engaging design workshops</li>
            </ul>
            <a
              className=" text-[18px]  leading-6 font-medium text-indigo-600 hover:text-indigo-500 mt-5 block"
              href="#"
            >
              Learn more →
            </a>
            <div className="mt-16">
                <p className=" text-[18px]  text-gray-500">Integrate your favorite tools</p>
                <div className="flex  justify-start gap-5 mt-6">
                     <img src={tools1} alt="" />
                     <img src={tools2} alt="" />
                     <img src={tools3} alt="" />
                     <img src={tools1} alt="" />
                </div>
            </div>
          </div>
          <div className=" w-full mt-6 md:mt-0 md:w-2/3">
            <img src={workJpg} className=" shadow-md" alt="" />
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default BuildTeams;
