import React from 'react';
import {raceList} from "../arrayHold/raceList";
import Race from "../Components/Race"
function ElderScrolls() {
    return (
        <div className = "display: flex flex-col h-auto w-full justify-center relative z-0">
            <div className= "display:flex self-center w-1/2">
                <h1 className="display-flex: text-[white] text-2xl md:text-2xl lg:text-4xl font-Rubik font-medium text-lg">Elder Scrolls Name Generator</h1>
                <p className = "text-[white] font-Rubik ">Starting up a new game and need a name for your brand new adventure? look no further, this Elder-Scrolls name
                generator has got you covered, just select the race your playing from below.</p>
            </div>
            <div className = "display:flex w-1/2 h-auto display: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-evenly gap-5 translate-y-20 self-center">
                {raceList.map((race, key) => {
                    return (
                        <Race
                            key ={key}
                            image={race.image}
                        />
                    );
                    })}
            </div>
        </div>
    );
}

export default ElderScrolls;