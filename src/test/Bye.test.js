import { render, screen } from '@testing-library/react';
import Bye from '../components/Bye';


test('renders learn react link', () => {
    render(<Bye />);
    const linkElement = screen.getByText("Bye from test component");
    expect(linkElement).toBeInTheDocument();
  });
  