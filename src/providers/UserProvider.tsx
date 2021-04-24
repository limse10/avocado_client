import React, { useState, useEffect, createContext } from "react";
import { auth } from "../services/firebase";
import { logOut } from "../services/firebase";

export interface User {
  id: string;
  uid: string;
  username: string;
}

interface GUser {
  id: string;
  name: string;
  email: string;
}

interface Context {
  gUser: GUser | null;
  loading: boolean;
}

export const UserContext = createContext({
  gUser: null,
  loading: true,
} as Context);

export const getUser = () => {
  const userString = localStorage.getItem("user");
  if (!userString) {
    return null;
  }
  const user = JSON.parse(userString);
  return user;
};

export const setUser = (user: any) => {
  console.log("setting user", user);
  localStorage.setItem("user", JSON.stringify(user));
};

export const resetUser = () => {
  console.log("resetuser");
  localStorage.removeItem("user");
  logOut();
};

export const getAuthToken = async () => {
  const token = await auth.currentUser?.getIdToken();
  return token;
};

export default (props: any) => {
  const [gUser, setgUser] = useState<GUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    auth.onAuthStateChanged(async (gUser: any) => {
      if (gUser) {
        const { uid, displayName, email } = gUser;
        setgUser({
          id: uid,
          name: displayName,
          email: email,
        });
      } else {
        setgUser(gUser);
      }
      setLoading(false);
    });
  }, []);
  return (
    <UserContext.Provider value={{ gUser: gUser, loading: loading }}>
      {props.children}
    </UserContext.Provider>
  );
};
