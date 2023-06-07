import Signin from '../pages/Signin/Signin';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from './utils-for-tests';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

jest.mock('axios', () => ({
  post: jest.fn(() => ({
    data: {message: 'test'}
  })),
}));

test('Signin/SignUp: user able to type', () => {

  renderWithProviders(<BrowserRouter><Signin /></BrowserRouter>);
  const element = screen.getByText(/Sign in to your Whistler/);
  const userNameInput = screen.queryByPlaceholderText(/email/i);
  const signInUserNameInput = screen.getByTestId('signIn-username-input');
  const signInPwInput = screen.getByTestId('signIn-pw-input');
  fireEvent.change(userNameInput, { target: { value: 'email@e.com' } });
  fireEvent.change(signInUserNameInput, { target: { value: 'username' } });
  fireEvent.change(signInPwInput, { target: { value: 'pw' } });
  expect(signInPwInput.value).toBe('pw');
  expect(signInUserNameInput.value).toBe('username');
  expect(userNameInput.value).toBe('email@e.com');
  expect(element).toBeInTheDocument();
  expect(userNameInput).toBeInTheDocument();
});

test('Signin/SignUp: render the sign in and sign up form', () => {
  renderWithProviders(<BrowserRouter><Signin /></BrowserRouter>);
  const signInText = screen.getByText(/Sign in to your Whistler/);
  const signUpText = screen.getByText(/Don't have an account/);
  const emailInput = screen.queryByPlaceholderText(/email/i);
  const signInUserNameInput = screen.getByTestId('signIn-username-input');
  const signInPwInput = screen.getByTestId('signIn-pw-input');
  const signIntbutton = screen.getByRole("button", { name: /Sign In/i });
  const signUptbutton = screen.getByRole("button", { name: /Sign Up/i });
  expect(signInText).toBeInTheDocument();
  expect(signUpText).toBeInTheDocument();
  expect(signUptbutton).toBeInTheDocument();
  expect(signIntbutton).toBeInTheDocument();
  expect(signInPwInput).toBeInTheDocument();
  expect(signInUserNameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

test('Signin/SignUp: user able to signup', () => {
  renderWithProviders(<BrowserRouter><Signin /></BrowserRouter>);
  const signInUserNameInput = screen.getByTestId('signIn-username-input');
  const signInPwInput = screen.getByTestId('signIn-pw-input');

  fireEvent.change(signInUserNameInput, { target: { value: 'username' } });
  fireEvent.change(signInPwInput, { target: { value: 'pw' } });
  const signIntbutton = screen.getByRole("button", { name: /Sign In/i });
  fireEvent.click(signIntbutton);
  expect(axios.post).toBeCalled();
});
