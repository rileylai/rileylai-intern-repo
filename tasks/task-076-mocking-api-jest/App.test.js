import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { fetchUser } from "./api";

jest.mock("./api");

test("renders mocked user name from API call", async () => {
  fetchUser.mockResolvedValue({ name: "Riley" });

  render(<App />);

  expect(await screen.findByText("Riley")).toBeInTheDocument();
});
