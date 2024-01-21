import React from "react";
import { signOut } from "firebase/auth";
import { useUser } from '../Components/UserContext';
import { auth } from '../firebase';

const Profile = () => {
  const user = useUser();

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
        </div>
      ) : (
        <p>Not signed in</p>
      )}
    </div>
  );
};

export default Profile;
