import { useState } from "react"
import { IoShieldCheckmark } from "react-icons/io5";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
function Pricing (){
  const [isYearly , setIsYearly] = useState(false);
  const packages = [
    {name:"start" , monthlyPrice:50 , yearlyPrice:199 , description:"A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {name:"advanced" , monthlyPrice:85 , yearlyPrice:399 , description:"A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {name:"premuim" , monthlyPrice:100 , yearlyPrice:599 , description:"A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
  ]
    return (
      <div className="md:px-14 p-4  max-w-s mx-auto py-10">
        <div className="text-center ">
          <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-4 capitalize">Here are all our plans</h2>
          <p className="text-tartiary px-6 md:w-1/3  mx-auto">A simple paragraph is comprised of three major components. The which is often a declarative sentence.</p>
          {/* toggle */}
          <div className="mt-6">
            <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
              <span className="capitalize mr-8 text-2xl font-semibold">monthly</span>
              <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
                <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out 
                 ${isYearly ? "bg-primary ml-8" : " bg-gray-500"} `}></div>
              </div>
              <span className="capitalize ml-8 text-2xl font-semibold">yearly</span>
            </label>
            <input type="checkbox" id="toggle" className="hidden" checked={isYearly} onChange={()=>{ setIsYearly(!isYearly)}} />
          </div>
        </div>

        {/* cards price */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-20 gap-10 md:w-11/12 mx-auto">
          {
            packages.map((pkg,index)=> <div key={index} className=" py-10 px-4 md:px-6 rounded-xl shadow-lg shadow-gray-400 border">
              <h3 className="text-3xl font-bold text-primary text-center capitalize">{pkg.name}</h3>
              <p className="text-center text-tartiary my-5">{pkg.description}</p>
              <p className="mt-5 text-center text-secondary text-4xl font-bold">
                {isYearly ? `${pkg.yearlyPrice} $` : `${pkg.monthlyPrice} $`}
                <span className="capitalize text-gray-900 text-base">/ {isYearly ? "yearly" : "monthly"}</span>
              </p>
              <ul className="mt-4 space-y-2 px-4 cursor-pointer">
                <li className="flex gap-3 items-center "><IoShieldCheckmarkOutline /> Videos of Lessons</li>
                <li className="flex gap-3 items-center "><IoShieldCheckmarkOutline /> Homework check</li>
                <li className="flex gap-3 items-center "><IoShieldCheckmarkOutline/> Additional practical task</li>
                <li className="flex gap-3 items-center "><IoShieldCheckmark className="text-primary"/> Monthly conferences</li>
                <li className="flex gap-3 items-center "><IoShieldCheckmark className="text-primary"/> Personal advice from teachers</li>
              </ul>
              <div className="  mt-5 flex justify-center items-center">
                <button className="btn capitalize">get started</button>
              </div>
            </div>)
          }
        </div>
      </div>
    )
 
}

export default Pricing