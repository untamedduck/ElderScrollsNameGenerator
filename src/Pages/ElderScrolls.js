import React from 'react';
import {raceList} from "../arrayHold/raceList";
import Race from "../Components/Race"
import { Link } from 'react-router-dom';
function ElderScrolls() {
    return (
        <div className = "display: flex flex-col h-auto w-full justify-center relative z-0">
            <div className= "display:flex self-center w-auto lg:w-1/2 mt-16 pl-8">
                <h1 className="display-flex: text-[#d7b15b] text-2xl md:text-2xl lg:text-4xl font-Rubik font-bold">Elder Scrolls Name Generator</h1>
                <p className = "text-[white] font-Rubik text-base md:text-lg lg:text-lg pt-3">Starting up a new game and need a name for your brand new adventure?
                    look no further, this Elder-Scrolls name generator has got you covered, just select the race you're playing from below.</p>
            </div>
            <div className = "display:flex w-1/2 h-auto display: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center
             justify-evenly gap-5 translate-y-20 self-center">
                {raceList.map((race, key) => {
                    return (

                        <div className="object-cover shadow-md shadow-gray-500 rounded-lg object-fill
             cursor-pointer transform transition duration-500 hover:scale-105 border-stone-700 border-double border-8">
                            <Link to={race.link}
                                  key = {key}>
                                <img src = {race.image} onClick={() => {}}/>
                            </Link>
                        </div>

                    );
                    })}
            </div>
        </div>
    );
}

export default ElderScrolls;