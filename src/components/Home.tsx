import * as React from "react";
import { getUser } from "../providers/UserProvider";
import { Header } from "./Header";
import { ToolExplorePage } from "./ToolExplorePage";
import { ToolStarredPage } from "./ToolStarredPage";
interface Props {}

export const Home: React.FC<Props> = () => {
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    setUser(getUser());
  }, []);
  return (
    <div className="App">
      <Header page="Avocado" />
      {user ? <ToolStarredPage /> : <ToolExplorePage />}
    </div>
  );
};
