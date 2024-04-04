"use client";
import React, { useEffect } from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import Projets from "@/components/Projets";
import ExpPassWord from "@/components/ExpPassWord";
import Chifumi from "@/components/Chifumi";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";



export default function Home() {

  useEffect(() => {
  
    const handleScroll = () => {
     
      const scrollTop: number = window.scrollY || document.documentElement.scrollTop;
      console.log(scrollTop);
    };

   
    window.addEventListener('scroll', handleScroll);

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className="h-[58rem] w-full  relative  ">
        <Navbar/>
        <section className="about">
          <div className="container">
            {/* <MainPoints/> */}
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
          <div className="container-picture">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500  blur-3xl" />
            <div className="picture"></div>
            {/* <img src="" alt="" className="photo" /> */}
          </div>
        </section>
        <BackgroundBeams />
      </div>
      <div className="title-section">Main Projects</div>
      <Projets />
      <div className="title-section">Projects</div>
      <div className="experience"> 
        <div className="experience-center">
          <ExpPassWord />
          <Chifumi />
          {/* <BubbleShooter /> */}
        </div>
      </div>
      <div className="title-section">Skills</div>
      <Skills/>
      <div className="title-section ">Contact</div>
    </>
  );
}
