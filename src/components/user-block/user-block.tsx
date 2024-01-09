import React, { useCallback } from 'react';
import './user-block.css';
import { useAppDispatch, useAppSelector } from '../../hook/store';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../enums/AppRoute';
import { logoutAction } from '../../store/api-actions';
import { AuthStatus } from '../../enums/AuthStatus';
import { getAuthStatus, getUser } from '../../store/user-process/user-process.selectors';


function UserBlock(): React.JSX.Element {
  const dispatch = useAppDispatch();

  const authStatus = useAppSelector(getAuthStatus);
  const user = useAppSelector(getUser);
  const isAuth = authStatus === AuthStatus.Auth;

  const handleClick = useCallback(() => {
    dispatch(logoutAction());
  }, [dispatch]);

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={user?.avatarUrl || 'img/avatar.jpg'} alt={user?.name || 'User avatar'}/>
        </div>
      </li>
      <li className="user-block__item">
        {isAuth ? (
          <Link to={`${AppRoute.Main}`} className="user-block__link" onClick={handleClick}>
						Sign out
          </Link>
        ) : (
          <Link to={`${AppRoute.Login}`} className="user-block__link">
						Sign in
          </Link>
        )}
      </li>
    </ul>
  );
}

export default UserBlock;
