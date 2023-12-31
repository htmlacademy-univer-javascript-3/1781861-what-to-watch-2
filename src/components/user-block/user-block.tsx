import './user-block.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../enums/AppRoute';

export default function UserBlock(): JSX.Element {
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" />
        </div>
      </li>
      <li className="user-block__item">
        <Link to={`${AppRoute.Login}`} className="user-block__link">Sign out</Link>
      </li>
    </ul>
  );
}
