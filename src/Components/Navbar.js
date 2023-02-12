import React, {useState} from 'react';
import BannerImage from "../Pictures/logo-color.png"
import{AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import {Link} from "react-router-dom"

function Navbar(props) {
    const [nav, setNav]=useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className = "flex justify-between items-center h-24 mx-auto px-4 text-[#d7b15b] bg-[#]">
            <div className = "flex shrink-0] ">
                <img className="h-40 w-40 flex-auto mt-8 " src={BannerImage} alt="Randomizer"/>
            </div>
            <ul className= "hidden md:flex">
                <Link to = "/NameGenerator/">
                <li className = "p-4"> Home </li>
                </Link>
                <li className = "p-4 invisible"> Generators </li>
                <li className = "p-4 invisible"> About </li>
                <li className = "p-4 invisible"> Contact us </li>
            </ul>
            <div onClick={handleNav} className = "block md:hidden cursor-pointer">
                {!nav ? <AiOutlineClose size = {20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className= "absolute inset-y-0 left-0 z-10">
                <div className={!nav ? "fixed left-0 top-0  h-full w-[80%] border-r border-r-gray-900 bg-[#1c181b] " +
                    "ease-in-out duration-500" : "fixed left-[-100%] " }>  {/* Color of mobile menu*/}
                 <img className="h-40 w-40 pi-5" src={BannerImage} alt="Randomizer"/>
                  <ul className= "uppercase p-2">
                      <Link to = "/NameGenerator/" >
                        <li className = "p-4 border-b border-gray-600"> Home </li>
                      </Link>
                        <li className = "p-4 border-b  invisible"> Generators </li>
                        <li className = "p-4 border-b border-gray-600 invisible"> About </li>
                        <li className = "p-4 invisible"> Contact us </li>
                 </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;