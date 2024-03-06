import React from 'react';
import './Descriptioncss.css'; // Assuming you have a CSS file for styling
import { NavLink, useNavigate } from 'react-router-dom';

function DescriptionCandy() {
  const navigate = useNavigate();

  const handlePlayButtonClick = () => {
    // Handle play button click event
    navigate('/Memory');

  };

  return (
    <div>
       <h1 className='float sm:text-xl sm:leading-snug text-center neo-brutalism-black py-0 px-8 text-white mx-4'>
        <NavLink to ="/Home" className="w-10 h-10 rounded-lg bg-black items-center justify-center flex font-bold shadow-md">
          <p className="white-gradient_text"><br />GW</p>
        </NavLink>
   Memory Game
      </h1>
      <div className="container">
        <div className="game-image">
          <img src="https://img.freepik.com/free-vector/hand-drawn-memory-game-card_23-2150138540.jpg" alt="Game Image" />
        </div>
        <div className="game-description">
          <h2>Memory Game</h2>
          <p>A memory game is a mental exercise where players are presented with a set of cards face down. They take turns flipping pairs of cards to find matching pairs. The game requires concentration and remembering the location of previously revealed cards to make successful matches.</p>
          <button onClick={handlePlayButtonClick}>Play Now</button>
          <button onClick={handlePlayButtonClick}>Dashboard</button>
        </div>
      </div>
    </div>
  );
}

export default DescriptionCandy;
