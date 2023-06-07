import RightSidebar from '../components/RightSidebar/RightSidebar';
import { render, screen } from '@testing-library/react';

test('RightSidebar is rendered', () => {
  render(<RightSidebar />);
  const element = screen.getByText(/Trending Right Now/);
  expect(element).toBeInTheDocument();

});