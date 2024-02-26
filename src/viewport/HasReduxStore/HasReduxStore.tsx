import { Provider as ReduxProvider } from 'react-redux';

import { type ReactNode } from 'react';
import store from 'init/store/store';

const HasReduxStore = ({ children }: { children: ReactNode }) => (
  <ReduxProvider store={store}>{children}</ReduxProvider>
);

export default HasReduxStore;
