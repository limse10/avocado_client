import * as React from "react";
import { Header } from "./Header";
import { ToolExplorePage } from "./ToolExplorePage";
interface Props {}

export const Home: React.FC<Props> = () => {
  return (
    <div className="App">
      <Header page="Avocado" />
      <ToolExplorePage />
    </div>
  );
};
