import React from 'react'
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid ${props => props.error ? 'red' : '#333'};
  border-radius: 6px;
  background-color: transparent;
  color: white;
  outline: none;
`;

function Campo({placeHolder, SetTitulo, type, error, setValor, value}) {

  const manejarCambios = (e) => {
    setValor(e.target.value);
}

  return (
    <StyledInput placeholder={placeHolder} type={type} onChange={manejarCambios} value={value}>
    </StyledInput>
  )
}

export default Campo