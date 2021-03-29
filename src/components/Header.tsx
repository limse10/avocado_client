import * as React from "react";
import logo from "../img/avocado.svg";
import { useHistory } from "react-router-dom";

interface Props {
  page: string;
}

export const Header: React.FC<Props> = ({ page }) => {
  const history = useHistory();
  const redirectToTarget = () => {
    history.push(`/`);
    return;
  };
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
    </div>
  );
};

// export default Header;
