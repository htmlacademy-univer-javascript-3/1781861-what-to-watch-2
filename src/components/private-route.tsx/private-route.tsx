import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../enums/app-route';
import { AuthStatus } from '../../enums/auth-status';

type PrivateRouteProps = {
  authStatus: AuthStatus;
	children: JSX.Element;
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authStatus, children} = props;
  const isNotAuth = authStatus === AuthStatus.NoAuth;
  return !isNotAuth ? children : <Navigate to={AppRoute.Login}/> ;
}
