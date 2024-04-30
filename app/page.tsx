"use client";
import React, { useEffect, useState } from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import Projets from "@/components/Projets";
import ExpPassWord from "@/components/ExpPassWord";
import Chifumi from "@/components/Chifumi";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import { AiFillEye } from "react-icons/ai";
// import { CopyToClipboard } from "react-copy-to-clipboard";






export default function Home() {
  const[display, setDisplay] = useState(false)

  const texteOriginal = "victordupont1407@gamil.com";

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


const openPDFInNewWindow = () => {
      window.open('/images/CV Victor Dupont SFR.pdf', '_blank');
    }


  const copyDisplay = ()=>{
    setDisplay(true);

    setTimeout(() => {
      setDisplay(false);
    }, 2000);
  }


  return (
    <>
      <div className="h-[40rem] w-full  relative  ">
        <Navbar/>
        <section className="about" id="about">
          <div className="container">
            {/* <MainPoints/> */}

            <h1>Victor Dupont</h1>
            <p>
            Student at Epitech, I am looking for an apprenticeship <br /> as a developer.
            </p>
            <div className="container-btn">
              <div className="btn">
                <span className="logo-btn">
                  <AiFillGithub />
                </span>
                <a href="https://github.com/VictorDpnt" target="_blank">
                Github
                </a>
              </div>
{/*
              <div className="btn">
                <span className="logo-btn">
                  <BsLinkedin />
                </span>
                Linkdin
              </div> */}

              <div className="btn" onClick={()=> openPDFInNewWindow()}>
                <span className="logo-btn">
                  <AiFillEye />
                </span>
                Show CV
              </div>
              {/* <CopyToClipboard text={"victordupont1407@gmail.com"}>
              <div className="btn" onClick={copyDisplay} >
              <span className="logo-btn" >
              <MdMail />
              </span>
             victordupont1407@gmail.com
              </div>
              </CopyToClipboard> */}
              {display && <p className="copy">Copy !</p>}
            </div>
          </div>
          <div className="container-picture">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500  blur-3xl" />
            <div className="picture"></div>
            <img src="/images/Sujet.png" alt="" className="photo" />
            {/* <img src="" alt="" className="photo" /> */}
          </div>
        </section>
        {/* <BackgroundBeams /> */}
      </div>
      <div className="title-section" id="main">Main Projects</div>
      <Projets />
      <div className="title-section" id="exp">Experiences</div>
      <div className="experience">
        <div className="experience-center">
          <ExpPassWord />
          <Chifumi />
          {/* <BubbleShooter /> */}
        </div>
      </div>
      <div className="title-section" id="skills">Skills</div>
      <Skills/>
      {/* <div className="title-section ">Contact</div> */}
    </>
  );
}
