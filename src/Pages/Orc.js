import React from "react";
import orc from "../elderScrollsPhotos/Orc.png"
import CharacterNameGenerator from "../Components/CharacterNameGenerator";

function Orc(props) {

    return (
        <div>
        <div className="flex w-full relative z-0 justify-center lg:w-auto">
          <div className="flex w-auto display:flex w-auto h-auto pt-16 hidden lg:block">
            <img
              className="object-cover shadow-md shadow-gray-500 rounded-lg object-fill
                       transform transition duration-500 hover:scale-105 border-stone-700 border-double border-8"
              src={orc}
              alt="orc"
            />
          </div>
          <div
            className="text-[white] font-Rubik
              self-center h-auto lg:pl-16 w-full lg:w-1/2 mt-16 lg:mt-0 p-4"
          >
            <h1 className="justify-center text-3xl md:text-3xl lg:text-4xl font-bold text-lg w-3/4 text-[#d7b15b]">Orc Character Name Generator</h1>
            <p className="pt-6  text-base md:text-lg lg:text-lg"> Orcs, also called Orsimer are noted for their unshakable courage in war and their unflinching
                        endurance of hardships. Orcs have elven blood, but are usually considered to be both Beastfolk and Goblin-ken.
                        In the past, Orcs were widely feared and hated by the other nations and races of Tamriel and were seen as nothing more than uncivilized beasts, savage barbarians.
                        The Orcs are as civilized as any of the other races, having worked hard to be seen as actual people. They have slowly won acceptance in the Empire, in
                        particular for their distinguished service in the Emperor's Legions.</p>
          </div>
        </div>
        <CharacterNameGenerator race={"Orc"} series = {"Elder-Scrolls"} />
      </div>
    );
  }

export default Orc;