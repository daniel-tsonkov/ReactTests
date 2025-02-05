import { createRoot } from 'react-dom/client';
import Routes from './routes.jsx';

import { Provider } from 'react-redux';
import { store } from './store/index.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Routes />
  </Provider>
);
