import React from "react";
import dunmer from "../elderScrollsPhotos/DarkElf.png"
import CharacterNameGenerator from "../Components/CharacterNameGenerator";

function Dunmer(props) {
    return (
        <div>
          <div className="flex w-full relative z-0 justify-center lg:w-auto">
            <div className="flex w-auto display:flex w-auto h-auto pt-16 hidden lg:block">
              <img
                className="object-cover shadow-md shadow-gray-500 rounded-lg object-fill
                         transform transition duration-500 hover:scale-105 border-stone-700 border-double border-8"
                src={dunmer}
                alt="Dunmer"
              />
            </div>
            <div
              className="text-[white] font-Rubik
                self-center h-auto lg:pl-16 w-full lg:w-1/2 mt-16 lg:mt-0 p-4"
            >
              <h1 className="justify-center text-3xl md:text-3xl lg:text-4xl font-bold text-lg w-3/4 text-[#d7b15b]"> Dark Elf Character Name Generator</h1>
              <p className="pt-6  text-base md:text-lg lg:text-lg"> The Dunmer, also known as Dark Elves,
                            are the grey-skinned, typically red-eyed elven peoples of Morrowind. In the Empire, "Dark Elf" is the common usage, but they and their Aldmeri brethren prefer
                            the term "Dunmer". "Dark" is variously interpreted as meaning "dark-skinned", "gloomy", and "ill-favored by fate", with the Dunmer and their national identity
                            embracing these various connotations with enthusiasm.</p>
            </div>
          </div>
          <CharacterNameGenerator race={"Dark-Elf"} series = {"Elder-Scrolls"} />
        </div>
      );
    }

export default Dunmer;

