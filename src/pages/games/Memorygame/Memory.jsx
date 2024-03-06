import Cards from './Cards'
import { NavLink } from 'react-router-dom';

function Memory() {
  return (
    <>
    <h1 className='float sm:text-xl sm:leading-snug text-center neo-brutalism-black py-0 px-8 text-white mx-4'>
        <NavLink to ="/Home" className="w-10 h-10 rounded-lg bg-black items-center justify-center flex font-bold shadow-md">
          <p className="white-gradient_text"><br />GW</p>
        </NavLink>
      Memory Game
      </h1>
      <br></br>
    <div className="memory">
      
      <Cards />
    </div></>
  );
}

export default Memory;