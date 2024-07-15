import styled from 'styled-components'
import fotoBanner from '../../assets/img/Banner.png'
import TituloCategoria from '../TituloCategoria'
import CardVideo from '../CardVideo'


const StyledBanner = styled.section`

    background-image: url(${fotoBanner});
    display:flex;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width:100%;
    height: 832px;
    align-items:center;
    padding:40px;
    flex-direction:row;
    justify-content: space-between;
    img{
        filter: blur(1px);
        
    }
`

const StyledDiv = styled.div`
    display:flex;
    flex-direction:column;
    width:40%;
    
`

const StyledTitulo = styled.h1`
    font-family: "Roboto";
    font-size: 46px;
    font-weight: 400;
    line-height: 53.91px;
    color: #F5F5F5;
    margin-top: 20px;
    margin-bottom: 5px;
`

const StyledParrafo = styled.p`
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 300;
    line-height: 21.09px;
    color:#F5F5F5;
    text-align:justify;
`


function Banner() {
    return (
        <StyledBanner>
            <StyledDiv>
                <TituloCategoria titulo="Front End" />
                <StyledTitulo>Challenge React</StyledTitulo>
                <StyledParrafo>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de
                    un problema para poder aplicar todos los conocimientos
                    adquiridos en la formación React.</StyledParrafo>
            </StyledDiv>
            <CardVideo enlaceVideo="https://www.youtube.com/embed/ov7vA5HFe6w?si=l6t5EtWpApFpyhN5" anchura="647" altura="333"></CardVideo>
        </StyledBanner>
    )
}

export default Banner