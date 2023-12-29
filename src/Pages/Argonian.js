import React from "react";
import argonian from "../elderScrollsPhotos/Argonian.png"
import CharacterNameGenerator from "../Components/CharacterNameGenerator";



function Argonian(props) {
    return (
        <div>
          <div className="flex w-full relative z-0 justify-center lg:w-auto">
            <div className="flex w-auto display:flex w-auto h-auto pt-16 hidden lg:block">
              <img
                className="object-cover shadow-md shadow-gray-500 rounded-lg object-fill
                         transform transition duration-500 hover:scale-105 border-stone-700 border-double border-8"
                src={argonian}
                alt = "argonian"
              />
            </div>
            <div
              className="text-[white] font-Rubik
                self-center h-auto lg:pl-16 w-full lg:w-1/2 mt-16 lg:mt-0 p-4"
            >
              <h1 className="justify-center text-3xl md:text-3xl lg:text-4xl font-bold text-lg w-3/4 text-[#d7b15b]"> Argonian Character Name Generator</h1>
              <p className="pt-6  text-base md:text-lg lg:text-lg"> Argonians or Saxhleel are an oviparous race of reptilian people native to the large and marshy province of Tamriel known as Black Marsh. They can be found in smaller numbers throughout the continent.
                        argonians are one of the few races completely unrelated to men and mer, who think of themselves as coming from, and ultimately returning to, the Hist. </p>
            </div>
          </div>
          <CharacterNameGenerator race={"Argonian"} series = {"Elder-Scrolls"} />
        </div>
      );
    }

export default Argonian;