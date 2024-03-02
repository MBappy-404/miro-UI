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
      <div className="max-w-6xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="">
          <h2 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Built for all kinds of teams
          </h2>
          <div className="mt-6 flex  gap-2 ">
            {features.map((feature) => (
              <div key={feature.id} className="inline-flex  rounded-full  ">
                <button
                  onClick={() => setActive(feature.name)}
                  className={`inline-flex items-center border justify-center 
                  ${!active ? feature.id === '1' ? "bg-gray-200" : "" : active}  
                   rounded-full text-sm font-medium   transition-colors  ${
                    active === feature.name ? "bg-gray-200 " : "" }  h-10 px-5 py-2`}
                >
                  {feature.name}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 md:flex justify-between gap-5 ">
          <div className="text-left mt-8 w-full md:w-1/3">
            
            <ul className="mt-5 text-base leading-8 text-gray-500">
               <li> <FaCheck className="inline w-3 h-3 mr-2"/>Build low-fi wireframes</li>
               <li> <FaCheck className="inline w-3 h-3 mr-2"/>Involve stakeholders in the design process</li>
               <li> <FaCheck className="inline w-3 h-3 mr-2"/>Run engaging design workshops</li>
            </ul>
            <a
              className="text-base leading-6 font-medium text-indigo-600 hover:text-indigo-500 mt-8 block"
              href="#"
            >
              Learn more →
            </a>
            <div className="mt-10">
                <p className="text-base text-gray-500">Integrate your favorite tools</p>
                <div className="flex  justify-start gap-5 mt-3">
                     <img src={tools1} alt="" />
                     <img src={tools2} alt="" />
                     <img src={tools3} alt="" />
                     <img src={tools1} alt="" />
                </div>
            </div>
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

export default BuildTeams;
