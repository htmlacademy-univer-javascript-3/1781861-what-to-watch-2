import { FormEvent, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { EMAIL_PAT, PASS_PAT } from '../../const/valid';
import { useAppDispatch, useAppSelector } from '../../hook/store';
import { loginAction } from '../../store/api-actions';
import { AuthStatus } from '../../enums/auth-status';
import { getAuthHasError, getAuthStatus } from '../../store/user-process/user-process.selectors';

export default function SignIn(): JSX.Element {
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();

  const hasError = useAppSelector(getAuthHasError);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const authStatus = useAppSelector(getAuthStatus);
  const isAuth = authStatus === AuthStatus.Auth;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      if (!EMAIL_PAT.test(emailRef.current?.value)) {
        setError('Please enter a valid email address');
        return;
      }

      if (!PASS_PAT.test(passwordRef.current?.value)) {
        setError(
          'Passwords must contain: a minimum of 1 letter and a minimum of 1 numeric character'
        );
        return;
      }

      dispatch(
        loginAction({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
      ).catch(() => {
        setError('Ошибка сервера');
      });
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          {(error || hasError) && (
            <div className="sign-in__message">
              <p>{error}</p>
            </div>
          )}
          <div className="sign-in__fields">
            <div className={`sign-in__field ${error ? 'sign-in__field--error' : ''}`}>
              <input ref={emailRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={`sign-in__field ${error ? 'sign-in__field--error' : ''}`}>
              <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
