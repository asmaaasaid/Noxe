import featuredImage from '../assets/images/featured.png'

function Features () {
 
    return (
      <div className="my-24 px-4 md:px-14 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
             <div className="lg:w-1/4  ">
                 <h3 className="capitalize text-3xl font-bold mb-3  text-primary">Why we are  better than others</h3>
                <p className="text-base text-tartiary">A simple paragraph is comprised of three major components. The first sentence,
                 which is often a declarative sentence, is called the “topic sentence.”</p> 
            </div>
            <div className='w-full lg:w-3/4'>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-10 gap-8'>
                <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-72 shadow-2xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer'>
                    <div className=''>
                        <img src={featuredImage} alt="featured image" />
                        <h5 className='font-semibold text-2xl  text-center mt-3 capitalize'>Conventient study schedule</h5>
                    </div>
                </div>
                <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-72 shadow-2xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer md:mt-16'>
                    <div className=''>
                        <img src={featuredImage} alt="featured image" />
                        <h5 className='font-semibold text-2xl  text-center mt-3 capitalize'>Conventient study schedule</h5>
                    </div>
                </div>
                <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-72 shadow-2xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer'>
                    <div className=''>
                        <img src={featuredImage} alt="featured image" />
                        <h5 className='font-semibold text-2xl  text-center mt-3 capitalize'>Conventient study schedule</h5>
                    </div>
                </div>
                </div>
            </div>
             
        </div>
      </div>
    )

}

export default Features