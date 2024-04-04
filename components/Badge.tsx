import React, { ReactNode, useState } from 'react';

interface BadgeProps {
  logo: ReactNode;
  theme: string; 
  title: string;
}

const Badge: React.FC<BadgeProps> = ({ logo, theme, title }) => {

const[hover, setHover] = useState(false)

  return (
    <div className={`badge-container ${theme}`} onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)}>
      {logo}
      {hover && <div className="hover">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.40] bg-red-500  blur-3xl" />
        <div className="bg-hover"></div>
        <h6>{title}</h6>
      </div> }
      
    </div>
  );
};

export default Badge;