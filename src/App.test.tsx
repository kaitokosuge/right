import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";

test("renders text", () => {
    render(<App />);
    const testText = screen.getByText("test");
    expect(testText).toBeInTheDocument();
});
