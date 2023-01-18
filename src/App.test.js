import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the application", () => {
	render(<App />);
	const appTitle = screen.getByText(/Screen it/i);
	expect(appTitle).toBeInTheDocument();
});
