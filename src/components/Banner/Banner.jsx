import { FaArrowRightLong, FaStar, FaStarHalfStroke } from "react-icons/fa6";
import BannerBg from "../../assets/Banner.png.png";
import log1 from "../../assets/companies/cisco.svg.png";
import log2 from "../../assets/companies/deloitte.svg.png";
import log3 from "../../assets/companies/okta.svg.png";
import log4 from "../../assets/companies/Volvo_Index_Only.svg.png";
import log5 from "../../assets/companies/Walmart_Index_Only.svg.png";

const Banner = () => {
  return (
    <div className="">
      <div className=" text-[#333]  pt-24 mx-auto">
       

        <div className="grid md:grid-cols-2 items-center  text-[#333]   mx-auto">
          <div className="w-full text-center md:text-left">
            <h2 className="md:text-[48px]    text-3xl font-bold mb-4 md:leading-[50px]">
              Take ideas from <br /> better to best
            </h2>
            <p className="mt-4  text-[18px]  text-gray-500 w-full md:w-[80%] leading-relaxed">
              Miro is your teams visual platform to connect, collaborate, and
              create — together.
            </p>
            <div className="w-full md:w-[70%]">
              <div className="bg-white border border-gray-300 mt-10 flex px-1 py-1.5 rounded-full shadow-[0_5px_22px_-8px_rgba(93,96,127,0.2)] overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="w-full outline-none bg-white pl-4 py-1.5 text-sm"
                />
              </div>
              <button className="bg-[#007bff] hover:bg-blue-700 mt-3 w-full transition-all duration-300 text-white px-4 py-3 rounded-full text-sm ml-0">
                Sign Up Free
                <FaArrowRightLong className="w-3  h-3 ml-1.5 mb-1 inline" />
              </button>
            </div>
            <div className="flex items-center justify-center md:justify-start mt-2">
              <p className="text-base ml-3 text-gray-400">
                Collaborate with your team within minutes
              </p>
            </div>

            <div className="bg-[#F5F5F7] flex mt-10 rounded-lg mx-auto md:mx-0  items-center justify-between w-[70%] px-5 py-3">
              <div className="text-yellow-500">
                <div className="flex gap-1">
                  <FaStar className="w-5 h-5 " />
                  <FaStar className="w-5 h-5 " />
                  <FaStar className="w-5 h-5 " />
                  <FaStar className="w-5 h-5 " />
                  <FaStarHalfStroke className="w-5 h-5 " />
                </div>
                <p className="text-gray-800 pt-1 text-sm font-semibold">
                  Based on 5149+ reviews:
                </p>
              </div>
              <div className="flex font-bold justify-between gap-5">
                <svg
                  width="20"
                  height="32"
                  viewBox="0 0 20 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_333)">
                    <path
                      d="M5.82454 15.667C5.82454 18.5021 8.1336 20.8112 10.9687 20.8112C12.1995 20.811 13.3891 20.3683 14.3205 19.5637L16.2673 22.9407C14.7301 24.0657 12.8738 24.6705 10.9687 24.667C5.9978 24.667 1.96875 20.6379 1.96875 15.667C1.96875 10.696 5.9978 6.66699 10.9687 6.66699C11.56 6.66691 12.1497 6.72494 12.7296 6.84025L10.9687 10.5228C8.1336 10.5228 5.82454 12.8318 5.82454 15.667ZM17.6208 11.9818H14.9305C15.003 11.5596 15.2645 11.3234 15.7936 11.0556L16.2882 10.8036C17.1735 10.35 17.646 9.83651 17.646 8.99857C17.646 8.4725 17.4412 8.05668 17.0348 7.75741C16.6284 7.45815 16.1497 7.31009 15.589 7.31009C15.1552 7.30499 14.7292 7.42651 14.3636 7.65976C13.995 7.88657 13.7208 8.17953 13.5507 8.54495L14.3288 9.32619C14.6312 8.71506 15.0691 8.41579 15.6456 8.41579C16.134 8.41579 16.4332 8.66781 16.4332 9.01747C16.4332 9.31044 16.2882 9.553 15.7275 9.83651L15.4094 9.99087C14.7194 10.3405 14.2407 10.7406 13.9635 11.1942C13.6863 11.6479 13.5507 12.218 13.5507 12.9079V13.0969H17.6208V11.9818ZM17.2635 14.3822H12.8091L10.582 18.238H15.0364L17.2635 22.0969L19.4907 18.238L17.2635 14.3822Z"
                      fill="#050038"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_333">
                      <rect
                        width="19"
                        height="32"
                        fill="white"
                        transform="translate(0.96875)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h3>GetApp</h3>
                <h3>Capterra</h3>
              </div>
            </div>
          </div>
          <div className="md:h-[450px] mt-10 md:mt-0">
            <img
              src={BannerBg}
              className="w-full h-full object-cover rounded-lg"
              alt="hero image"
            />
          </div>
        </div>


 

        {/* COMPANIES  */}

        <div>
          <p className="text-base py-10 text-gray-400 text-center">
            Trusted by 45M+ users
          </p>
          <div className="mt-5 grid grid-cols-3 md:grid-cols-5 gap-5 md:gap-0 px-0 md:px-16   mx-auto   items-center">
            <img src={log5} className="mx-auto w-28" alt="google-logo" />
            <img src={log4} className="mx-auto w-12" alt="google-logo" />
            <img src={log3} className="mx-auto w-16" alt="google-logo" />
            <img src={log2} className="mx-auto w-56" alt="google-logo" />
            <img src={log1} className="mx-auto w-56" alt="google-logo" />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Banner;
