import { FaArrowRightLong } from "react-icons/fa6";

const Collaborate = () => {
  return (
    <div className="py-10 md:py-20">
      <div className="my-6 font-[sans-serif]">
        <div className=" text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl text-[#050038] w-full md:w-[70%] mx-auto  md:text-4xl font-extrabold">
            Collaborate without constraints
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          <div className="max-w-[330px] h-auto p-2 rounded-md mx-auto   bg-white relative">
            <h2 className="text-xl text-[#050038] font-bold">Free forever</h2>
            <p className="text-sm  md:text-base text-left text-gray-400 mt-5 leading-relaxed">
              The service was amazing. I never had to wait that long for my
              food. The staff was friendly and attentive, and the delivery was
              impressively prompt.
            </p>
          </div>
          <div className="max-w-[330px] h-auto p-2 rounded-md mx-auto   bg-white relative">
            <h2 className="text-xl text-[#050038] font-bold">
              Easy integrations
            </h2>
            <p className="text-sm  md:text-base text-left text-gray-400 mt-5 leading-relaxed">
              Miro has 100+ powerful integrations with tools you already use
              like G Suite, Slack, and Jira, so your workflow is seamless. View
              the full list in our Marketplace .
            </p>
          </div>
          <div className="max-w-[330px] h-auto p-2 rounded-md mx-auto   bg-white relative">
            <h2 className="text-xl text-[#050038] font-bold">Security first</h2>
            <p className="text-sm  md:text-base text-left text-gray-400 mt-5 leading-relaxed">
              We treat your data like you would — with the utmost care. We
              follow industry-leading security standards and give you tools to
              protect intellectual property. Learn more at our Trust Center .
            </p>
          </div>
        </div>
        {/* button  */}
        <div className="flex justify-center mt-5 md:mt-16">
          <button className="bg-[#007bff] hover:bg-blue-700 mt-3 w-full md:w-[12%]  transition-all duration-300 text-white px-4 py-3 rounded-full text-sm">
            Sign Up Free
            <FaArrowRightLong className="w-3  h-3 ml-1.5 inline" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
