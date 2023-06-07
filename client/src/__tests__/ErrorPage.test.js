import { render, screen } from '@testing-library/react';
import Error from '../pages/Error/Error';
import { BrowserRouter } from 'react-router-dom';

test('Error page rendered', () => {
  render(<BrowserRouter><Error /></BrowserRouter>);
  const element = screen.getByText(/Return to Log In Page/);
  expect(element).toBeInTheDocument();
});