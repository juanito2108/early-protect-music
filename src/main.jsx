import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import videoBg from "./assets/videoBg.mp4"
import { PrincipalButton } from './components/principal-button'
import { ArtistContent } from './components/main-container'
import { NavBar } from './components/principal-navbar'




ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <header className='header-container'>
    <div className="video-container"> 
    <NavBar></NavBar>
    <video src={videoBg} autoPlay loop muted></video>
    </div>
    </header>
    <main>
      <PrincipalButton></PrincipalButton>
      <ArtistContent></ArtistContent>
    </main>
    

  

  </>
)
