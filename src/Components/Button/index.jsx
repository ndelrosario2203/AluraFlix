import React, { useState } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background: none;
    border-style: solid;
    border-width: 2px;
    border-color: ${props => props.primario || props.activo ? "rgba(34, 113, 209, 1)" : '#F5F5F5'};
    cursor:pointer;
    width: 180.13px;
    height: 54px;
    border-radius: 10px;
    color: ${props => props.activo ? "#2271D1" : "#F5F5F5"};
    font-family: "Source Sans 3", sans-serif;
    font-size: 20px;
    font-weight: 900;
    line-height: 24px;
    text-align: center;
    box-shadow:  ${props => props.activo ? "0px 0px 12px 4px #2271D1 inset" : "0px"};

`

function Button(props) {

    return (
        <StyledButton type={props.type} primario={props.primario} activo={props.activo}>
            {props.texto}
        </StyledButton>
    )
}

export default Button