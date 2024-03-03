import { FaFacebookF, FaMinus, FaTwitter, FaYoutube } from "react-icons/fa6";

 

const Footer = () => {
    return (
        <div className="bg-[#02033B] py-20  text-white">
            <div className="max-w-[1200px]  mx-auto px-2">
    <div className=" px-4 py-12 lg:flex  md:items-center md:justify-between">
        <div className="md:flex">
        <div className="mb-8 md:mb-0">
            <h1 className="text-2xl font-bold mb-3">Scan. Detect. Remove.</h1>
            <div className="flex space-x-10 cursor-pointer py-5 mb-6">
                 <div className="bg-gray-200 p-2 rounded-md">  <FaTwitter className="text-gray-800 w-5 h-5"/></div>
                 <div className="bg-gray-200 p-2 rounded-md">  <FaFacebookF  className="text-gray-800 w-5 h-5"/></div>
                 <div className="bg-gray-200 p-2 rounded-md">  <FaYoutube  className="text-gray-800 w-5 h-5" /></div>
            </div>
          <div className="w-full   text-gray-400 md:w-[80%]">
           <div className="flex gap-8">
           <p className="text-sm underline mb-2">Privacy Policy</p>
            <p className="text-sm underline">Terms of Service</p>
           </div>
            <p className="text-sm mt-6">Copyright © 2022 Certa Software Limited | Registered in England &amp; Wales No. 10023588</p>
            <p className="text-sm mt-5  ">Designed &amp; developed by <span className="underline">Bappy</span> </p>
          </div>

            
        </div>
        <div className="mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-3 border-b-2 w-[14%] md:w-full pb-5">Miro.</h2>
            <div className="space-y-5 font-bold cursor-pointer text-[#FFC247] mt-10">
                <p className="text-sm"> <FaMinus className="inline mr-2" />  iPhone</p>
                <p className="text-sm"> <FaMinus className="inline mr-2" />  Android</p>
                <p className="text-sm"> <FaMinus className="inline mr-2" />  Help</p>
                <p className="text-sm"> <FaMinus className="inline mr-2" />  About</p>
                <p className="text-sm"> <FaMinus className="inline mr-2" />  Insights</p>
            </div>
        </div>
        </div>
        <div className="bg-[#FDB235] p-6 md:mt-10 lg:-mt-16 rounded-3xl text-gray-800 w-full max-w-sm">
            <h3 className="text-2xl  font-bold mb-3">Sign up to our newsletter</h3>
            <p className="text-sm font-medium py-3  mb-4">Receive the latest mobile security news, exclusive discounts &amp; offers straight to your inbox!</p>
            <form className="flex">
                <input className="flex h-10 w-full   rounded-r-none    text-gray-500 text-sm   flex-1 px-4 py-2 rounded-full focus:outline-none" placeholder="Email address" type="email"/>
                <button className="inline-flex items-center justify-center  rounded-full  rounded-l-none text-sm font-medium  h-10 bg-[#333C47] text-white px-6 py-2  ">Submit</button>
            </form>
        </div>
        
    </div>
    <div className="text-sm  text-gray-400 w-[90%] md:w-[50%]  ml-3 text-left py-4">
        <p>Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>
    </div>
</div>

        </div>
    );
};

export default Footer;