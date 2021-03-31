import * as React from "react";
import { useHistory } from "react-router-dom";
import { Tool } from "../App";

interface Props {
  tool: Tool;
}

export const ToolCard: React.FC<Props> = ({ tool }) => {
  const history = useHistory();
  const redirectToTarget = () => {
    history.push(`/t/${tool.id}`);
    return;
  };
  return (
    <div onClick={redirectToTarget} className="ToolCard">
      <p>{tool.name}</p>
      <p>by {tool.author}</p>
      <p>{tool.description}</p>
    </div>
  );
};
