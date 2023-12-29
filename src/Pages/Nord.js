import React from "react";
import nord from "../elderScrollsPhotos/Nord.png"
import CharacterNameGenerator from "../Components/CharacterNameGenerator";
function Nord (props) {
    
    return (
        <div>
        <div className="flex w-full relative z-0 justify-center lg:w-auto">
          <div className="flex w-auto display:flex w-auto h-auto pt-16 hidden lg:block">
            <img
              className="object-cover shadow-md shadow-gray-500 rounded-lg object-fill
                       transform transition duration-500 hover:scale-105 border-stone-700 border-double border-8"
              src={nord}
              alt="nord"
            />
          </div>
          <div
            className="text-[white] font-Rubik
              self-center h-auto lg:pl-16 w-full lg:w-1/2 mt-16 lg:mt-0 p-4"
          >
            <h1 className="justify-center text-3xl md:text-3xl lg:text-4xl font-bold text-lg w-3/4 text-[#d7b15b]">Nord Character Name Generator</h1>
            <p className="pt-6  text-base md:text-lg lg:text-lg"> Nords are the Children of the Sky, a race of tall and fair-haired humans from Skyrim who are known for their
                        incredible resistance to cold and magical frost. They are fierce, strong and enthusiastic warriors, and many become renowned warriors, soldiers and mercenaries all
                        over Tamriel. Eager to augment their martial skills beyond the traditional methods of Skyrim, they excel in all manner of warfare, and are known as a militant
                        people by their neighbors.Nords were known for a time for their nautical prowess when they migrated from Atmora. </p>
          </div>
        </div>
        <CharacterNameGenerator race={"Nord"} series = {"Elder-Scrolls"} />
      </div>
    );
  }

export default Nord;