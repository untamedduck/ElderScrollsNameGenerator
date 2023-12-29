// Profile.jsx
import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from'../firebase';
const Profile = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsSignedIn(!!user);
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <div>
      {isSignedIn ? (
        <div>
          <p>Welcome, User!</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <p>Not signed in</p>
      )}
    </div>
  );
};

export default Profile;
