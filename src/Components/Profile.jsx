import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { useUser } from '../Components/UserContext';
import { auth, db } from '../firebase';
import { collection, getDocs, doc, deleteDoc, query, where } from 'firebase/firestore';

const Profile = () => {
  const user = useUser();
  const [savedNames, setSavedNames] = useState([]);

  // Move fetchSavedNames function outside the useEffect
  const fetchSavedNames = async () => {
    if (user) {
      try {
        // Create a reference to the user's document in Firestore
        const userDocRef = doc(db, 'users', user.uid);

        // Create a reference to the savedNames collection inside the user's document
        const savedNamesCollectionRef = collection(userDocRef, 'savedNames');

        // Fetch all documents from the savedNames collection
        const querySnapshot = await getDocs(savedNamesCollectionRef);

        // Organize names into a nested structure (grouped by series, race, gender)
        const groupedNames = {};

        querySnapshot.docs.forEach(doc => {
          const data = doc.data();
          const { series, race, gender, name } = data;

          if (!groupedNames[series]) {
            groupedNames[series] = {};
          }

          if (!groupedNames[series][race]) {
            groupedNames[series][race] = {};
          }

          if (!groupedNames[series][race][gender]) {
            groupedNames[series][race][gender] = [];
          }

          groupedNames[series][race][gender].push(name);
        });

        // Set the savedNames state with the grouped data
        setSavedNames(groupedNames);
      } catch (error) {
        console.error("Error fetching saved names:", error);
      }
    }
  };

  useEffect(() => {
    // Call the function to fetch saved names
    fetchSavedNames();
  }, [user]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  const handleDeleteClick = async (series, race, gender, name) => {
    if (user) {
      try {
        // Create a reference to the user's document in Firestore
        const userDocRef = doc(db, 'users', user.uid);
  
        // Create a reference to the savedNames collection inside the user's document
        const savedNamesCollectionRef = collection(userDocRef, 'savedNames');
  
        // Use where to find the specific document with matching fields
        const querySnapshot = await getDocs(
          query(savedNamesCollectionRef, where('series', '==', series), where('race', '==', race), where('gender', '==', gender), where('name', '==', name))
        );
  
        // Assuming there's only one document matching the query, delete it
        if (querySnapshot.size === 1) {
          const docToDeleteRef = querySnapshot.docs[0].ref;
          await deleteDoc(docToDeleteRef);
  
          console.log(`Name "${name}" deleted from user's profile.`);
  
          // After deletion, fetch and update the names to reflect the changes
          fetchSavedNames();
        } else {
          console.error(`Error: Found ${querySnapshot.size} matching documents. Unable to delete.`);
        }
      } catch (error) {
        console.error("Error deleting name:", error);
      }
    } else {
      console.log('User not logged in. Redirecting to login page or showing login prompt.');
    }
  };
  
  

  return (
    <div>
      {user ? (
        <div>
          <p className="text-2xl text-white" >Welcome, {user.email}!</p>
          <button className="text-2xl bg-[#d7b15b] text-black"  onClick={handleSignOut}>Sign Out</button>
          <h2>Saved Names:</h2>
          {Object.entries(savedNames).map(([series, seriesData]) => (
            <div key={series}>
              <h3 className="text-2xl text-[#d7b15b]">{series}</h3>
              {Object.entries(seriesData).map(([race, raceData]) => (
                <div key={race}>
                  <h4 className="text-xl text-[#d7b15b]">{race}</h4>
                  {Object.entries(raceData).map(([gender, names]) => (
                    <div key={gender}>
                      <p className="text-lg text-[#d7b15b]">{gender}</p>
                      <ul>
                        {names.map((name, index) => (
                          <li key={index} className="text-lg text-white">
                            {name}
                            <button onClick={() => handleDeleteClick(series, race, gender, name)} className=" text-sm ml-2 bg-[#d7b15b] text-black">
                              Delete Name
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p>Not signed in</p>
      )}
    </div>
  );
};

export default Profile;
