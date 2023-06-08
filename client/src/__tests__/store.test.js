import { store, persistor } from '../redux/store';

  it('store: check store & persistor configured correctly', () => {
    expect(store).toBeDefined();
    expect(persistor).toBeDefined();
  });

