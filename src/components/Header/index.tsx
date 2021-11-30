import { useLocation, useNavigate } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';

import { HiArrowRight } from 'react-icons/hi';

import {
  Container,
  Session,
  ContentTitle,
  LinkTo,
  Title,
  ProfileButton,
  LogoutButton,
  Content
} from './styles';

export const Header: React.FC = () => {
  const { name } = useSelector(
    (state: RootStateOrAny) => state.auth.userLogged
  );

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Title>TGL</Title>
          {path === '/new-bet' && <LinkTo to="/home">Home</LinkTo>}
        </ContentTitle>
        <Session>
        <ProfileButton onClick={() => navigate('/account')}>
            My Account
          </ProfileButton>
          <LogoutButton onClick={() => navigate('/')}>
            Log out <HiArrowRight />
          </LogoutButton>
        </Session>
      </Content>
    </Container>
  );
};
