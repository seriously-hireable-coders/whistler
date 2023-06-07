import { render, screen } from '@testing-library/react';
import App from './App';



xtest('renders home page', () => {
  render(<App />);
  const element = screen.getByText(/Home/);
  expect(element).toBeInTheDocument();
});
