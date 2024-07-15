
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background: none;
    border-style: solid;
    border-width: 2px;
    border-color: #F5F5F5;
    cursor:pointer;
    width: 180.13px;
    height: 54px;
    gap: 0px;
    opacity: 0px;
    border-radius: 10px;
    color: #F5F5F5;
    font-family: "Source Sans 3", sans-serif;
    font-size: 20px;
    font-weight: 900;
    line-height: 24px;
    text-align: center;


`

function Button(props) {
    return (
        <StyledButton type={props.tipoBoton}>
            {props.texto}
        </StyledButton>
    )
}

export default Button