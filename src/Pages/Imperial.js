import React from "react";
import imperial from "../elderScrollsPhotos/Imperial.png"
import CharacterNameGenerator from "../Components/CharacterNameGenerator";
function Imperial(props) {
    
    return (
            <div>
              <div className="flex w-full relative z-0 justify-center lg:w-auto">
                <div className="flex w-auto display:flex w-auto h-auto pt-16 hidden lg:block">
                  <img
                    className="object-cover shadow-md shadow-gray-500 rounded-lg object-fill
                             transform transition duration-500 hover:scale-105 border-stone-700 border-double border-8"
                    src={imperial}
                    alt="imperial"
                  />
                </div>
                <div
                  className="text-[white] font-Rubik
                    self-center h-auto lg:pl-16 w-full lg:w-1/2 mt-16 lg:mt-0 p-4"
                >
                  <h1 className="justify-center text-3xl md:text-3xl lg:text-4xl font-bold text-lg w-3/4 text-[#d7b15b]">  Imperial Character Name Generator</h1>
                  <p className="pt-6  text-base md:text-lg lg:text-lg"> the well-educated and well-spoken Imperials are the
                        natives of the civilized, cosmopolitan province of Cyrodiil. Imperials are also known for the discipline and training of their citizen armies, and their respect for the rule of law.
                        Imperials have proved to be shrewd diplomats and traders, and these traits, along with their remarkable skill and training as infantry,
                        have enabled them to colonize various other nations and create the Empire.
                        Their hegemony has waxed and waned throughout the eras, and most historians refer to three distinct Empires, the ends of which each mark a new epoch in Tamrielic history.</p>
                </div>
              </div>
              <CharacterNameGenerator race={"Imperial"} series = {"Elder-Scrolls"}/>
            </div>
          );
        }
    
export default Imperial;