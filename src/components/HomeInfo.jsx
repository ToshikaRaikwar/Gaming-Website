import { Link } from "react-router-dom";



const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-black py-2 px-8 text-white mx-5'>
        Hi, Welcome to our<br />
        <span className='font-semibold mx-2 text-white'> Gaming Website</span>
        👋
        
    
      </h1>
    );

  

 


  return null;
};

export default HomeInfo;
