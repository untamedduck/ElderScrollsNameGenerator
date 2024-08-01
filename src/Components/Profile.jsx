import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { useUser } from '../Components/UserContext';
import { auth, db } from '../firebase';
import { collection, getDocs, doc, deleteDoc, query, where } from 'firebase/firestore';

const Profile = () => {
  const user = useUser();
  const [savedNames, setSavedNames] = useState({});
  const [expandedSections, setExpandedSections] = useState({});

  const fetchSavedNames = async () => {
    if (user) {
      try {
        const userDocRef = doc(db, 'users', user.uid);
        const savedNamesCollectionRef = collection(userDocRef, 'savedNames');
        const querySnapshot = await getDocs(savedNamesCollectionRef);
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

        setSavedNames(groupedNames);
      } catch (error) {
        console.error("Error fetching saved names:", error);
      }
    }
  };

  useEffect(() => {
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
        const userDocRef = doc(db, 'users', user.uid);
        const savedNamesCollectionRef = collection(userDocRef, 'savedNames');
        const querySnapshot = await getDocs(
          query(savedNamesCollectionRef, where('series', '==', series), where('race', '==', race), where('gender', '==', gender), where('name', '==', name))
        );

        if (querySnapshot.size === 1) {
          const docToDeleteRef = querySnapshot.docs[0].ref;
          await deleteDoc(docToDeleteRef);

          console.log(`Name "${name}" deleted from user's profile.`);
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

  const toggleSection = (sectionPath) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionPath]: !prev[sectionPath]
    }));
  };

  const renderSection = (data, path) => (
    <div>
      {Object.entries(data).map(([key, value]) => {
        const newPath = path ? `${path}.${key}` : key;
        const isExpanded = !!expandedSections[newPath];
        const isLeaf = typeof value === 'string' || Array.isArray(value);
        return (
          <div key={newPath}>
            <div onClick={() => toggleSection(newPath)} className="cursor-pointer text-lg text-[#d7b15b]">
              {isExpanded ? '▼' : '▶'} {key}
            </div>
            {isExpanded && !isLeaf && (
              <div className="ml-4">
                {renderSection(value, newPath)}
              </div>
            )}
            {isExpanded && isLeaf && (
              <ul className="ml-4">
                {Array.isArray(value) ? value.map((name, index) => (
                  <li key={index} className="text-white">
                    {name}
                    <button onClick={() => handleDeleteClick(...newPath.split('.'), name)} className="text-sm ml-2 bg-[#d7b15b] text-black">
                      Delete Name
                    </button>
                  </li>
                )) : (
                  <li className="text-white">{value}</li>
                )}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div>
      {user ? (
        <div>
          <p className="text-2xl text-white">Welcome, {user.email}!</p>
          

          <h2 className="text-xl text-white">Saved Names:</h2>
          {renderSection(savedNames)}
          <button 
  className="text-xl bg-[#d7b15b] text-white px-4 py-2 border border-transparent rounded-md hover:bg-[#b6934d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d7b15b]"
  onClick={handleSignOut}
>
  Sign Out
</button>
        </div>
      ) : (
        <p>Not signed in</p>
      )}
    </div>
  );
};

export default Profile;
