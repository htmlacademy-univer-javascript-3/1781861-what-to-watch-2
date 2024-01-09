import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { checkAuthStatus, fetchFilmsAction } from './store/api-actions';
import { store } from './store';
import { ToastContainer } from 'react-toastify';

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthStatus());

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
