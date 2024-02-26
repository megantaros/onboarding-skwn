import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'init/i18n';
import HasReduxStore from './viewport/HasReduxStore';
import Scene from './viewport/Scene';

const App = () => {
  return (
    <HasReduxStore>
      <ToastContainer />
      <Scene />
    </HasReduxStore>
  );
};

export default App;
