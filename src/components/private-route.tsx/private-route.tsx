import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../enums/app-route';
import { useAppSelector } from '../../hook/store';
import { AuthStatus } from '../../enums/auth-status';
import { getAuthStatus } from '../../store/user-process/user-process.selectors';

type PrivateRouteProps = {
	children: JSX.Element;
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children } = props;
  const authStatus = useAppSelector(getAuthStatus);
  const isAuth = authStatus === AuthStatus.Auth;
  return isAuth ? children : <Navigate to={AppRoute.Login} />;
}
