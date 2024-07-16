import styled from "styled-components"
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";

const StyledDiv = styled.div`
    display:flex;
    justify-content:space-around;
    background: rgba(3, 18, 47, 1);
    border-width: 5px;
    border-style: solid;
    border-color: var(--FrontEnd, rgba(107, 209, 255, 1));
    box-shadow: 0px -4px 5px 3px rgba(107, 209, 255, 1) inset;
    width: 429px;
    height: 59px;
    gap: 0px;
    border-radius: 0px 0px 5px 5px;
    align-items:center;

`

const StyledParrafo = styled.p`
    font-family: "Roboto";
    font-size: 20px;
    font-weight: 800;
    line-height: 18.75px;
    text-align: left;
    color:white;
    cursor: pointer;
`

const StyledContainer = styled.div`
    display:flex;
    align-items:center;
`

function FooterVideo(props) {

    const { mostrar = true, borrarVideo, id } = props

    return (
        <>
      {mostrar ? (
        <StyledDiv>
          <StyledContainer>
            <RiDeleteBin6Line style={{ color: "white", width: "25.43px", height: "28px", cursor:"pointer" }} onClick={()=>borrarVideo(id)}/>
            <StyledParrafo onClick={()=>borrarVideo(id)}>Borrar</StyledParrafo>
          </StyledContainer>
          <StyledContainer>
            <AiOutlineEdit style={{ color: "white", width: "25.43px", height: "28px", cursor:"pointer" }} />
            <StyledParrafo>Editar</StyledParrafo>
          </StyledContainer>
        </StyledDiv>
      ) : null}
    </>
    )
}

export default FooterVideo