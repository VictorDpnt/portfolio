import React from 'react';
import Badge from './Badge';
import { FaReact,FaSass  } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { SiAdobephotoshop } from "react-icons/si";
import { SiRedux } from "react-icons/si";



const Skills = () => {


  return (
    <div className="skils">
   <div className="title-containt"> <h2>
      DEV
    </h2>
    <h2>
      DESIGN
    </h2></div>
      <div className='skills-container'>
      
      <div className="dev">
        <Badge logo={ <FaReact />} theme={"blue"} title={"React"}/>
        <Badge logo={ <FaSass />} theme={"pink"} title={"Sass"}/>
        <Badge logo={<SiTypescript /> } theme={"yellow"} title={"TypeScript"}/>
        <Badge logo={<DiRuby />} theme={"red"} title={"Rails"}/>      
        <Badge logo={<SiNextdotjs />} theme={"grey"} title={"Next.js"}/>
        <Badge logo={<SiTailwindcss />} theme={"blue-sky"} title={"Tailwind"}/>
        <Badge logo={<SiRedux />} theme={"tomato"} title={"Redux"}/>
      </div>


      <div className="design">
        <Badge logo={<FiFigma />} theme={"green"} title={"Figma"}/>
        <Badge logo={<SiAdobephotoshop />} theme={"purple"} title={"Photoshop"}/>
      </div>

    </div>
    </div>
  );
};

export default Skills;

