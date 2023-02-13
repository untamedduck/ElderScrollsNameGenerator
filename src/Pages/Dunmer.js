import React, {useEffect, useState} from "react";
import dunmer from "../elderScrollsPhotos/DarkElf.png"
import Radio from "../Components/Radio";
import {getRandom, getRandomF,} from "../arrayHold/DunmerNames";
function Dunmer(props) {
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
                setAltName(getRandomF())
            }
        }
    useEffect(() => {
        window.scroll({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, [names]);


        return (
            <div >
                <div className = "flex w-full relative z-0 justify-center lg:w-auto">
                    <div className = "flex w-auto display:flex w-auto h-auto pt-16 hidden lg:block">
                        <img className = "object-cover shadow-md shadow-gray-500 rounded-lg object-fill
                     transform transition duration-500 hover:scale-105 border-stone-700 border-double border-8" src = {dunmer}/>
                    </div>
                    <div className= "text-[white] font-Rubik
            self-center h-auto lg:pl-16 w-full lg:w-1/2 mt-16 lg:mt-0 p-4">
                        <h1 className= "justify-center text-3xl md:text-3xl lg:text-4xl font-bold text-lg w-3/4 text-[#d7b15b]"> Dark Elf Character Name Generator</h1>
                        <p className = "pt-6  text-base md:text-lg lg:text-lg" >The Dunmer, also known as Dark Elves,
                            are the grey-skinned, typically red-eyed elven peoples of Morrowind. In the Empire, "Dark Elf" is the common usage, but they and their Aldmeri brethren prefer
                            the term "Dunmer". "Dark" is variously interpreted as meaning "dark-skinned", "gloomy", and "ill-favored by fate", with the Dunmer and their national identity
                            embracing these various connotations with enthusiasm.
                            </p>
                    </div>
                </div>
                <div className= "flex w-full relative z-0 justify-center lg:w-auto flex-wrap">
                    <div className = "grid max-h-24 w-auto relative z-0 justify-center lg:w-auto mt-4">
                        <button onClick={handleClick} className="bg-[#d7b15b] text-[#1c181b] font-bold py-2 px-4
                        rounded font-Rubik lg:w-56 h-14 w-full hover:bg-[#ded2ae] transform transition duration-500 hover:scale-105 "> Generate names </button>
                        <div className="mt-4">
                            <Radio onChange = {handleRadioChange}/>
                        </div>
                    </div>

                    <div className="text-[white] font-Rubik
            self-center w-full lg:pl-16 lg:w-1/2 mt-4 lg:mt-0 lg:p-4">
                        <div className = "justify-center md:text-3xl lg:text-2xl font-bold text-lg text-[#] w-auto pl-4 lg:pl-0">{names.map((name,i)=>(<div className="mb-2" key={i}>{name}</div>))}</div>




                    </div>

                </div>





            </div>
    );
}

export default Dunmer;