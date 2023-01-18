import React from 'react';
function Radio(props) {
    return (
        <div>
        <div className= "hidden lg:block">
            <div className="flex items-center mb-4">
                <input id="default-radio-1" type="radio" value="" name="default-radio"
                       className="w-6 h-6 text-gray-600 bg-gray-100 border-gray-50 focus:ring-gray-500 focus:ring-2 cursor-pointer"/>
                    <label htmlFor="default-radio-1"
                           className="ml-2 text-white dark:text-gray-300 font-Rubik text-base md:text-lg lg:text-lg cursor-pointer">Male</label>
            </div>
            <div className="flex items-center">
                <input id="default-radio-3" type="radio" value="" name="default-radio"
                       className="w-6 h-6 text-gray-600 bg-gray-100 border-gray-50 focus:ring-gray-500 focus:ring-2 cursor-pointer"/>
                <label htmlFor="default-radio-3"
                       className="ml-2 text-white dark:text-gray-300 font-Rubik text-base md:text-lg lg:text-lg cursor-pointer">Female</label>
            </div>

            <div className="flex items-center mt-4">
                <input defaultChecked id="default-radio-2" type="radio" value="" name="default-radio"
                       className="w-6 h-6 text-gray-600 bg-gray-100 border-gray-50 focus:ring-gray-500 focus:ring-2 cursor-pointer"/>
                    <label htmlFor="default-radio-2"
                           className="ml-2 text-white dark:text-gray-300 font-Rubik text-base md:text-lg lg:text-lg cursor-pointer ">Neutral</label>
            </div>
        </div>

            <div className="flex lg:hidden">
                <div className="flex items-center mr-4">
                    <input id="inline-radio" type="radio" value="" name="inline-radio-group"
                           className="w-6 h-6 text-gray-600 bg-gray-100 border-gray-50 focus:ring-gray-500 focus:ring-2 cursor-pointer"/>
                        <label htmlFor="inline-radio"
                               className="ml-2 text-white dark:text-gray-300 font-Rubik text-base md:text-lg lg:text-lg cursor-pointer">Male</label>
                </div>
                <div className="flex items-center mr-4">
                    <input id="inline-2-radio" type="radio" value="" name="inline-radio-group"
                           className="w-6 h-6 text-gray-600 bg-gray-100 border-gray-50 focus:ring-gray-500 focus:ring-2 cursor-pointer"/>
                        <label htmlFor="inline-2-radio"
                               className="ml-2 text-white dark:text-gray-300 font-Rubik text-base md:text-lg lg:text-lg cursor-pointer">Female</label>
                </div>
                <div className="flex items-center mr-4">
                    <input checked id="inline-checked-radio" type="radio" value="" name="inline-radio-group"
                           className="w-6 h-6 text-gray-600 bg-gray-100 border-gray-50 focus:ring-gray-500 focus:ring-2 cursor-pointer"/>
                        <label htmlFor="inline-checked-radio"
                               className="ml-2 text-white dark:text-gray-300 font-Rubik text-base md:text-lg lg:text-lg cursor-pointer">Neutral </label>
                </div>
            </div>

        </div>



    );
}

export default Radio;