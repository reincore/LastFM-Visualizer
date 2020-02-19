import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Last.fm visualizer link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/ReactJS Last.fm Visualizer/i);
  expect(linkElement).toBeInTheDocument();
});
