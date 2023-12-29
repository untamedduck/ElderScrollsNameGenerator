import React from "react";
import redguard from "../elderScrollsPhotos/redguard.png"
import CharacterNameGenerator from "../Components/CharacterNameGenerator";

function Redguard(props) {
  
    return (
        <div>
        <div className="flex w-full relative z-0 justify-center lg:w-auto">
          <div className="flex w-auto display:flex w-auto h-auto pt-16 hidden lg:block">
            <img
              className="object-cover shadow-md shadow-gray-500 rounded-lg object-fill
                       transform transition duration-500 hover:scale-105 border-stone-700 border-double border-8"
              src={redguard}
              alt="redguard"
            />
          </div>
          <div
            className="text-[white] font-Rubik
              self-center h-auto lg:pl-16 w-full lg:w-1/2 mt-16 lg:mt-0 p-4"
          >
            <h1 className="justify-center text-3xl md:text-3xl lg:text-4xl font-bold text-lg w-3/4 text-[#d7b15b]">Redguard Character Name Generator</h1>
            <p className="pt-6  text-base md:text-lg lg:text-lg">Redguards hail from the great desert province of Hammerfell. They are descended from a long line of
                        warriors and mystic seers.  Unlike most other human races, they are not believed to have any connection with the ancestral Nordic homeland of Atmora.
                        Legend has it that Redguards are innately more proficient with the use of weaponry than any other race. They excel in all arts concerning
                        blade and shield. </p>
          </div>
        </div>
        <CharacterNameGenerator race={"Redguard"} series = {"Elder-Scrolls"}/>
      </div>
    );
  }

export default Redguard;