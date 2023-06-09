import RightSidebar from '../components/RightSidebar/RightSidebar';
import { render, screen } from '@testing-library/react';

test('RightSidebar: rightSidebar is rendered', () => {
  render(<RightSidebar />);
  const element = screen.getByText(/TRENDING RIGHT NOW/);
  expect(element).toBeInTheDocument();
});