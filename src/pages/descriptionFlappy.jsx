import React from 'react';
import './Descriptioncss.css'; // Assuming you have a CSS file for styling
import { NavLink, useNavigate } from 'react-router-dom';

function DescriptionCandy() {
  const navigate = useNavigate();

  const handlePlayButtonClick = () => {
    // Handle play button click event
    navigate('/Flappybird');
  };
  const handleLeaderButtonClick = () => {
    navigate('/Leaderboard');
  };

  return (
    <div>
       <h1 className='float sm:text-xl sm:leading-snug text-center neo-brutalism-black py-0 px-8 text-white mx-4'>
        <NavLink to ="/Homelogout" className="w-10 h-10 rounded-lg bg-black items-center justify-center flex font-bold shadow-md">
          <p className="white-gradient_text"><br />GW</p>
        </NavLink>
    Flappy bird
      </h1>
      
      <div className="container">
        <div className="game-image">
          <img src="https://www.researchgate.net/profile/Robert-Wendrich/publication/318013884/figure/fig6/AS:510529169838080@1498731047792/Screenshot-of-original-Flappy-Bird-Game-GUI-left.png" alt="Game Image" />
        </div>
        <div className="game-description">
          <h2>Flappy Bird</h2>
          <p>Flappy Bird, a mobile sensation, entranced players globally with its addictive gameplay. Players guide a bird by tapping the screen, propelling it upward to navigate through tight spaces between scrolling green pipes. Precision is vital; mistimed taps lead to crashes and game over. Its minimalist design and intuitive mechanics garnered widespread appeal, drawing players of all ages to chase high scores by mastering its challenging controls and unforgiving obstacles</p>
          <button onClick={handlePlayButtonClick}>Play Now</button>
          <button onClick={handleLeaderButtonClick}>Dashboard</button>
        </div>
      </div>
    </div>
  );
}

export default DescriptionCandy;
