import { createRoot } from 'react-dom/client';
import Routes from './routes.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

import { Provider } from 'react-redux';
import { store } from './store/index.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Routes />
  </Provider>
);
//start ne chapter
