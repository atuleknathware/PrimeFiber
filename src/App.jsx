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
import Dashboard from './Components/Admin/Dashboard.jsx'
import AdminRoutes from './Components/Admin/AdminRoutes.jsx'
// import EditHomePlans from './Components/Admin/EditHomePlans.jsx'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/HomeBroadband' element={<HomeBroadband/>}/>
        <Route path='/Bandwidth-For-Business' element={<Business/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin/*' element={<AdminRoutes/>}/>
        {/* <Route path='/admin/edit/:id' element={<EditHomePlans/>}/> */}
        
    </Routes>
   
        
    </Router>
    </>
  )
}

export default App