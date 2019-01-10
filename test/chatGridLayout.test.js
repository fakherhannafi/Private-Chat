import React from "react";
import ReactDOM from "react-dom";
import ChatGridLayout from "../src/app/ChatGridLayout";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ChatGridLayout />, div);
  ReactDOM.unmountComponentAtNode(div);
});
