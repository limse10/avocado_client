import * as React from "react";
import logo from "../img/avocado.svg";
import { useHistory } from "react-router-dom";

import { useContext } from "react";
import { UserContext, getUser, resetUser } from "../providers/UserProvider";

interface Props {
  page: string;
}

export const Header: React.FC<Props> = ({ page }) => {
  const context = useContext(UserContext);

  const history = useHistory();
  // const { data, loading } = useFetch(
  //   API_URL + `/user?uid=${context.gUser?.id}`
  // );
  const user = getUser();

  const redirectToTarget = () => {
    history.push(`/`);
    return;
  };
  const redirectToLogin = () => {
    history.push("/login");
    return <div />;
  };

  if (context.gUser && !user?.uid) {
    resetUser();
  }
  return (
    <div className="Header">
      <img
        src={logo}
        onClick={redirectToTarget}
        className="App-logo"
        alt="logo"
        height="100vh"
      />
      <h1>{page}</h1>
      {context.gUser && user?.uid ? (
        <div>
          <header>hello {user.username}</header>
          <button className="logout-button" onClick={resetUser}>
            <span> logout</span>
          </button>
        </div>
      ) : (
        <div className="login-buttons">
          <button className="login-provider-button" onClick={redirectToLogin}>
            {/* <img
              src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
              alt="google icon"
            /> */}
            <span> Login</span>
          </button>
        </div>
      )}
    </div>
  );
};
