import React from 'react';
import HighElf from "../elderScrollsPhotos/HighElf.png"

function Altmer(props) {
    return (
        <div className = "display: flex h-auto w-full relative z-0 justify-center w-3/4">
            <div className = "display:flex w-1/2 display:flex w-auto h-auto pl-80 pt-16">
                 <img className = "object-cover shadow-md shadow-gray-500 rounded-lg object-fill
                     transform transition duration-500 hover:scale-105 border-stone-700 border-double border-8 " src = {HighElf}/>
            </div>
            <div className= "display:flex text-[white] font-Rubik
            self-center w-1/2 h-auto pb-20 pl-16">
                <h1 className= "justify-center text-2xl md:text-2xl lg:text-4xl font-bold text-lg w-3/4"> High Elf Character Name Generator</h1>
                <p className = "pt-6"> Altmer are the light-skinned and tall Elves of the Summerset Isles. In the Empire, the name "High Elves" is given to the Altmer,
                    with the word "High" being used to describe the Altmer as tall, proud, and culturally snobbish. The Altmer consider themselves the perfect race.
                    Altmer live two to three times as long as humans; with a 200-year-old
                    Altmer being old and a 300-year-old Altmer being very, very old. </p>
            </div>
        </div>
    );
}

export default Altmer;