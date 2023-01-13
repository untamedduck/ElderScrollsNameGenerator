import React from 'react';
import {raceList} from "../arrayHold/raceList";
import Race from "../Components/Race"
function ElderScrolls(props) {
    return (
        <div className = "w-full display: flex justify-center m-5 relative z-0">
                <div className = " w-1/2 h-auto display: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-evenly gap-5 ">
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