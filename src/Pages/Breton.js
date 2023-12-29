import React from "react";
import breton from "../elderScrollsPhotos/Breton.png"
import CharacterNameGenerator from "../Components/CharacterNameGenerator";


function Breton(props) {
    return (
        <div>
          <div className="flex w-full relative z-0 justify-center lg:w-auto">
            <div className="flex w-auto display:flex w-auto h-auto pt-16 hidden lg:block">
              <img
                className="object-cover shadow-md shadow-gray-500 rounded-lg object-fill
                         transform transition duration-500 hover:scale-105 border-stone-700 border-double border-8"
                src={breton}
                alt="breton"
              />
            </div>
            <div
              className="text-[white] font-Rubik
                self-center h-auto lg:pl-16 w-full lg:w-1/2 mt-16 lg:mt-0 p-4"
            >
              <h1 className="justify-center text-3xl md:text-3xl lg:text-4xl font-bold text-lg w-3/4 text-[#d7b15b]"> Breton Character Name Generator</h1>
              <p className="pt-6  text-base md:text-lg lg:text-lg"> Bretons are a race of both human and elven ancestry that inhabit High Rock.
                        If Bretons are humans or elves is a topic of debate, with most people believing that they are the former. High Rock is fractious and divided politically, which is seemingly
                        encouraged by the layout of the land itself. Warfare between kingdoms accounts for much of Breton history. Despite this, Bretons across the province share many facets of culture,
                        including language, bardic traditions, and heroic tales.</p>
            </div>
          </div>
          <CharacterNameGenerator race={"Breton"} series = {"Elder-Scrolls"} />
        </div>
      );
    }


export default Breton;