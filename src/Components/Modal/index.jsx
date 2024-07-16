import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { IoMdCloseCircleOutline } from "react-icons/io";

const ModalWrapper = styled.div`
  display: ${(props) => (props.mostrarModal ? 'flex' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #03122F; 
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 50%;
  border-radius: 10px;
  color: white;
  justify-content: space-around;
  flex-direction:row;
  align-items: center;
  border: 5px solid #6BD1FF;
`;

const Overlay = styled.div`
  display: ${(props) => (props.mostrarModal ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Header = styled.h2`
  color: #4c9ff0;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: flex;
  margin-bottom: 10px;
  font-weight: bold;
  gap:20px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #2e3b4e;
  border-radius: 5px;
  background-color: transparent; 
  color: white;
  option {
    background-color: #03122F;
    
  }
`;

const StyledTextArea = styled.textarea`
    color:white;
    background: none;
    border: 3px solid var(--Dark-Grey, #353535);
    resize:none;
    outline: none;
    border-radius: 15px;
    background-color: transparent;
    width: 100%;
    margin-bottom: 20px;
    height: 112px;
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid ${props => props.error ? 'red' : '#333'};
  border-radius: 6px;
  background-color: transparent;
  color: white;
  outline: none;

`


const Modal = ({ mostrarModal, cambiarModal, videoModal, categorias, editarVideo }) => {
  const [formData, setFormData] = useState({
    linkImagenVideo: '',
    linkVideo: '',
    titulo: '',
    descripcion: '',
    Categoria: ''
  });


  useEffect(() => {
    if (videoModal) {
      setFormData({
        linkImagenVideo: videoModal.linkImagenVideo,
        linkVideo: videoModal.linkVideo,
        titulo: videoModal.titulo,
        descripcion: videoModal.descripcion,
        Categoria: videoModal.Categoria
      });
    }
  }, [videoModal]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedVideo = { ...formData, id: videoModal.id };
    console.log(updatedVideo);
    editarVideo(updatedVideo);
    cambiarModal();
  };

  const handleClear = () => {
    setFormData({
      linkImagenVideo: '',
      linkVideo: '',
      titulo: '',
      descripcion: '',
      Categoria: ''
    });
  };

  return (
    <>
      <Overlay mostrarModal={mostrarModal} onClick={() => cambiarModal()} />
      <ModalWrapper mostrarModal={mostrarModal}>
        <IoMdCloseCircleOutline style={{
          position: 'absolute',
          top: 10,
          right: 10,
          background: "none",
          border: "none",
          color: "white",
          fontSize: 1.5,
          cursor: "pointer",
          width: 52,
          height: 52
        }}
          onClick={() => cambiarModal()}
        />
        <form style={{ width: 573 }} onSubmit={handleSubmit}>

          <Header>EDITAR CARD:</Header>
          <Label>Título</Label>
          <Input
            type="text"
            name='titulo'
            value={formData.titulo}
            onChange={handleChange}
          />
          <Label>Categoría</Label>
          <Select style={{ backgroundColor: 'transparent' }}
            name="Categoria"
            value={formData.Categoria}
            onChange={handleChange}
          >
            {
              categorias.map((categoria) => { return <option key={categoria.id} value={categoria.nombre}>{categoria.nombre}</option> })
            }
          </Select>
          <Label>Imagen</Label>
          <Input
            type="text"
            name='linkImagenVideo'
            value={formData.linkImagenVideo}
            onChange={handleChange}
          />
          <Label>Video</Label>
          <Input
            type="text"
            value={formData.linkVideo}
            name='linkVideo'
            onChange={handleChange}
          />
          <Label>Descripción</Label>

          <StyledTextArea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button type="submit" texto="GUARDAR" primario="true"></Button>
            <Button type="reset" texto="LIMPIAR" onClick={handleClear}/>
          </div>
        </form>
      </ModalWrapper>
    </>
  );
};

export default Modal;