import React, { useState } from "react";
import argonian from "../elderScrollsPhotos/Argonian.png"
import Radio from "../Components/Radio";
import {getRandom, getRandomFA} from "../arrayHold/ArgNames";



function Argonian(props) {
    const [gender, setGender] = useState("neutral");
    function handleRadioChange(newGender) {
        setGender(newGender);
    }

    const [names,setAltName]=useState([]);
    let handleClick
    if(gender === "Male")
    {
        handleClick = () => {
            setAltName(getRandom())

        }
    }
    else if (gender ==="Female"){
        handleClick = () => {
            setAltName(getRandomFA())
        }
    }




    return (
        <div >
            <div className = "flex w-full relative z-0 justify-center lg:w-auto">
                <div className = "flex w-auto display:flex w-auto h-auto pt-16 hidden lg:block">
                    <img className = "object-cover shadow-md shadow-gray-500 rounded-lg object-fill
                     transform transition duration-500 hover:scale-105 border-stone-700 border-double border-8" src = {argonian}/>
                </div>
                <div className= "text-[white] font-Rubik
            self-center h-auto lg:pl-16 w-full lg:w-1/2 mt-16 lg:mt-0 p-4">
                    <h1 className= "justify-center text-3xl md:text-3xl lg:text-4xl font-bold text-lg w-3/4 text-[#d7b15b]"> Argonian Character Name Generator</h1>
                    <p className = "pt-6  text-base md:text-lg lg:text-lg" >Argonians or Saxhleel are an oviparous race of reptilian people native to the large and marshy province of Tamriel known
                        as Black Marsh. They can be found in smaller numbers throughout the continent. argonians are one of the few races completely unrelated to men and mer, who think of themselves as coming from, and ultimately returning to, the Hist. </p>
                </div>
            </div>
            <div className= "flex w-full relative z-0 justify-center lg:w-auto flex-wrap">
                <div className = "grid h-auto w-auto relative z-0 justify-center lg:w-auto mt-4">
                    <button onClick={handleClick} className="bg-[#d7b15b] text-[#1c181b] font-bold py-2 px-4
                        rounded font-Rubik lg:w-56 h-14 w-full hover:bg-[#ded2ae] transform transition duration-500 hover:scale-105 "> Generate names </button>
                    <div className="mt-4">
                        <Radio onChange = {handleRadioChange}/>
                    </div>
                </div>

                <div className="text-[white] font-Rubik
            self-center w-full h-auto lg:pl-16 lg:w-1/2 mt-16 lg:mt-0 lg:p-4 ">
                    <p className= "border"> {gender}</p>
                    <p className = "border">{names.map((name,i)=>(<div key={i}>{name}</div>))}</p>




                </div>
            </div>





        </div>


    );
}

export default Argonian;