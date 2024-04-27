import { IoLogoTwitter } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoPinterest } from "react-icons/io5";
function Footer () {
  
    return (
      <div className="md:px-14 p-4 max-w-screen-2xl mx-auto bg-[#010851] text-white">
        <div className="my-12 flex flex-col md:flex-row ">
            <div className="md:w-1/2 space-y-8 ">
            <a href="/" className='text-2xl font-semibold flex items-center space-x-3 '>
                <span className='uppercase '>noxe</span></a>
                <p className="md:w-1/2 ">A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence.</p>
                <div>
                    <input type="email" name="email" id="email" placeholder="Your Email" className="bg-[#9A7AF159] py-2 px-4 bg-secondary rounded-md focus:outline-none" />
                    <input type="submit" value="Subscribe" className="py-2 px-4 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-slate-300 hover:text-primary transition-all duration-300" />
                </div>
            </div>
            <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between items-start gap-8">
                <div className="space-y-4 mt-5">
                    <h4 className="capitalize text-2xl font-semibold">plateform</h4>
                    <ul className="space-y-2">
                        <li> <a href="/" className="hover:text-gray-700 capitalize text-base">overview</a>  </li>
                        <li> <a href="/" className="hover:text-gray-700 capitalize text-base">features</a>  </li>
                        <li> <a href="/" className="hover:text-gray-700 capitalize text-base">about</a>  </li>
                        <li> <a href="/" className="hover:text-gray-700 capitalize text-base">pricing</a>  </li>
                    </ul>
                </div>
                <div className="space-y-4 mt-5">
                    <h4 className="capitalize text-2xl font-semibold">help</h4>
                    <ul className="space-y-2">
                        <li> <a href="/" className="hover:text-gray-700 capitalize text-base">How does it works?</a>  </li>
                        <li> <a href="/" className="hover:text-gray-700 capitalize text-base">Where to ask question?</a>  </li>
                        <li> <a href="/" className="hover:text-gray-700 capitalize text-base">How to play?</a>  </li>
                        <li> <a href="/" className="hover:text-gray-700 capitalize text-base">What is needed for this?</a>  </li>
                    </ul>
                </div>
                <div className="space-y-4 mt-5">
                    <h4 className="capitalize text-2xl font-semibold">contact</h4>
                    <ul className="space-y-2">
                        <li className="hover:text-gray-700 capitalize text-base"> (012) 1234-567-890 </li>
                        <li className="hover:text-gray-700 capitalize text-base"> 123 xyz xyz </li>
                        <li className="hover:text-gray-700 capitalize text-base"> qwuerybaihefv, qiwu - hrebcl  </li>
                        <li className="hover:text-gray-700 capitalize text-base"> 095467  </li>
                    </ul>
                </div>
            </div>
        </div>

        <hr />
        <div className=" flex   sm:flex-row gap-8 sm:items-center justify-between my-5">
            <p className="capitalize">@ <span className="uppercase">noxe</span> 20xx .all rights reserved </p>
            <div className="flex items-center space-x-3">
            <IoLogoTwitter className="text-2xl cursor-pointer hover:-translate-y-4 transition-all duration-300"/>
            <IoLogoYoutube className="text-2xl cursor-pointer hover:-translate-y-4 transition-all duration-300"/>
            <IoLogoGithub className="text-2xl cursor-pointer hover:-translate-y-4 transition-all duration-300"/>
            <IoLogoWhatsapp className="text-2xl cursor-pointer hover:-translate-y-4 transition-all duration-300"/>
            <IoLogoPinterest className="text-2xl cursor-pointer hover:-translate-y-4 transition-all duration-300"/>
            </div>
        </div>
      </div>
    )
  
}

export default Footer