import React from 'react';
import HighElf from "../elderScrollsPhotos/HighElf.png"
import Radio from "../Components/Radio";

function Altmer(props) {
    return (
        <div>
        <div className = "display: flex h-auto w-full relative z-0 justify-center lg:w-3/4">
            <div className = "display:flex w-1/2 display:flex w-auto h-auto pl-80 pt-16 hidden lg:block">
                 <img className = "object-cover shadow-md shadow-gray-500 rounded-lg object-fill
                     transform transition duration-500 hover:scale-105 border-stone-700 border-double border-8" src = {HighElf}/>
            </div>
            <div className= "display:flex text-[white] font-Rubik
            self-center w-1/2 h-auto lg:pl-16 w-auto lg:w-1/2 mt-16 lg:mt-0 p-4">
                <h1 className= "justify-center text-3xl md:text-3xl lg:text-4xl font-bold text-lg w-3/4 text-[#d7b15b]"> High Elf Character Name Generator</h1>
                <p className = "pt-6  text-base md:text-lg lg:text-lg" > Altmer are the light-skinned and tall Elves of the Summerset Isles. In the Empire, the name "High Elves" is given to the Altmer,
                    with the word "High" being used to describe the Altmer as tall, proud, and culturally snobbish. The Altmer consider themselves the perfect race.
                    Altmer live two to three times as long as humans; with a 200-year-old
                    Altmer being old and a 300-year-old Altmer being very, very old. </p>
            </div>
        </div>
           <div className = "display: grid h-auto w-full relative z-0 justify-center lg:w-2/4 mt-4">
               <button className="bg-[#d7b15b] text-[#1c181b] font-bold py-2 px-4 border-b-4
                 rounded font-Rubik"> Generate names </button>
               <div className="mt-4">
                    <Radio/>
               </div>
           </div>
        </div>


    );
}

export default Altmer;