import Navbar from '../components/Navbar/Navbar';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

test('Navbar has logo and searchbar rendered', () => {
  render(<BrowserRouter><Navbar /></BrowserRouter>);
  const input = screen.getByRole('textbox');
  const image = screen.getByAltText('whistler3');
  expect(input).toBeVisible();
  expect(image.src).toContain('/Whistler3.png');

});