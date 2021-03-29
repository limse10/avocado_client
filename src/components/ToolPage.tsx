import * as React from "react";
import ReactDOM from "react-dom";
import { Header } from "./Header";
import { useParams } from "react-router-dom";

interface Props {}

export const ToolPage: React.FC<Props> = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  return (
    <div className="ToolPage">
      <Header page="Avocado" />
      <div className="iframe-container">
        <iframe
          className="iframe"
          //   frameBorder="0"
          src="https://limse10.github.io/econsgraphsweb/"
        />
      </div>
    </div>
  );
};
