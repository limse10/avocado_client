import * as React from "react";
import { getUser } from "../providers/UserProvider";
import { Header } from "./Header";
import { ToolExplorePage } from "./ToolExplorePage";
interface Props {}

export const Explore: React.FC<Props> = () => {
  return (
    <div className="App">
      <Header page="Avocado" />
      <ToolExplorePage />
    </div>
  );
};
