import { render, screen } from '@testing-library/react';
import Hello from '../components/Hello';


test('renders learn react link', () => {
    render(<Hello />);
    const linkElement = screen.getByText("Hello from test component");
    expect(linkElement).toBeInTheDocument();
  });
  