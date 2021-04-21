import * as React from "react";
import { signInWithGoogle } from "../services/firebase";
import { useEffect, useContext, useState } from "react";
import { UserContext, getUser, setUser, User } from "../providers/UserProvider";
import { useFetch } from "../utils/useFetch";
import { useHistory } from "react-router-dom";

import { API_URL } from "../App";

interface Props {}

export const Login: React.FC<Props> = () => {
  const context = useContext(UserContext);
  const [user, setData] = useState({} as User);

  // useEffect(() => {
  // }, []);

  const loadUser = async () => {
    if (context.gUser) {
      const res = await fetch(API_URL + `/user?uid=${context.gUser?.id}`);
      const data = await res.json();
      // console.log(data);
      if (data.uid) {
        setData(data);
        // console.log(data);
        return data;
      }
    }
    return null;
  };
  console.log("login");

  const history = useHistory();
  if (!context.loading) {
    if (context.gUser) {
      loadUser()
        .then((data) => {
          if (data?.uid) {
            setUser(data);
            history.push("/");
          } else {
            history.push("/register");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <div className="App">
      <header>Login</header>
      {context.loading ? (
        <div>loading</div>
      ) : (
        <div className="login-buttons">
          <button className="login-provider-button" onClick={signInWithGoogle}>
            <span> Login with Goog</span>
          </button>
        </div>
      )}
    </div>
  );
};
