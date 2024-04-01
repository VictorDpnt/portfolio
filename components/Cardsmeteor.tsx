import React, { useState } from "react";
import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { FaRegEye } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

export function MeteorsDemo({ projet }) {
  const [overCard, letOverCard] = useState(false);

  return (
    <div className="cards-container">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500  blur-3xl" />
      <a href={projet.link}>
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
                <GrReactjs />
                <SiRedux />
                <DiSass />
              </div>
              <p>{projet.description}</p>
            </div>
          )}

          {/* Meaty part - Meteor effect */}
          {/* <Meteors number={20} /> */}
        </div>
      </a>

      <div className="title-link">
        <img src="/images/téléchargement.svg" alt="" />{" "}
        <a href={projet.link}>
          <h1>{projet.title}</h1>
        </a>
        <div className="link">
          <a href={projet.link}>
            <button>
              <FaRegEye className="mr-2 size-5" /> Explore
            </button>
          </a>
          <a href={projet.linkGithub}>
            <button>
              <IoLogoGithub className="mr-2 size-5" /> GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
