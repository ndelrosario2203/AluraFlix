import { useState, useEffect } from 'react'
import "./reset.css"
import Header from './Components/Header'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NuevoVideo from './Components/NuevoVideo'
import Context, { GlobalContext } from './Components/Context'
import Modal from './Components/Modal'

function App() {

  const [videos, SetVideos] = useState([])
  const [categorias, SetCategorias] = useState([])
  const [mostrarModal, setMostrarModal] = useState(false);
  const [videoModal, setVideoModal] = useState({})

  useEffect(() => {
    fetch(
      "http://localhost:3000/categorias"
    )
      .then((res) => res.json())
      .then((data) => SetCategorias(data));
    fetch(
      "http://localhost:3000/videos"
    )
      .then((res) => res.json())
      .then((data) => SetVideos(data));
  }, []);


  useEffect(() => {
    fetch(
      "http://localhost:3000/videos"
    )
      .then((res) => res.json())
      .then((data) => SetVideos(data));

  }, [videos])

  const editarVideo = (video) => {
    fetch(`http://localhost:3000/videos/${video.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(video)
    })
  }

  const crearVideo = async (video) => {
    await fetch('http://localhost:3000/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(video)
    })
    const data = await response.json();
    console.log(data);
    SetVideos(videosAnteriores => [...videosAnteriores, data]);

  }

  const cambiarModal = async (id) => {
    let videoCargado = videos.find((video) => video.id == id)
    if (videoCargado) {
      setVideoModal(videoCargado)
    } else {
      setVideoModal({})
    }
    setMostrarModal(!mostrarModal)
  }


  const borrarVideo = async (id) => {
    const response = await fetch(`http://localhost:3000/videos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }
  return (
    // <Context>
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={[<Banner videos={videos} categorias={categorias} borrarVideo={borrarVideo} cambiarModal={cambiarModal} />]} />
          <Route path='/crear-video' element={<NuevoVideo crearVideo={crearVideo} categorias={categorias} />} />
          <Route path='*' element={""} />

        </Routes>
        <Footer />
      </Router >
      <Modal
        mostrarModal={mostrarModal}
        videos={videos}
        cambiarModal={cambiarModal}
        categorias={categorias}
        videoModal={videoModal}
        editarVideo = {editarVideo}
      />
    </>
    // </Context>
  )
}

export default App
