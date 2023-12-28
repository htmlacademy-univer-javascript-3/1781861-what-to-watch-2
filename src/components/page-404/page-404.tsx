import React from 'react';
import { Link } from 'react-router-dom';

function Page404(): JSX.Element {
  return (
    <React.Fragment>
      <h1> Oops! We can&apos;t find that page.</h1>
      <Link to='/'>Go to main page</Link>
    </React.Fragment >
  );
}

export default Page404;
