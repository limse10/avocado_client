import * as React from "react";
import { Header } from "./Header";
import { useParams } from "react-router-dom";
import { useFetch } from "../utils/useFetch";
import { API_URL } from "../App";
interface Props {}

export const ToolPage: React.FC<Props> = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading } = useFetch(API_URL + `/tool?id=${id}`);
  console.log(data);
  return (
    <div className="ToolPage">
      <Header page="Avocado" />
      <div className="tool-header">
        {data?.name} by {data.author}
      </div>
      <div className="iframe-container">
        <iframe
          className="iframe"
          //   frameBorder="0"
          src={data?.url}
        />
      </div>
    </div>
  );
};
