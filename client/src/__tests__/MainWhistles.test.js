import MainWhistles from '../components/MainWhistles/MainWhistles';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from './utils-for-tests';

xtest('Signin/SignUp: user able to type', () => {
  renderWithProviders(<MainWhistles/>);
  screen.getByRole('')
});