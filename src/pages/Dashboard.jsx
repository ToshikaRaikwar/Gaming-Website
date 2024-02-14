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
      </h1>
      <div className='row1'>
        <NavLink to="/" className="card mt-5" style={{ "width": "18rem", "maxHeight": "500px" }}>
          <img className="card-image" src="https://cdn.vox-cdn.com/thumbor/qV6KOiJc3-1sO36Y-VsiEddNba4=/47x0:572x350/1200x800/filters:focal(47x0:572x350)/cdn.vox-cdn.com/uploads/chorus_image/image/28172849/flappy-bird-.0.jpg" alt="Flappy Bird" />
          <div className="card-body">
            <h5 className="card-title">Flappy Bird</h5>
          </div>
        </NavLink>
        <NavLink to="/" className="card mt-5" style={{ "width": "18rem", "maxHeight": "500px" }}>
          <img className="card-image" src="https://e0.pxfuel.com/wallpapers/365/859/desktop-wallpaper-red-block-widescreen.jpg" alt="Avoid Red" />
          <div className="card-body">
            <h5 className="card-title">Avoid Red</h5>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
