import Campo from "../Campo";
import styled from 'styled-components';
import Select from "../Select";
import Button from "../Button";
import { useState } from "react";
import { v4 as uuid } from 'uuid';
import {  useNavigate } from 'react-router-dom';

const FormContainer = styled.form`
width:100%;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 7px;
  
`;

const Title = styled.h1`
    font-family: "Roboto";
    font-size: 40px;
    font-weight: 900;
    line-height: 70.31px;
    text-align: center;
    color: white;
`;

const SubTitle = styled.p`
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 23.44px;
    text-align: center;
    color: white;
`;

const Label = styled.label`
    font-family: "Source Sans 3", sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
    margin: 10px 0 5px;
    color: white;
`;

const StyledDiv = styled.div`
    display:flex;
    text-align: left;
    justify-content: space-between;
    flex-direction: column;
    width: 470px;
`

const ContainerCampos = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 40px;
`

const StyledTextArea = styled.textarea`
    color:white;
    background: none;
    border: 3px solid var(--Dark-Grey, #353535);
    resize:none;
    outline: none;
    height: 220px;
    border-radius: 15px;
    
`

const ContainerDescripcion = styled.div`
    display:flex;
    flex-direction: column;
    padding-right: 27%;
    gap: 20px;
`

const Form = ({ crearVideo, categorias }) => {

    const [titulo, SetTitulo] = useState('');
    const [categoria, SetCategoria] = useState('Front End');
    const [enlace, SetEnlace] = useState('');
    const [descripcion, SetDescripcion] = useState('');
    const [enlaceImagen, SetEnlaceImagen] = useState('');
    const navigate = useNavigate()

    const enviarVideos = (e) => {
        
        e.preventDefault();

        let id = uuid();
        let datosAEnviar = {
            id: id,
            titulo: titulo,
            linkVideo: enlace,
            linkImagenVideo: enlaceImagen,
            Categoria: categoria,
            descripcion: descripcion
        }
        crearVideo(datosAEnviar)
        navigate('/')
    }

    return (
        <FormContainer onSubmit={enviarVideos}>
            <Title>NUEVO VIDEO</Title>
            <SubTitle>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</SubTitle>

            <ContainerCampos>
                <StyledDiv>
                    <Label>Título</Label>
                    <Campo type="text" placeHolder="ingrese el título del video..." required setValor={SetTitulo} />
                </StyledDiv>
                <StyledDiv>
                    <Label>Categoría</Label>
                    <Select style={{ backgroundColor: "#262626" }} onChange={(e) => SetCategoria(e.target.value)}>
                        {
                            categorias.map((categoria) => { return <option key={categoria.id} value={categoria.nombre}>{categoria.nombre}</option> })
                        }

                    </Select>
                </StyledDiv>
            </ContainerCampos>

            <ContainerCampos>
                <StyledDiv>
                    <Label>Imagen</Label>
                    <Campo type="text" id="image" placeHolder="Ingrese el enlace a la imagen del video..." error required setValor={SetEnlaceImagen} />
                </StyledDiv>
                <StyledDiv>
                    <Label>Video</Label>
                    <Campo placeHolder="Ingrese el enlace del video..." setValor={SetEnlace} />
                </StyledDiv>
            </ContainerCampos>

            <ContainerCampos>
                <ContainerDescripcion>
                    <StyledDiv>
                        <Label>Descripción</Label>
                        <StyledTextArea placeholder="¿de qué se trata este vídeo?" onChange={(e) => SetDescripcion(e.target.value)} />
                    </StyledDiv>
                    <StyledDiv>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <Button texto="GUARDAR" primario="true" type={"submit"} />
                            <Button texto="LIMPIAR" type="reset"/>
                        </div>
                    </StyledDiv>
                </ContainerDescripcion>
            </ContainerCampos>
        </FormContainer>
    );
};

export default Form;