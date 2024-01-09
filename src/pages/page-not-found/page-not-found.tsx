import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../enums/app-route';

export default function PageNotFound(): JSX.Element {
  return (
    <React.Fragment>
      <h1>Oops! We can&apos;t find that page.</h1>
      <Link to={AppRoute.Main} >Go to main page</Link>
    </React.Fragment>
  );
}
