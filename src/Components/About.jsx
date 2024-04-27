import aboutImg1 from '../assets/images/about1.png';
import aboutImg2 from '../assets/images/about2.png';
function About (){
  
    return (
      <div className="md:px-14 p-4 max-w-screen-2xl mx-auto space-y-10 ">
        <div className='flex md:flex-row flex-col justify-between items-center gap-8'>
            <div className='md:w-1/2 '>
                <img src={aboutImg1} alt="about image" /> 
            </div>
            <div className=' md:w-2/5'>
                <h2 className='capitalize md:text-5xl text-3xl font-bold text-primary mb-4 leading-normal'>We have been improving our product <span className='text-secondary'>for many years.</span> </h2>
                <p className='text-tartiary text-lg mb-7'>A good example of a paragraph contains a topic conclusion. 'There are many different kinds of animals that live in China.</p>
                <button className='capitalize btn'>get started</button>
            </div>
        </div>
        {/* second part */}
        <div className='flex md:flex-row-reverse flex-col justify-between items-center gap-8'>
            <div className='md:w-1/2 '>
                <img src={aboutImg2} alt="about image" /> 
            </div>
            <div className=' md:w-2/5'>
                <h2 className='capitalize md:text-5xl text-3xl font-bold text-primary mb-4 leading-normal'>You can Practice at any <span className='text-secondary'>time convinent for you. </span> </h2>
                <p className='text-tartiary text-lg mb-7'>A good example of a paragraph contains a topic conclusion. 'There are many different kinds of animals that live in China.</p>
                <button className='capitalize btn'>get started</button>
            </div>
        </div>
      </div>
    )
  
}

export default About