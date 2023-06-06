import { render, screen } from '@testing-library/react';
import Error from '../pages/Error/Error';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(<BrowserRouter><Error /></BrowserRouter>);
  const element = screen.getByText(/Return to Log In Page/);
  expect(element).toBeInTheDocument();
});