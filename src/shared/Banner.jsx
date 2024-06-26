

function Banner ({banner,heading,subheading,btn1,btn2}) {
  
    return (
        <div className='gradiantBg rounded-xl rounded-br-[88px] md:p-9 px-4 py-9'>
                <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
                    <div>
                        <img src={banner} alt="banner image" className='lg:h-[386px]' />
                    </div>
                    <div className="md:w-3/5 ">
                        <h2 className='md:text-7xl text-4xl font-semibold text-white capitalize mb-6 leading-relaxed'>{heading}</h2>
                        <p className=' text-[#EBEBEB] text-2xl mb-8'> {subheading} </p>
                         <div className='space-x-5 space-y-4'>
                            <button className='btn'> {btn1} </button>
                            <button className='btn'> {btn2} </button>
                         </div>
                    </div>
                    
                </div>
            </div>
    )
 
}

export default Banner