import React from 'react'
import styled from 'styled-components'
import FooterVideo from '../FooterVideo'
import hexToRgba from 'hex-to-rgba'

const StyledFrame = styled.iframe`
    border-radius: 15px 15px 0px 0px;
   
`
const StyledDiv = styled.div`
     border: 5px solid ${props => props.colorPrimario || "#6BD1FF"};
    box-shadow: 0px 5px 15px 0px rgba(34, 113, 209, 0.7);
    border-radius: 15px;
`

function CardVideo(props) {
    const { enlaceVideo, anchura, altura, mostrar, colorPrimario, borrarVideo, id, cambiarModal } = props

    // const colorConvertido = hexToRgba(colorPrimario, 0.2);

    return (

        <StyledDiv colorPrimario={colorPrimario}>
            <StyledFrame width={anchura} height={altura} src={enlaceVideo} 
                title="YouTube video player" allowFullScreen></StyledFrame>
            <FooterVideo mostrar={mostrar} borrarVideo={borrarVideo} id={id} cambiarModal = {cambiarModal} colorPrimario={colorPrimario}/>
        </StyledDiv>
    )
}

export default CardVideo