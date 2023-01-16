import React from 'react';
import argonian from "../elderScrollsPhotos/Argonian.png"
import HighElf from "../elderScrollsPhotos/HighElf.png";
function Argonian(props) {
    return (
        <div>
            <div className = "display: flex h-auto w-full relative z-0 justify-center w-3/4">
                <div className = "display:flex w-1/2 display:flex w-auto h-auto pl-80 pt-16">
                    <img className = "object-cover shadow-md shadow-gray-500 rounded-lg object-fill
                     transform transition duration-500 hover:scale-105 border-stone-700 border-double border-8 " src = {argonian}/>
                </div>
                <div className= "display:flex text-[white] font-Rubik
            self-center w-1/2 h-auto pb-20 pl-16">
                    <h1 className= "justify-center text-2xl md:text-2xl lg:text-4xl font-bold text-lg w-3/4"> Argonian Character Name Generator</h1>
                    <p className = "pt-6"> Argonians or Saxhleel are an oviparous race of reptilian people native to the large and marshy province of Tamriel known as Black Marsh.
                        They can be found in smaller numbers throughout the continent. Argonians are one of the few races completely unrelated to men and mer,
                        who think of themselves as coming from, and ultimately returning to, the Hist. </p>
                </div>
            </div>
        </div>
    );
}

export default Argonian;