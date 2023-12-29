import React from "react";
import cat from "../elderScrollsPhotos/Cat.png"
import CharacterNameGenerator from "../Components/CharacterNameGenerator";
function Khajiit(props) {

    return (
        <div>
        <div className="flex w-full relative z-0 justify-center lg:w-auto">
          <div className="flex w-auto display:flex w-auto h-auto pt-16 hidden lg:block">
            <img
              className="object-cover shadow-md shadow-gray-500 rounded-lg object-fill
                       transform transition duration-500 hover:scale-105 border-stone-700 border-double border-8"
              src={cat}
              alt="cat"
            />
          </div>
          <div
            className="text-[white] font-Rubik
              self-center h-auto lg:pl-16 w-full lg:w-1/2 mt-16 lg:mt-0 p-4"
          >
            <h1 className="justify-center text-3xl md:text-3xl lg:text-4xl font-bold text-lg w-3/4 text-[#d7b15b]">Khajiit Character Name Generator</h1>
            <p className="pt-6  text-base md:text-lg lg:text-lg"> Khajiit are cat-like people who come from Elsweyr, known for high
                        intelligence and agility. These traits make them very good thieves and acrobats, but Khajiit are also fearsome warriors. They are rarely known to be mages.
                        Khajiit mostly stay on land, but piracy does draw some to work as sailors.</p>
          </div>
        </div>
        <CharacterNameGenerator race={"Khajiit"} series = {"Elder-Scrolls"} />
      </div>
    );
  }

export default Khajiit;