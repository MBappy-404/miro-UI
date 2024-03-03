import { FaArrowRightLong } from "react-icons/fa6";

const Collaborate = () => {
  return (
    <div className="py-10 max-w-[1200px] mx-auto mt-10 md:py-20">
      <div className="my-6 ">
        <div className=" text-center mb-8">
          <div className="bg-[#FFD02F]  rotate-12 translate-x-20 md:translate-x-48 p-0.5 text-sm w-[200px] mx-auto rounded-md font-bold ">
            <h4>YOUR IDEA START HERE</h4>
          </div>
          <h2 className="text-3xl text-[#050038] mt-5 w-full md:w-[50%] mx-auto leading-0 md:leading-[50px]  md:text-[48px] font-bold">
            Collaborate without <br /> constraints
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-20   mx-auto">
          <div className="h-auto p-2 rounded-md mx-auto   bg-white relative">
            <h2 className="text-xl text-[#050038] font-bold">Free forever</h2>
            <p className="  md:text-[18px] text-left text-gray-400 mt-5 leading-relaxed">
              The service was amazing. I never had to wait that long for my
              food. The staff was friendly and attentive, and the delivery was
              impressively prompt.
            </p>
          </div>
          <div className="h-auto p-2 rounded-md mx-auto   bg-white relative">
            <h2 className="text-xl text-[#050038] font-bold">
              Easy integrations
            </h2>
            <p className="  md:text-[18px] text-left text-gray-400 mt-5 leading-relaxed">
              Miro has 100+ powerful integrations with tools you already use
              like G Suite, Slack, and Jira, so your workflow is seamless. View
              the full list in our Marketplace .
            </p>
          </div>
          <div className="h-auto p-2 rounded-md mx-auto   bg-white relative">
            <h2 className="text-xl text-[#050038] font-bold">Security first</h2>
            <p className="  md:text-[18px] text-left text-gray-400 mt-5 leading-relaxed">
              We treat your data like you would — with the utmost care. We
              follow industry-leading security standards and give you tools to
              protect intellectual property. Learn more at our Trust Center .
            </p>
          </div>
        </div>
        {/* button  */}
        <div className="flex justify-center mt-5 md:mt-16">
          <button className="bg-[#007bff] hover:bg-blue-700 mt-3   transition-all duration-300 text-white px-5 py-3 rounded-full text-base">
            Sign Up Free
            <FaArrowRightLong className="w-3  h-3 ml-1.5 mb-1 inline" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
