import React from 'react'
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

import Flappybird from './pages/games/Flappybird'
import Candycrush from './pages/games/Candycrush';
import Memory from './pages/games/Memorygame/Memory';
import TicTacToe from './pages/games/xo/TicTacToe';
import Tetris from './pages/games/Tetris/Tetris';
import DescriptionCandy from './pages/DescriptionCandy';
import DescriptionFlappy from './pages/DescriptionFlappy';
import DescriptionTetris from './pages/DescriptionTetris';
import DescriptionTic from './pages/DescriptionTic';
import DescriptionMemory from './pages/DescriptionMemory';
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
           
            <Route path="/Flappybird" element={<Flappybird/>}/>
           <Route path="/Candycrush" element={<Candycrush/>}/> 
           <Route path="/TicTacToe" element={<TicTacToe/>}/> 
           <Route path="/Memory" element={<Memory/>}/> 
           <Route path="/Tetris" element={<Tetris/>}/> 
           <Route path="/DescriptionCandy" element={<DescriptionCandy/>}/> 
           <Route path="/DescriptionTetris" element={<DescriptionTetris/>}/> 
           <Route path="/DescriptionFlappy" element={<DescriptionFlappy/>}/> 
           <Route path="/DescriptionMemory" element={<DescriptionMemory/>}/> 
           <Route path="/DescriptionTic" element={<DescriptionTic/>}/> 
        </Routes>
    </Router>
   </main>
   </>
  )
}

export default App