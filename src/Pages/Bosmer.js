import React from "react";
import bosmer from "../elderScrollsPhotos/WoodElf.png"
import CharacterNameGenerator from "../Components/CharacterNameGenerator";



function Bosmer(props) {    
    return (
        <div>
          <div className="flex w-full relative z-0 justify-center lg:w-auto">
            <div className="flex w-auto display:flex w-auto h-auto pt-16 hidden lg:block">
              <img
                className="object-cover shadow-md shadow-gray-500 rounded-lg object-fill
                         transform transition duration-500 hover:scale-105 border-stone-700 border-double border-8"
                src={bosmer}
                alt="Bosmer"
              />
            </div>
            <div
              className="text-[white] font-Rubik
                self-center h-auto lg:pl-16 w-full lg:w-1/2 mt-16 lg:mt-0 p-4"
            >
              <h1 className="justify-center text-3xl md:text-3xl lg:text-4xl font-bold text-lg w-3/4 text-[#d7b15b]"> Wood Elf Character Name Generator</h1>
              <p className="pt-6  text-base md:text-lg lg:text-lg"> Bosmer (also called Wood Elves) are the elven people of Valenwood. They prefer a simple existence,
                        living in harmony with the land and wild animals. They are known to be the best archers in all of Tamriel and are known for their ability to command wild creatures.
                        They make great scouts or thieves, due to their natural stealth and light footing.</p>
            </div>
          </div>
          <CharacterNameGenerator race={"Wood-Elf"} series = {"Elder-Scrolls"} />
        </div>
      );
    }



      



export default Bosmer;