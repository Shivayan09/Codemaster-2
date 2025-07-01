import React, { useState } from 'react';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import ParticlesBackground from './components/ParticlesBackground';
import Home from './pages/Home';
import Domains from './pages/Domains';
import Contact from './pages/Contact';
import Footer from './components/Footer';

export default function App() {

  const router = createBrowserRouter(
    [
      {
        path:'/',
        element:
        <div>
          <ParticlesBackground/>
          <div className='relative z-10'>
            <Home/>
          </div>
          <div className='relative z-10'>
            <Domains/>
          </div>
          <div>
            <Footer/>
          </div>
        </div>
      },
      {
        path: '/contact',
        element:
        <div>
          <ParticlesBackground/>
          <Contact/>
        </div>
      }
    ]
  )

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}
