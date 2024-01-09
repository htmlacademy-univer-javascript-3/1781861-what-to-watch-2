import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../enums/app-route';

type Props = {
	isLight?: boolean;
}

function Logo({ isLight = false }: Props): JSX.Element {
  const computedClass = `logo__link ${isLight ? 'logo__link--light' : ''}`;

  return (
    <div className="logo">
      <Link to={AppRoute.Main} className={computedClass}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

const LogoMemo = React.memo(Logo);

export default LogoMemo;
