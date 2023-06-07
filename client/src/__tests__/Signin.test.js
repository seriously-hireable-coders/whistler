import Signin from '../pages/Signin/Signin';
import { screen, fireEvent, render } from '@testing-library/react';
import { renderWithProviders } from './utils-for-tests';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import axios from 'axios';
const mockStore = configureStore([]);

jest.mock('axios', () => ({
  post: jest.fn(() => ({
    data: {message: 'test'}
  })),
}));

test('Signin: user able to type', () => {

  renderWithProviders(<BrowserRouter><Signin /></BrowserRouter>);
  const element = screen.getByText(/Sign in to your Whistler/);
  const userNameInput = screen.queryByPlaceholderText(/email/i);
  const signUpUserNameInput = screen.getByTestId('signUp-username-input');
  const signUpPwInput = screen.getByTestId('signUp-pw-input');
  fireEvent.change(userNameInput, { target: { value: 'email@e.com' } });
  fireEvent.change(signUpUserNameInput, { target: { value: 'username' } });
  fireEvent.change(signUpPwInput, { target: { value: 'pw' } });
  expect(signUpPwInput.value).toBe('pw');
  expect(signUpUserNameInput.value).toBe('username');
  expect(userNameInput.value).toBe('email@e.com');
  expect(element).toBeInTheDocument();
  expect(userNameInput).toBeInTheDocument();
});

test('Signin: render the sign in and sign up form', () => {
  renderWithProviders(<BrowserRouter><Signin /></BrowserRouter>);
  // const store = mockStore({});
  // render(<Provider store={store}><BrowserRouter><Signin handleLogin={handleLogin}/></BrowserRouter></Provider>)
  const signInText = screen.getByText(/Sign in to your Whistler/);
  const signUpText = screen.getByText(/Don't have an account/);
  const emailInput = screen.queryByPlaceholderText(/email/i);
  const signUpBtn = screen.getByTestId('signUp-btn');
  const signUpUserNameInput = screen.getByTestId('signUp-username-input');
  const signUpPwInput = screen.getByTestId('signUp-pw-input');
  // fireEvent.change(signUpUserNameInput, { target: { value: 'username' } })
  // fireEvent.change(signUpPwInput, { target: { value: 'pw' } })
  // signUpBtn.pendingProps['onClick'] = handleLogin;
  fireEvent.click(signUpBtn);
  const signIntbutton = screen.getByRole("button", { name: /Sign In/i });
  const signUptbutton = screen.getByRole("button", { name: /Sign Up/i });
  expect(signInText).toBeInTheDocument();
  expect(signUpText).toBeInTheDocument();
  expect(signUptbutton).toBeInTheDocument();
  expect(signIntbutton).toBeInTheDocument();
  expect(signUpPwInput).toBeInTheDocument();
  expect(axios.post).toBeCalled();
  expect(signUpUserNameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

