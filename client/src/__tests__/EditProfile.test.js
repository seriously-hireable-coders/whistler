import EditProfile from '../components/EditProfile/EditProfile';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from './utils-for-tests';

test('EditProfile: EditProfile is rendered', () => {
  renderWithProviders(<EditProfile setOpen={true} />);
  console.log('stores test');
  screen.getByRole('')
  //   // const element = screen.getByText(/Sign in to your Whistler/);
  //   // const userNameInput = screen.queryByPlaceholderText(/email/i);
  //   // const signUpUserNameInput = screen.getByTestId('signUp-username-input');
  //   // const signUpPwInput = screen.getByTestId('signUp-pw-input');
  //   // fireEvent.change(userNameInput, { target: { value: 'email@e.com' } });
  //   // fireEvent.change(signUpUserNameInput, { target: { value: 'username' } });
  //   // fireEvent.change(signUpPwInput, { target: { value: 'pw' } });
  //   // expect(signUpPwInput.value).toBe('pw');
  //   // expect(signUpUserNameInput.value).toBe('username');
  //   // expect(userNameInput.value).toBe('email@e.com');
  //   // expect(element).toBeInTheDocument();
  //   // expect(userNameInput).toBeInTheDocument();
});