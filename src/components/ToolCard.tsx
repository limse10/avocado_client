import * as React from "react";
import { useHistory } from "react-router-dom";

interface Props {
  id: string;
  name: string;
}

export const ToolCard: React.FC<Props> = ({ id, name }) => {
  const history = useHistory();
  const redirectToTarget = () => {
    history.push(`/t/${id}`);
    return;
  };
  return (
    <div onClick={redirectToTarget} className="ToolCard">
      <p>{id}</p>
      <p>{name}</p>
    </div>
  );
};
