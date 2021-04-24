import * as React from "react";
import { useHistory } from "react-router-dom";
import { API_URL, Tool } from "../App";
import { getAuthToken, getUser, UserContext } from "../providers/UserProvider";
import { useFetch } from "../utils/useFetch";

interface Props {
  tool: Tool;
}

export const ToolCard: React.FC<Props> = ({ tool }) => {
  const history = useHistory();
  const context = React.useContext(UserContext);

  const redirectToTarget = () => {
    history.push(`/t/${tool.id}`);
    return;
  };
  const starTool = (e: any) => {
    e.stopPropagation();
    if (context.gUser && context.gUser.id) {
      getAuthToken().then((token) => {
        const post_data = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            uid: context.gUser?.id,
            tool: tool.id,
          }),
        };
        fetch(API_URL + "/u/addStar", post_data);
      });
    }
  };
  return (
    <div onClick={redirectToTarget} className="ToolCard">
      <p>{tool.name}</p>
      <p>by {tool.author}</p>
      <p>{tool.description}</p>
      {context?.gUser?.id ? <div onClick={starTool}>star</div> : null}
    </div>
  );
};
