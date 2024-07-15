import React from 'react'
import styled from 'styled-components'

const StyledFrame = styled.iframe`
    border: 5px solid #6BD1FF;
    box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.7);
    border-radius: 15px;

`


function CardVideo(props) {
    const { enlaceVideo, anchura, altura  } = props
    return (
        <StyledFrame width={anchura} height={altura} src={enlaceVideo} 
        title="YouTube video player" allowFullScreen></StyledFrame>
    )
}

export default CardVideo