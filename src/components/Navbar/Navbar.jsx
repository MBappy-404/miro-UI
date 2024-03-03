import logo from "../../assets/logo.png";
import { FaArrowRightLong, FaGlobe } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div>
      <header className="border-b shadow-lg fixed w-full z-10 bg-white font-sans min-h-[60px]">
        <div className="flex max-w-[1200px] mx-auto justify-between px-2 items-center">
          <div className="flex flex-wrap items-center justify-start  py-5 gap-x-5 relative">
            {/* Logo  */}
            <a href="javascript:void(0)">
              <img src={logo} alt="logo" className="w-20" />
            </a>

            {/* Nav Links  */}
            <ul
              id="collapseMenu"
              className="lg:!flex max-lg:hidden mt-0 lg:mt-1 max-lg:w-full lg:space-x-5 max-lg:space-y-4 max-lg:my-4"
            >
              <li className="max-lg:border-b max-lg:py-2">
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-600 text-[15px] font-semibold text-blue-600 block"
                >
                  Product
                </a>
              </li>
              <li className="group max-lg:border-b max-lg:py-2 relative">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-600 text-[15px] font-semibold lg:hover:fill-[#007bff] block"
                >
                  Solutions
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    className="ml-1 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </a>
                <ul className="absolute hidden group-hover:block shadow-lg bg-white px-6 pb-4 pt-6 space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50">
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px] font-semibold block"
                    >
                      About
                    </a>
                  </li>
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px] font-semibold block"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px] font-semibold block"
                    >
                      Login
                    </a>
                  </li>
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px] font-semibold block"
                    >
                      Sign up
                    </a>
                  </li>
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px] font-semibold block"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </li>
              <li className="group max-lg:border-b max-lg:py-2 relative">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-600 text-[15px] font-semibold lg:hover:fill-[#007bff] block"
                >
                  Resources
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    className="ml-1 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </a>
                <ul className="absolute hidden group-hover:block shadow-lg bg-white px-6 pb-4 pt-6 space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px]">
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px] font-semibold block"
                    >
                      Foods
                    </a>
                  </li>
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px] font-semibold block"
                    >
                      Sale
                    </a>
                  </li>
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px] font-semibold block"
                    >
                      Marketing
                    </a>
                  </li>
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px] font-semibold block"
                    >
                      Investment
                    </a>
                  </li>
                </ul>
              </li>
              <li className="max-lg:border-b max-lg:py-2">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-600 text-[15px] font-semibold block"
                >
                  Enterprise
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-2">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-600 text-[15px] font-semibold block"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* right side */}
          <div className="flex items-center space-x-4  text-gray-600  font-semibold text-base lg:order-1">
            <div className="flex items-center hidden md:block space-x-4">
            <span className="text-sm  mt-1 ">
              <FaGlobe className="w-5 h-5 mr-1.5 inline mb-1" />
              EN
            </span>
            <a href="javascript:void(0)">Contact</a>
            <a href="javascript:void(0)">Sales</a>
            <a href="javascript:void(0)">Login</a>
            </div>
            <button className="bg-[#007bff] hover:bg-blue-700 transition-all duration-300 text-white px-4 py-2 md:py-3 rounded-full text-sm ml-0">
              Sign Up Free 
              <FaArrowRightLong className="w-3  h-3 ml-1.5 mb-0.5 inline" />
            </button>

            <button id="toggle" className="lg:hidden ml-3">
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
