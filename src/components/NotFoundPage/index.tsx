import { CenteredDiv, FlatButton, Column, DivButton } from '../../GlobalStyles';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { NotFoundSpan } from '@components/NotFoundSpan/styles';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <CenteredDiv>
      <Column>
        <NotFoundSpan>
          Oops...
          <br /> Não é possivel fazer isso.
        </NotFoundSpan>
        <DivButton>
          <FlatButton >
            <FaArrowLeft onClick={() => navigate('/')}/>
            Clique aqui para retornar a página inicial.
          </FlatButton>
        </DivButton>
      </Column>
    </CenteredDiv>
  );
};
