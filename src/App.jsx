import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img from '../src/assets/e27de81ebcd4ea40fd6f4f4dff686cafacecaf9e.jpg'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Title from './Components/Title/Title'
import Services from './Components/Services/Services'
import Testmoanil from './Components/Testmonial/Testmoanil'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>


  <Hero/>
  <About/>

  <Title title="Services"/>
  <Services/>
    <Title title="Testymonials"/>
      <Testmoanil/>
<Contact/>

<Footer/>
    </>
  )
}

export default App


