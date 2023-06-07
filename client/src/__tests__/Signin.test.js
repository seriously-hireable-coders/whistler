import Signin from '../pages/Signin/Signin';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'

// const initialState = {
//   currentUser: null,
//   isLoading: false,
//   error: false,
// };

xtest('check signin input', () => {
  render(<Provider store={store}><Signin /></Provider>);
  const element = screen.getByText(/Sign in to your Whistler/);
  screen.getByRole('');
  expect(element).toBeInTheDocument();
});

// describe('With React Testing Library', () => {
//   const initialState = {output:10}
//   const mockStore = configureStore()
//   let store,wrapper

//   it('Shows "Hello world!"', () => {
//     store = mockStore(initialState)
//     const { getByText } = render(<Provider store={store}><App /></Provider>)

//     expect(getByText('Hello Worldd!')).not.toBeNull()
//   })
// })