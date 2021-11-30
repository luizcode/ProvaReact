import styled from 'styled-components';

interface ButtonProps {
  color: string;
  selected?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: 2.50rem;
  height: 2.50rem;
  margin-bottom: 1.25rem;
  margin-right:0.4rem;
  background: ${props => (props.selected ? props.color : '#adc0c4')};
  border-radius: 50%;

  font-size: 1rem;
  font-weight: bold;
  color: #fff;

`;
