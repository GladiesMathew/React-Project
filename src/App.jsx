import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './components/Home'
import English from './components/English';
import About from './components/About';
import Maths from './components/Maths';
import Stories from './components/Stories';
import Gk from './components/Gk';
// import English from "./pages/English";
// import Maths from "./pages/Maths";
// import Gk from "./pages/Gk";
// import Stories from './pages/Stories';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>

      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/english" element={<English/>} />
        <Route path="/maths" element={<Maths/>} />
         <Route path="/gk" element={<Gk/>} />
         <Route path="/stories" element={<Stories/>} /> 
        
      </Routes>

    </BrowserRouter>

       <Footer/>
    </>
  )
}

export default App 


// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./components/Home";
// import English from "./pages/English";
// import Mathematics from "./pages/Mathematics";
// import MoralStories from "./pages/MoralStories";

// function App() {
//   return (
//     <BrowserRouter>

//       <Routes>

//         <Route path="/" element={<Home />} />

//         <Route path="/english" element={<English />} />

//         <Route path="/mathematics" element={<Mathematics />} />

//         <Route path="/moral-stories" element={<MoralStories />} />

//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;