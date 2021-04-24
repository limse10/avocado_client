import * as React from "react";
import { signInWithGoogle } from "../services/firebase";
import { useContext } from "react";
import { UserContext, setUser } from "../providers/UserProvider";
import { useHistory } from "react-router-dom";

import { API_URL } from "../App";

interface Props {}

export const Login: React.FC<Props> = () => {
  const context = useContext(UserContext);

  const loadUser = async () => {
    if (context.gUser) {
      const res = await fetch(API_URL + `/user?uid=${context.gUser?.id}`);
      const data = await res.json();
      if (data.uid) {
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
