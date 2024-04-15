import React from 'react';
import './Descriptioncss.css'; // Assuming you have a CSS file for styling
import { NavLink, useNavigate } from 'react-router-dom';

function DescriptionCandy() {
  const navigate = useNavigate();

  const handlePlayButtonClick = () => {
    // Handle play button click event
    navigate('/Tetris');
    // You can navigate to the game page or start the game logic here
  };

  const handleLeaderButtonClick = () => {
  
    navigate('/Leaderboard');
  };

  return (
    <div>
       <h1 className='float sm:text-xl sm:leading-snug text-center neo-brutalism-black py-0 px-8 text-white mx-4'>
        <NavLink to ="/Home" className="w-10 h-10 rounded-lg bg-black items-center justify-center flex font-bold shadow-md">
          <p className="white-gradient_text"><br />GW</p>
        </NavLink>
     Candy Crush
      </h1>
      
      <div className="container">
        <div className="game-image">
          <img src="https://assetsio.reedpopcdn.com/eas-tetris-games-are-vanishing-from-mobiles-1579798533114.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" alt="Game Image" />
        </div>
        <div className="game-description">
          <h2>Tetris</h2>
          <p>Tetris is a classic puzzle game where players strategically arrange falling blocks, to create complete horizontal lines. As the blocks descend faster and the playfield fills up, players must think quickly and make efficient placements to keep the game going. With its simple yet addictive gameplay and timeless appeal, "Tetris" has remained a beloved classic since its creation in 1984 by Alexey Pajitnov.</p>
          <button onClick={handlePlayButtonClick}>Play Now</button>
          <button onClick={handleLeaderButtonClick}>Dashboard</button>
        </div>
      </div>
    </div>
  );
}

export default DescriptionCandy;
