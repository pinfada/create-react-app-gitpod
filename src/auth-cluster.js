// File: ./src/auth-cluster.js

import React, { useState, useEffect } from "react";
import * as fcl from '@onflow/fcl';

export function AuthCluster() {
  const [user, setUser] = useState({ loggedIn: null });
  useEffect(() => fcl.currentUser().subscribe(setUser), []);

  // On vérifie si l'utilisateur s'est authentifié, si c'est le cas :
  // Affichage de l'adresse de l'utilisateur et du bouton de déconnexion
  if (user.loggedIn) {
    return (
      <div>
        <span>{user?.addr ?? "No Address"}</span>
        <button onClick={fcl.unauthenticate}>Log Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={fcl.logIn}>Log In</button>
        <button onClick={fcl.signUp}>Sign Up</button>
      </div>
    );
  }
}