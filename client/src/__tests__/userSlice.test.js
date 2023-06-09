import { userSlice, loginStart, loginSuccess, loginFailed, logout, changeProfile } from '../redux/userSlice';

describe('userSlice test', () => {
  it('userSlice: test loginStart action', () => {
    const initialState = { currentUser: null, isLoading: false, error: false };
    const nextState = userSlice.reducer(initialState, loginStart());
    expect(nextState.isLoading).toBe(true);
  });

  it('userSlice: test loginSuccess action', () => {
    const initialState = { currentUser: null, isLoading: false, error: false };
    const user = { id: 1, username: 'testuser' };
    const nextState = userSlice.reducer(initialState, loginSuccess(user));
    expect(nextState.isLoading).toBe(false);
    expect(nextState.currentUser).toEqual(user);
  });

  it('userSlice: test loginFailed action', () => {
    const initialState = { currentUser: null, isLoading: false, error: false };
    const nextState = userSlice.reducer(initialState, loginFailed());
    expect(nextState.isLoading).toBe(false);
    expect(nextState.error).toBe(true);
  });

  it('userSlice: test logout action', () => {
    const initialState = { currentUser: { id: 1, username: 'testuser' }, isLoading: false, error: false };
    const nextState = userSlice.reducer(initialState, logout());
    expect(nextState).toEqual({ currentUser: null, isLoading: false, error: false });
  });

  it('userSlice: test changeProfile action', () => {
    const initialState = { currentUser: { id: 1, username: 'testuser', profilePicture: '' }, isLoading: false, error: false };
    const profilePicture = 'profile.jpg';
    const nextState = userSlice.reducer(initialState, changeProfile(profilePicture));
    expect(nextState.currentUser.profilePicture).toBe(profilePicture);
  });


});
