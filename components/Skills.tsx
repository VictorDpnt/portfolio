import React from "react";
import Badge from "./Badge";
import { FaReact, FaSass } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";
import { SiRedux } from "react-icons/si";

const Skills = () => {
  return (
    <div className="skils">
      {/* <div className="title-containt"> <h2>
      DEV
    </h2>
    <h2>
      DESIGN
    </h2></div> */}
      <div className="skills-container">
        <div className="dev">
          <Badge logo={<FaReact />} theme={"blue"} title={"React"} />
          <Badge logo={<FaSass />} theme={"pink"} title={"Sass"} />
          <Badge
            logo={<SiTypescript />}
            theme={"yellow"}
            title={"TypeScript"}
          />
          <Badge logo={<DiRuby />} theme={"red"} title={"Rails"} />
          <Badge logo={<TbSql />} theme={"grey"} title={"SQL"} />
          <Badge
            logo={<FaBootstrap />}
            theme={"blue-sky"}
            title={"Bootstrap"}
          />
          <Badge logo={<SiRedux />} theme={"tomato"} title={"Redux"} />
          <Badge logo={<FiFigma />} theme={"green"} title={"Figma"} />
        </div>

        {/* <div className="design">
        <Badge logo={<FiFigma />} theme={"green"} title={"Figma"}/>
        <Badge logo={<SiAdobephotoshop />} theme={"purple"} title={"Photoshop"}/>
      </div> */}
      </div>
    </div>
  );
};

export default Skills;
