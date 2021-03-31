import * as React from "react";
import ReactDOM from "react-dom";
import { Header } from "./Header";
import { useParams } from "react-router-dom";
import { useFetch } from "../utils/useFetch";
import { API_URL } from "../App";
interface Props {}

export const ToolPage: React.FC<Props> = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading } = useFetch(API_URL + `/tool?id=${id}`);
  return (
    <div className="ToolPage">
      <Header page="Avocado" />
      <div>
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
