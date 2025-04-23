import React from "react";

import { SectionWrapper } from "../components/canvas";
import { technologies } from "../constants";
import BallCanvas from "../components/canvas/Ball";

const Tech = () => {
  return (
    
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology,index) => (
        
        <div className='w-28 h-28' key={index}>
          <BallCanvas icon={technology.icon} />
          
        </div>
      ))}
    </div>
  );
};

export default Tech;
