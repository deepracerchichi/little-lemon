import { render, screen } from "@testing-library/react";
import BookingPage from './component/BookingPage';

test('Renders the Reserve Table Heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
})