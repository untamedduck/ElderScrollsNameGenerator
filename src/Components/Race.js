import React from 'react';


function Race({image}) {
    return (
            <img className="object-cover shadow-md shadow-gray-500 rounded-lg object-fill
             cursor-pointer transform transition duration-500 hover:scale-105 border-stone-700 border-double border-8" src = {image} alt = "races"/>
    );
}

export default Race;