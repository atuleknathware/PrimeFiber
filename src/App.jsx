import React from 'react'
import Header from './Header'
import HomePage from './HomePage.jsx'
import Business from './Bandwidth-For-Business.jsx'
import HomeBroadband from './HomeBroadband.jsx'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import AboutUs from './AboutUs.jsx'
import ContactUs from './ContactUs.jsx'
import Services from './Services.jsx'
import Login from './Components/Login.jsx'

const App = () => {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/HomeBroadband' element={<HomeBroadband/>}/>
        <Route path='/Bandwidth-For-Business' element={<Business/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/login' element={<Login/>}/>

    </Routes>
        
    </Router>
    </>
  )
}

export default App