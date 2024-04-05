import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { NavLink } from 'react-router-dom';
function Leaderboard() {
  const [key, setKey] = useState('home');
  const [flappyBirdScores, setFlappyBirdScores] = useState([]);
  const [candyCrushScores, setCandyCrushScores] = useState([]);
  const [tetrisScores, setTetrisScores] = useState([]);

  //display flappybird score
  useEffect(() => {
    const fetchFlappyBirdScores = async () => {
      try {
        const response = await axios.get('http://localhost:3000/flappybirdscores');
        setFlappyBirdScores(response.data);
      } catch (error) {
        console.error('Error fetching Flappy Bird leaderboard data:', error);
      }
    };

    fetchFlappyBirdScores();
  }, []);

  //display candycrush score
  useEffect(() => {
    const fetchCandyCrushScores = async () => {
      try {
        const response = await axios.get('http://localhost:3000/candycrushscores');
        setCandyCrushScores(response.data);
      } catch (error) {
        console.error('Error fetching Candy Crush leaderboard data:', error);
      }
    };

    fetchCandyCrushScores();
  }, []);

  useEffect(() => {
    const fetchTetrisScores = async () => {
      try {
        const response = await axios.get('http://localhost:3000/tetrisscores');
        setTetrisScores(response.data);
      } catch (error) {
        console.error('Error fetching Candy Crush leaderboard data:', error);
      }
    };

    fetchTetrisScores();
  }, []);
  return (
    <>
    <h1 className='float sm:text-xl sm:leading-snug text-center neo-brutalism-black py-0 px-8 text-white mx-4' >
        <NavLink to ="/Home" className="w-10 h-10 rounded-lg bg-black items-center justify-center flex font-bold shadow-md">
          <p className="white-gradient_text"><br />GW</p>
        </NavLink>
    LeaderBoard
      </h1><br></br>
    <Tabs style={{ backgroundColor: '#000000', border: '2px solid #000000', borderRadius: '5px' , color:"ffffff"}}
  
      //id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
     // className="mb-3"
    >
      <Tab eventKey="flappy" title="FlappyBird">
      <div style={{ border: '3px solid #000000', padding: '10px', borderRadius: '5px' }}>
  <table style={{ borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      <tr>
        <th style={{ borderBottom: '3px solid #000000',borderRight: '3px solid #000000'}}>Name</th>
        <th style={{ borderBottom: '3px solid #000000' }}>Score</th>
      </tr>
    </thead>
    <tbody>
      {flappyBirdScores.map((score, index) => (
        <tr key={index}>
          <td style={{ borderRight: '3px solid #000000' }}>{score.userName}</td>
          <td>{score.score}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


      </Tab>
      <Tab eventKey="candy" title="CandyCrush">
      <div style={{ border: '3px solid #000000', padding: '10px', borderRadius: '5px' }}>
  <table style={{ borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      <tr>
        <th style={{ borderBottom: '3px solid #000000',borderRight: '3px solid #000000'}}>Name</th>
        <th style={{ borderBottom: '3px solid #000000' }}>Score</th>
      </tr>
    </thead>
    <tbody>
      {candyCrushScores.map((score, index) => (
        <tr key={index}>
          <td style={{ borderRight: '3px solid #000000' }}>{score.userName}</td>
          <td>{score.score}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
      </Tab>
      <Tab eventKey="memory" title="Memory Game">
        Tab content for Memory Game
      </Tab>
      <Tab eventKey="tetris" title="Tetris">
      <div style={{ border: '3px solid #000000', padding: '10px', borderRadius: '5px' }}>
  <table style={{ borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      <tr>
        <th style={{ borderBottom: '3px solid #000000',borderRight: '3px solid #000000'}}>Name</th>
        <th style={{ borderBottom: '3px solid #000000' }}>Score</th>
      </tr>   
    </thead>
    <tbody>
      {tetrisScores.map((score, index) => (
        <tr key={index}>
          <td style={{ borderRight: '3px solid #000000' }}>{score.userName}</td>
          <td>{score.score}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
      </Tab>
    </Tabs></>
  );
}

export default Leaderboard;
