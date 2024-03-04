import { useState } from "react";
import logo from "../../assets/logo.png";
import { FaArrowRightLong, FaGlobe } from "react-icons/fa6";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open); // Toggle the value of 'open'
  };
  return (
    <div>
      <header className="border-b shadow-lg fixed w-full z-10 bg-white   min-h-[60px]">
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
                  className="hover:text-blue-600 text-[15px]   text-blue-600 block"
                >
                  Product
                </a>
              </li>
              <li className="group max-lg:border-b max-lg:py-2 relative">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-600 text-[15px]  lg:hover:fill-[#007bff] block"
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
                      className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                    >
                      About
                    </a>
                  </li>
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                    >
                      Login
                    </a>
                  </li>
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                    >
                      Sign up
                    </a>
                  </li>
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </li>
              <li className="group max-lg:border-b max-lg:py-2 relative">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-600 text-[15px]  lg:hover:fill-[#007bff] block"
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
                      className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                    >
                      Foods
                    </a>
                  </li>
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                    >
                      Sale
                    </a>
                  </li>
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                    >
                      Marketing
                    </a>
                  </li>
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                    >
                      Investment
                    </a>
                  </li>
                </ul>
              </li>
              <li className="max-lg:border-b max-lg:py-2">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                >
                  Enterprise
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-2">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* right side */}
          <div className="flex items-center space-x-4  text-gray-600     text-base lg:order-1">
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

            {/* Toggle menu */}
          <div className="lg:hidden mt-2 ">
            <button onClick={handleToggle} className=" transition-transform duration-300">
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 transform  hover:-rotate-90  rotate-90 transition-all duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
          </div>

          {/* medium and small device side menu  */}
          {open && (
            <div className="bg-gray-500 lg:hidden   mt-[68px] -z-50 absolute top-0 left-0 w-full h-screen bg-opacity-25">
            <div className="bg-white  border-t mt-[68px] shadow-2xl h-screen lg:hidden fixed top-0 left-0 min-w-[280px] md:w-[400px] py-6   overflow-auto">
            <ul
              id="collapseMenu"
              className="flex  flex-col "
            >
              <li className="max-lg:border-b  py-4 px-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-600 text-[15px]   text-blue-600 block"
                >
                  Product
                </a>
              </li>
              <li className="group max-lg:border-b  py-4 px-3 relative">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-600 text-[15px]  lg:hover:fill-[#007bff] block"
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
                <ul className="absolute hidden group-hover:block shadow-lg bg-white px-6 ml-10 pb-4 pt-6 space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50">
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                    >
                      About
                    </a>
                  </li>
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                    >
                      Login
                    </a>
                  </li>
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                    >
                      Sign up
                    </a>
                  </li>
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </li>
              <li className="group max-lg:border-b  py-4 px-3 relative">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-600 text-[15px]  lg:hover:fill-[#007bff] block"
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
                <ul className="absolute hidden group-hover:block shadow-lg ml-10 bg-white px-6 pb-4 pt-6 space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px]">
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                    >
                      Foods
                    </a>
                  </li>
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                    >
                      Sale
                    </a>
                  </li>
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                    >
                      Marketing
                    </a>
                  </li>
                  <li className="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                    >
                      Investment
                    </a>
                  </li>
                </ul>
              </li>
              <li className="max-lg:border-b  py-4 px-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                >
                  Enterprise
                </a>
              </li>
              <li className="max-lg:border-b  py-4 px-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                >
                  Pricing
                </a>
              </li>
              <li className="max-lg:border-b  py-4 px-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                >
                  Contact
                </a>
              </li>
              <li className="max-lg:border-b  py-4 px-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                >
                  Sales
                </a>
              </li>
              <li className="max-lg:border-b  py-4 px-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-600 text-[15px]  block"
                >
                  Login
                </a>
              </li>
            </ul>
            </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
