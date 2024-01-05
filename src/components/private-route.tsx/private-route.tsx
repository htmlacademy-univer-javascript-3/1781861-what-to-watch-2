import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../enums/AppRoute';

type PrivateRouteProps = {
	children: JSX.Element;
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children } = props;
  const isAuth = true;
  return isAuth ? children : <Navigate to={AppRoute.Login} />;
}
