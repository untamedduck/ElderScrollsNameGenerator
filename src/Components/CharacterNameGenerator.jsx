import React, { useState, useRef, useEffect } from "react";
import Radio from "./Radio";
import { getFirestore, collection, getDoc,doc } from "firebase/firestore";
import { db } from "../firebase"

function CharacterNameGenerator(props) {
  const [gender, setGender] = useState("neutral");
  const [names, setNames] = useState([]);

  const namesContainerRef = useRef(null);

  const handleRadioChange = (newGender) => {
    setGender(newGender);
  };


  
  const handleClick = async () => {
    try {
      const namesSnapshot =
        gender === "Male"
          ? await getDoc(
              doc(db, props.series, props.race, "Names", "Male-First-Names")
            )
          : await getDoc(
              doc(db,  props.series, props.race, "Names", "Female-First-Names")
            );
  
      const lastNamesSnapshot = await getDoc(
        doc(db,  props.series, props.race, "Names", "Last-Names")
      );
  
      const namesData = namesSnapshot.data();
      const lastNamesData = lastNamesSnapshot.data();
  
      if (namesData && lastNamesData) {
        let generatedNames = [];
  
        for (let i = 0; i < 5; i++) {
          let firstName =
            namesData.names[
              Math.floor(Math.random() * namesData.names.length)
            ];
          let lastName =
            lastNamesData.names[
              Math.floor(Math.random() * lastNamesData.names.length)
            ];
          generatedNames.push(`${firstName} ${lastName}`);
        }
  
        setNames(generatedNames);
      } 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
    
  

  useEffect(() => {
    if (namesContainerRef.current) {
      namesContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [names]);

  return (
    <div className="flex w-full relative z-0 justify-center lg:w-auto flex-wrap">
      <div className="grid max-h-24 w-auto relative z-0 justify-center lg:w-auto mt-4">
        <button
          onClick={handleClick}
          className="bg-[#d7b15b] text-[#1c181b] font-bold py-2 px-4
          rounded font-Rubik lg:w-56 h-14 w-full hover:bg-[#ded2ae] transform transition duration-500 hover:scale-105 "
        >
          Generate names
        </button>
        <div className="mt-4">
          <Radio onChange={handleRadioChange} />
        </div>
      </div>

      <div
        className="text-[white] font-Rubik self-center w-full lg:pl-16 lg:w-1/2 mt-4 lg:mt-0 lg:p-4"
        ref={namesContainerRef}
      >
        <div className="justify-center md:text-3xl lg:text-2xl font-bold text-lg text-[#] w-auto pl-4 lg:pl-0">
          {names.map((name, i) => (
            <div className="mb-2" key={i}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default CharacterNameGenerator;
