import React, {useState} from 'react';

function Radio(props) {
 const[gender,setGender] = useState("");
    return (
        <div className="">


        <div className= "inline-flex lg:flex-col">
            <div className="flex items-center lg:mb-4 mr-4 w-auto">
                <input id="default-radio-1" type="radio" value="Male" name="default-radio" onChange = {e => props.onChange(e.target.value)}
                       className="w-6 h-6 text-gray-600 bg-gray-100 border-gray-50 focus:ring-gray-500 focus:ring-2 cursor-pointer"/>
                    <label htmlFor="default-radio-1"
                           className="ml-2 text-white dark:text-gray-300 font-Rubik text-base md:text-lg lg:text-lg cursor-pointer">Male</label>
            </div>
            <div className="flex items-center lg:mb-4 mr-4">
                <input id="default-radio-3" type="radio" value="Female" name="default-radio"  onChange = {e => props.onChange(e.target.value)}
                       className="w-6 h-6 text-gray-600 bg-gray-100 border-gray-50 focus:ring-gray-500 focus:ring-2 cursor-pointer"/>
                <label htmlFor="default-radio-3"
                       className="ml-2 text-white dark:text-gray-300 font-Rubik text-base md:text-lg lg:text-lg cursor-pointer">Female</label>
            </div>

            <div className="flex items-center mr-4 hidden">
                <input defaultChecked id="default-radio-2" type="radio" value="Neutral" name="default-radio"
                       className="w-6 h-6 text-gray-600 bg-gray-100 border-gray-50 focus:ring-gray-500 focus:ring-2 cursor-pointer"/>
                    <label htmlFor="default-radio-2"
                           className="ml-2 text-white dark:text-gray-300 font-Rubik text-base md:text-lg lg:text-lg cursor-pointer ">Neutral</label>
            </div>
        </div>
        </div>



    );
}

export default Radio;