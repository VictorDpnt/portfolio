import React, { useState } from "react";
import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { FaRegEye } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import Points from "./Points";

interface Projet {
  title: string;
  description: string;
  img: string;
  link: string;
  linkGithub: string;
}


export function MeteorsDemo({ projet }: { projet: Projet }) {
  const [overCard, letOverCard] = useState(false);

  return (
    <div className="cards-container">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500  blur-3xl" />
      <a href={projet.link} target="_blank">
        <div className=" card relative shadow-xl   h-full overflow-hidden  flex flex-col justify-end items-start">
          <div
            className={overCard ? "img-cards active" : "img-cards"}
            onMouseEnter={() => letOverCard(true)}
            onMouseLeave={() => letOverCard(false)}
          >
            <img src={projet.img} />
          </div>

          {overCard && (
            <div
              className="hover"
              onMouseEnter={() => letOverCard(true)}
              onMouseLeave={() => letOverCard(false)}
            >
              <div className="logo-card">
                <GrReactjs className="logo-1" />
                <SiRedux className="logo-2" />
                <DiSass className="logo-3" />
              </div>
              <p>{projet.description}</p>
            </div>
          )}


          {/* <Meteors number={20} /> */}
        </div>
      </a>

      <div className="title-link">
        <Points />
        <a href={projet.link} target="_blank">
          <h1>{projet.title}</h1>
        </a>
        <div className="link">
          <a href={projet.link} target="_blank">
            <button>
              <FaRegEye className="mr-2 size-5" /> Explore
            </button>
          </a>
          <a href={projet.linkGithub} target="_blank">
            <button>
              <IoLogoGithub className="mr-2 size-5" /> GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
