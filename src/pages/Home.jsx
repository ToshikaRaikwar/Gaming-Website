import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { NavLink} from "react-router-dom";
import { HomeInfo, Loader, Navbar } from "../components";
import { Island, Sky } from "../models";

import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const navigate = useNavigate();
  const togglePopup = () => {
    alert("Login to Play");
    navigate('/Login')
  }
 
  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <div>
     <header className='header'>
     <NavLink onClick={togglePopup} className="w-10 h-10 rounded-lg bg-black items-center justify-center flex font-bold shadow-md">

         <p className="white-gradient_text">GW</p>
      </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
          <NavLink to="/login" className={({isActive})=>isActive ? 'text-blue-500': 'text-black'}>LogIn</NavLink>
        </nav>
        <nav className='flex text-lg gap-7 font-medium'>
          <NavLink to="/register" className={({isActive})=>isActive ? 'text-blue-500': 'text-black'}>Register</NavLink>
        </nav>
    </header>
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />

          
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
        
        </Suspense>
      </Canvas>

      
    </section>
    </div>
  );
};

export default Home;
