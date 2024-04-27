import { useState } from 'react';
import logo from '../assets/images/logo.jpg';
import { GrLanguage } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";
function Navbar () {
    const [isOpenMenue , setIsOpenMenue] = useState(false);
    const toggleMenue = ()=>{
        setIsOpenMenue(!isOpenMenue)
    }
 const navItems = [
    {link:"Overview" , path:"home"},
    {link:"Feature" , path:"feature"},
    {link:"About" , path:"about"},
    {link:"Pricing" , path:"pricing"}
 ]
    return (
      <>
      <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto border-b text-primary fixed top-0 right-0 left-0'>
        <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
            <div className='flex space-x-14 items-center'>
                <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'><img src={logo} alt='logo picture' className='w-10 inline-block items-center'/>
                <span className='uppercase'>noxe</span></a>
                <ul className='md:flex space-x-12 hidden'>
                    {navItems.map(({link,path})=> <a key={link} href={path} className='block hover:text-gray-300'>{link}</a>)}
                </ul>
            </div>
            <div className='space-x-12 hidden md:flex items-center'>
                <a className='capitalize hidden md:flex items-center hover:text-secondary' href='/'><GrLanguage className='mr-2'/> language</a>
                <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded capitalize hover:text-lime-50 hover:bg-indigo-600'>sign up</button>
            </div>
            <div className='md:hidden'>
                <button onClick={toggleMenue} className='text-light focus:outline-none focus:text-gray-700'>
                    {
                        isOpenMenue ? (<FaXmark className='w-6 h-6 text-primary'/>) : (<RxHamburgerMenu className='w-6 h-6 text-primary'/>)
                    }
                </button>
            </div>
        </div>
      </nav>
      <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary ${isOpenMenue ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
      {navItems.map(({link,path})=> <a key={link} href={path} className='block hover:text-gray-300'>{link}</a>)}
      </div>
      </>
    )
 
}

export default Navbar