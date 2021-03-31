// import * as React from "react";
import React, { useState, useEffect } from "react";
import { ToolCard } from "./ToolCard";
import { useFetch } from "../utils/useFetch";
import { Tool, API_URL } from "../App";

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

export const ToolExplorePage: React.FC<Props> = () => {
  const [tools, setTools] = useState([]);
  const { data, loading } = useFetch(API_URL + "/ls");
  return (
    <div className="ToolExplorePage">
      <div className="ToolsGrid">
        {data.tools?.map((t: Tool) => (
          <ToolCard tool={t} />
        ))}
      </div>
    </div>
  );
};
