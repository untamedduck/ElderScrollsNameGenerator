import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { useUser } from '../Components/UserContext';
import { auth, db } from '../firebase';
import { collection, getDocs , doc} from 'firebase/firestore';

const Profile = () => {
  const user = useUser();
  const [savedNames, setSavedNames] = useState([]);

  useEffect(() => {
    const fetchSavedNames = async () => {
      if (user) {
        try {
          // Create a reference to the user's document in Firestore
          const userDocRef = doc(db, 'users', user.uid);
  
          // Create a reference to the savedNames collection inside the user's document
          const savedNamesCollectionRef = collection(userDocRef, 'savedNames');
  
          // Fetch all documents from the savedNames collection
          const querySnapshot = await getDocs(savedNamesCollectionRef);
  
          // Extract the names from the documents
          const names = querySnapshot.docs.map(doc => doc.data().name);
  
          // Set the savedNames state
          setSavedNames(names);
        } catch (error) {
          console.error("Error fetching saved names:", error);
        }
      }
    };

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

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.email}!</p>
          <button onClick={handleSignOut}>Sign Out</button>
          <h2>Saved Names:</h2>
          <ul>
            {savedNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Not signed in</p>
      )}
    </div>
  );
};

export default Profile;
