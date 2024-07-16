import styled from "styled-components"
import Form from "../Form"

const StyledDiv = styled.div`
  background: #191919;
  display:flex;
  align-items: center;
  justify-content: center;
  `

function NuevoVideo({crearVideo, categorias}) {
  return (
      <StyledDiv >
        <Form crearVideo = {crearVideo} categorias={categorias}>

        </Form>
      </StyledDiv>
  )
}

export default NuevoVideo