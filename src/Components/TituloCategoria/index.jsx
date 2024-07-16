import styled from "styled-components"

const StyledDiv = styled.div`
    width: 296.82px;
    height: 92px;
    gap: 0px;
    border-radius: 15px 15px 15px 15px;
    opacity: 0px;
    background-color:#6BD1FF;
    display:flex;
    justify-content:center;
    align-items:center;
`

const StyledTitulo = styled.h1`
    color: #F5F5F5;
    font-family: "Roboto";
    font-size: 38px;
    font-weight: 800;
    line-height: 56.25px;
    white-space: nowrap;
`


function TituloCategoria(props) {

    const {titulo, alturaContainer, anchuraContainer, colorPrimario} = props

  return (
    <StyledDiv style={{width: anchuraContainer, height:alturaContainer, backgroundColor:colorPrimario}}>
        <StyledTitulo>{titulo}</StyledTitulo>
    </StyledDiv>
  )
}

export default TituloCategoria