import React from 'react';


function Race({image,name}) {
    return (


            <img className="object-cover shadow-md shadow-gray-100 rounded-lg object-fill
             cursor-pointer transform transition duration-500 hover:scale-110 border-b-gray-600 border-double border-8" src = {image} alt = "races"/>



    );
}

export default Race;