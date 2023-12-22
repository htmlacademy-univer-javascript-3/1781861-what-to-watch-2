import MainPage from '../pages/main-page/main-page';

interface AppProps {
	promoFilm: {
		title: string;
		genre: string;
		year: number;
	};
}

function App({ promoFilm }: AppProps): JSX.Element {
  return (
    <MainPage promoFilm={promoFilm} />
  );
}

export default App;
