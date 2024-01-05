import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { FilmList } from './mocks/films';

const initProps = {
  films: FilmList,
};

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App films={initProps.films} />
  </React.StrictMode>
);
