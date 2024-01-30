import React from 'react'
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'


const App = () => {
  return (
    <>
   <main className='bg-slate-300/20'>
    <Router>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/Home" element={<Home/>}/>
           <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            
         
        </Routes>
    </Router>
   </main>
   </>
  )
}

export default App