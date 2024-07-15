import { useState } from 'react'
import "./reset.css"
import Header from './Components/Header'
import Banner from './Components/Banner'
import Videos from './Components/Videos'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NuevoVideo from './Components/NuevoVideo'

function App() {
  return (
    
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={[<Banner />, <Videos />, <Videos />]} />
          <Route path='/crear-video' element={<NuevoVideo/>}/>
        </Routes>
        <Footer />
      </Router >
    
  )
}

export default App
