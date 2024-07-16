import React from 'react'
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid ${props => props.error ? 'red' : '#333'};
  border-radius: 6px;
  background-color: var(--Dark-Grey, rgba(38, 38, 38, 1));
  color: white;
`;

function Campo({placeHolder, SetTitulo, type, error, setValor}) {

  const manejarCambios = (e) => {
    setValor(e.target.value);
}

  return (
    <StyledInput placeholder={placeHolder} type={type} onChange={manejarCambios}>
    </StyledInput>
  )
}

export default Campo