import { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { authActions } from '@store/auth-slice';

import { AuthComponent ,BoxAside , Footer , InputForm} from '@components/index';

import { LinkTo } from './styles';

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailMessage = useSelector(
    (state: RootStateOrAny) => state.auth.emailMessage
  );
  const passwordMessage = useSelector(
    (state: RootStateOrAny) => state.auth.passwordMessage
  );
  const isMessageInitial = useSelector(
    (state: RootStateOrAny) => state.auth.isMessageInitial
  );

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    dispatch(authActions.resetMessages());
  }, [dispatch]);

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    dispatch(authActions.resetMessages());
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
    dispatch(authActions.resetMessages());
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (email.trim().length > 0 && password.trim().length > 0) {
      dispatch(
        authActions.onLogin({
          email: email,
          password: password
        })
      );
      setPassword('');
    }
  };

  useEffect(() => {
    if (emailMessage === '' && passwordMessage === '' && !isMessageInitial) {
      setEmail('');
      setPassword('');
      dispatch(authActions.defineInitialStateOfMessages());
      navigate('/home');
    }
  }, [emailMessage, passwordMessage, isMessageInitial, dispatch, navigate]);

  return (
    <>
      <AuthComponent>
        <BoxAside
          title="Authentication"
          buttonInsideText="Log In"
          buttonOutsideText="Sign Up"
          type="registration"
          onInsideClick={submitHandler}
          onOutsideClick={() => navigate('/registration')}
        >
          <InputForm
            text="Email"
            type="email"
            onChange={emailChangeHandler}
            message={emailMessage}
            value={email}
            isTheFirst={true}
          />
          <InputForm
            text="Password"
            type="password"
            onChange={passwordChangeHandler}
            message={passwordMessage}
            value={password}
          />
          <LinkTo to="/reset-password">I forgot my password</LinkTo>
        </BoxAside>
      </AuthComponent>
      <Footer />
    </>
  );
}