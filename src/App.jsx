import React from 'react'
import { Routes , Route } from 'react-router-dom'
import { Home , About , Privacy , Contact, Teams, Blogs, Blog , Events} from './pages'


import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/events' element={<Events />} />
        <Route path='/privacy-policy' element={<Privacy />} />
        <Route path='/committee-members' element={<Teams />} />
        <Route path='/news-blogs' element={<Blogs/>} />
        <Route path='/news-blogs/:slug' element={<Blog/>} />
        {/* <Route path='*' element={<Notfound />} /> */}
        
      </Routes>
    </>
  )
}

export default App
