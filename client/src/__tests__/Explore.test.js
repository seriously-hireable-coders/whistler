import Explore from '../pages/Explore/Explore';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

xdescribe('Explore component test', () => {
  beforeEach(() => {
    useSelector.mockClear();
  });

  it('renders Signin component when currentUser is not available', () => {
    useSelector.mockReturnValue(null);
    render(<Explore />);
    expect(screen.getByTestId('signin-component')).toBeInTheDocument();
  });

  it('renders main components when currentUser is available', () => {
    useSelector.mockReturnValue({ username: 'testuser' });
    render(<Explore />);
    expect(screen.queryByTestId('signin-component')).not.toBeInTheDocument();
    expect(screen.getByTestId('left-sidebar-component')).toBeInTheDocument();
    expect(screen.getByTestId('right-sidebar-component')).toBeInTheDocument();
    expect(screen.getByTestId('explore-whistles-component')).toBeInTheDocument();
  });

  it('renders LeftSidebar component', () => {
    useSelector.mockReturnValue({ username: 'testuser' });
    render(<Explore />);
    expect(screen.getByTestId('left-sidebar-component')).toBeInTheDocument();
  });

  it('renders RightSidebar component', () => {
    useSelector.mockReturnValue({ username: 'testuser' });
    render(<Explore />);
    expect(screen.getByTestId('right-sidebar-component')).toBeInTheDocument();
  });

  it('renders ExploreWhistles component', () => {
    useSelector.mockReturnValue({ username: 'testuser' });
    render(<Explore />);
    expect(screen.getByTestId('explore-whistles-component')).toBeInTheDocument();
  });
});
