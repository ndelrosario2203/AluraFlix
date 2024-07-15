import styled from "styled-components"
import TituloCategoria from "../TituloCategoria"
import CardVideo from "../CardVideo"

const VideosContainer = styled.div`
    background-color: var(--Dark-Grey, #262626);
    padding: 40px;
    display: flex;
    flex-direction:column;
    
`

const StyledDiv = styled.div`
    margin-top:20px;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    gap: 20px;
`




function Videos() {
    const anchura = "429";
    const altura = "260";
    return (

        <VideosContainer>
            <TituloCategoria titulo="Front End" anchuraContainer="432px" alturaContainer="70px"></TituloCategoria>
            <StyledDiv>
                <CardVideo enlaceVideo="https://www.youtube.com/embed/ov7vA5HFe6w?si=l6t5EtWpApFpyhN5" anchura={anchura} altura={altura}></CardVideo>
                <CardVideo enlaceVideo="https://www.youtube.com/embed/ov7vA5HFe6w?si=l6t5EtWpApFpyhN5" anchura={anchura} altura={altura}></CardVideo>
                <CardVideo enlaceVideo="https://www.youtube.com/embed/ov7vA5HFe6w?si=l6t5EtWpApFpyhN5" anchura={anchura} altura={altura}></CardVideo>
            </StyledDiv>
        </VideosContainer>
    )
}

export default Videos