import { Container } from './styles';

export const Footer: React.FC = () => {
  let year = new Date().getFullYear();

  return (
    <Container>
      <p>Copyright {year} Luby Software</p>
    </Container>
  );
};
