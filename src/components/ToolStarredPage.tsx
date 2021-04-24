// import * as React from "react";
import React from "react";
import { ToolCard } from "./ToolCard";
import { useFetch } from "../utils/useFetch";
import { Tool, API_URL } from "../App";
import { useState } from "react";
import { getUser } from "../providers/UserProvider";

interface Props {}

// const tools = [
//   { id: "1", name: "shaoboi" },
//   { id: "2", name: "shaoboi2" },
//   { id: "3", name: "shaoboi3" },
//   { id: "4", name: "shaoboi4" },
//   { id: "5", name: "shaoboi5" },
//   { id: "6", name: "shaoboi6" },
//   { id: "7", name: "shaoboi7" },
//   { id: "8", name: "shaoboi8" },
// ];

export const ToolStarredPage: React.FC<Props> = () => {
  const { data, loading } = useFetch(
    API_URL + `/u/starred?uid=${getUser().uid}`
  );
  return (
    <div className="ToolExplorePage">
      <h1>Your Starred Tools</h1>
      <div className="ToolsGrid">
        {data.tools?.map((t: Tool) => (
          <ToolCard tool={t} />
        ))}
      </div>
    </div>
  );
};
