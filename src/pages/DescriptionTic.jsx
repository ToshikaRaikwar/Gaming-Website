import React from 'react';
import './Descriptioncss.css'; // Assuming you have a CSS file for styling
import { NavLink, useNavigate } from 'react-router-dom';

function DescriptionCandy() {
  const navigate = useNavigate();

  const handlePlayButtonClick = () => {
    // Handle play button click event
    navigate('/TicTacToe');
    // You can navigate to the game page or start the game logic here
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
          <img src="https://cdn.ndtv.com/tech/images/gadgets/candy-crush-saga-635x475.jpg" alt="Game Image" />
        </div>
        <div className="game-description">
          <h2>Candy Crush</h2>
          <p>Candy Crush is a highly addictive puzzle game where players match colorful candies to progress through hundreds of levels. By swapping adjacent candies to create rows or columns of three or more matching candies, players can clear obstacles, meet level objectives, and earn points.It is known for its vibrant graphics, engaging gameplay mechanics, and challenging levels.</p>
          <button onClick={handlePlayButtonClick}>Play Now</button>
          <button onClick={handlePlayButtonClick}>Dashboard</button>
        </div>
      </div>
    </div>
  );
}

export default DescriptionCandy;
