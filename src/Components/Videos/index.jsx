import styled from "styled-components"
import CardVideo from "../CardVideo"

const StyledDiv = styled.div`
    margin-top:20px;
    display:flex;
    flex-direction:row;
    justify-content: space-evenly;
    gap: 20px;
`




function Videos({ enlaceVideo, categoria, videos, colorPrimario, borrarVideo, cambiarModal }) {
    const anchura = "429";
    const altura = "260";
    return (
        <StyledDiv>
            {videos.map((video) => {
                if (video.Categoria === categoria) {
                    return <CardVideo
                        key={video.id}
                        id={video.id}
                        enlaceVideo={video.linkVideo}
                        anchura={anchura}
                        altura={altura}
                        colorPrimario={colorPrimario}
                        borrarVideo={borrarVideo}
                        cambiarModal={cambiarModal}
                    />;
                }
                return null; // or <></> if you prefer
            })}
        </StyledDiv>
    )
}

export default Videos