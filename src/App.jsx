import React from 'react'
import {Hero, Navbar,Services} from '../src/Components/index'
export default function App() {
  return (
  <main className='overflow-x-hidden antialiased text-neutral-800'>
    <Navbar/>
    <Hero/>
    <Services/>
  </main>
  )
}
