import styled from "styled-components"
import LogoAlura from "../../assets/img/LogoMain.png"
import Button from "../Button"
import { Link } from "react-router-dom"
import { useState } from "react"

const StyledHeader = styled.header`
    background: linear-gradient(to bottom, rgb(3, 9, 15), rgb(3, 9, 15) 100%);
    width: 100%;
    height: 125px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    border-bottom: 4px solid #2271D1;
    box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.7);
    z-index: 1;
    img{
        width:168.45px;
        height: 40px;
    }
`
const StyledDiv = styled.div`
    display:flex;
    margin-left: 40px;
`


function Header(props) {



    return (
        <StyledHeader>
            <StyledDiv>
                <img src={LogoAlura} alt="Logo de AluraFlix" />

            </StyledDiv>

            <StyledDiv style={{ marginRight: "20px", gap: "20px" }}>

                <Link to={`/`}>
                    <Button texto="HOME"
                    activo ="true"
                    />
                </Link>
                <Link to={`/crear-video`}>
                    <Button texto="NUEVO VIDEO"
                    />
                </Link>
            </StyledDiv>
        </StyledHeader>
    )
}

export default Header