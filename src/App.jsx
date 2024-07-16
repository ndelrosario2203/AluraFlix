import { useState, useEffect } from 'react'
import "./reset.css"
import Header from './Components/Header'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NuevoVideo from './Components/NuevoVideo'
import Context, { GlobalContext } from './Components/Context'

function App() {

  const [videos, SetVideos] = useState([])
  const [categorias, SetCategorias] = useState([])

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



  const crearVideo = async (video) => {
    await fetch('http://localhost:3000/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(video)
    })
  }


  const borrarVideo = async (id) => {
    await fetch(`http://localhost:3000/videos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    if (response.ok) {
      const data = await response.json();
      SetVideos(videosAnteriores => [...videosAnteriores, data]);
    }
  }

  return (
    // <Context>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={[<Banner videos={videos} categorias={categorias} borrarVideo={borrarVideo} />]} />
        <Route path='/crear-video' element={<NuevoVideo crearVideo={crearVideo} categorias={categorias} />} />

      </Routes>
      <Footer />
    </Router >
    // </Context>
  )
}

export default App
