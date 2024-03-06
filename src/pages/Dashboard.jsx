import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <h1 className='float sm:text-xl sm:leading-snug text-center neo-brutalism-black py-0 px-8 text-white mx-4'>
        <NavLink to ="/Home" className="w-10 h-10 rounded-lg bg-black items-center justify-center flex font-bold shadow-md">
          <p className="white-gradient_text"><br />GW</p>
        </NavLink>
        Choose from your Favourites
      </h1><div className='rows'>
      <div className='row1'>
        <NavLink to="/DescriptionFlappy" className="card mt-5" style={{ "width": "18rem", "maxHeight": "500px" }}>
          <img className="card-image" src="https://cdn.vox-cdn.com/thumbor/qV6KOiJc3-1sO36Y-VsiEddNba4=/47x0:572x350/1200x800/filters:focal(47x0:572x350)/cdn.vox-cdn.com/uploads/chorus_image/image/28172849/flappy-bird-.0.jpg" alt="Flappy Bird" />
          <div className="card-body">
            <h5 className="card-title">Flappy Bird</h5>
          </div>
        </NavLink>
        <NavLink to="/DescriptionCandy" className="card mt-5" style={{ "width": "18rem", "maxHeight": "500px" }}>
          <img className="card-image" src="https://articles-images.sftcdn.net/wp-content/uploads/sites/8/2014/11/Candy-Crush-Saga.jpg" alt="Avoid Red" />
          <div className="card-body">
            <h5 className="card-title">Candy Crush</h5>
          </div>
        </NavLink>
        <NavLink to="/DescriptionTic" className="card mt-5" style={{ "width": "18rem", "maxHeight": "500px" }}>
          <img className="card-image" src="https://play-lh.googleusercontent.com/EUgRlCOH_jwtW39SaG7XeKq8pJsQfKkZB4MYED18npdsKeRZDmN9xVsSV3nbpoJGgIU=w526-h296-rw" alt="Avoid Red" />
          <div className="card-body">
            <h5 className="card-title">Tic Tac Toe</h5>
          </div>
        </NavLink>
        </div>
        <div className='row1'>
        <NavLink to="/DescriptionMemory" className="card mt-5" style={{ "width": "18rem", "maxHeight": "500px" }}>
          <img className="card-image" src="https://www.cbc.ca/kids/images/sweetymemory_thumb.jpg" alt="Avoid Red" />
          <div className="card-body">
            <h5 className="card-title">Memory Game</h5>
          </div>
        </NavLink>
        <NavLink to="/DescriptionTetris" className="card mt-5" style={{ "width": "18rem", "maxHeight": "500px" }}>
          <img className="card-image" src="https://m.media-amazon.com/images/I/71hV2ffEnEL.png" alt="Avoid Red" />
          <div className="card-body">
            <h5 className="card-title">Tetris</h5>
          </div>
        </NavLink>
       
      </div></div>
      </div>
  );
}
