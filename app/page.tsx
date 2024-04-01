"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import Projets from "@/components/Projets";
import Experiences from "@/components/Experiences";
export default function Home() {
  return (
    <>
      <div className="h-[58rem] w-full  relative  ">
        <section className="about">
          <div className="container">
            <h6>Hey ! I'm-</h6>
            <h1>Victor Dupont</h1>
            <p>
              I'm looking for Lorem, ipsum dolor sit <br /> amet consectetur
              adipisicing elit. Illum, ad
            </p>
            <div className="container-btn">
              <div className="btn">
                <span className="logo-btn">
                  <AiFillGithub />
                </span>
                Github
              </div>

              <div className="btn">
                <span className="logo-btn">
                  <BsLinkedin />
                </span>
                Linkdin
              </div>
              <div className="btn">
                <span className="logo-btn">
                  <BsDownload />
                </span>
                Download CV
              </div>
              <div className="btn">
                <span className="logo-btn">
                  <MdMail />
                </span>
                Contact
              </div>
            </div>
          </div>
          <div className="picture"></div>
        </section>
        <BackgroundBeams />
      </div>
      <div className="title-section">My Projects</div>
      <Projets />
      <Experiences />
    </>
  );
}
