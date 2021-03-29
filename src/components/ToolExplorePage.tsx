import * as React from "react";
import { ToolCard } from "./ToolCard";

interface Props {}

const tools = [
  { id: "1", name: "shaoboi" },
  { id: "2", name: "shaoboi2" },
  { id: "3", name: "shaoboi3" },
  { id: "4", name: "shaoboi4" },
  { id: "5", name: "shaoboi5" },
  { id: "6", name: "shaoboi6" },
  { id: "7", name: "shaoboi7" },
  { id: "8", name: "shaoboi8" },
];

export const ToolExplorePage: React.FC<Props> = () => {
  return (
    <div className="ToolExplorePage">
      <div className="ToolsGrid">
        {tools.map((t) => (
          <ToolCard id={t.id} name={t.name} />
        ))}
      </div>
    </div>
  );
};
