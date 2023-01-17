import React from 'react';
function Radio(props) {
    return (
        <div>

            <div className="flex items-center mb-4">
                <input id="default-radio-1" type="radio" value="" name="default-radio"
                       className="w-6 h-6 text-gray-600 bg-gray-100 border-gray-50 focus:ring-gray-500 focus:ring-2"/>
                    <label htmlFor="default-radio-1"
                           className="ml-2 text-white dark:text-gray-300 font-Rubik text-base md:text-lg lg:text-lg">Male</label>
            </div>
            <div className="flex items-center">
                <input id="default-radio-3" type="radio" value="" name="default-radio"
                       className="w-6 h-6 text-gray-600 bg-gray-100 border-gray-50 focus:ring-gray-500 focus:ring-2"/>
                <label htmlFor="default-radio-3"
                       className="ml-2 text-white dark:text-gray-300 font-Rubik text-base md:text-lg lg:text-lg">Female</label>
            </div>

            <div className="flex items-center mt-4">
                <input defaultChecked id="default-radio-2" type="radio" value="" name="default-radio"
                       className="w-6 h-6 text-gray-600 bg-gray-100 border-gray-50 focus:ring-gray-500 focus:ring-2"/>
                    <label htmlFor="default-radio-2"
                           className="ml-2 text-white dark:text-gray-300 font-Rubik text-base md:text-lg lg:text-lg">Neutral</label>
            </div>

        </div>
    );
}

export default Radio;