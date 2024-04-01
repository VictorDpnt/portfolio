import React from "react";
import { Meteors } from "../components/ui/meteors";
import Image from "next/image";

export function MeteorsDemo() {
  return (
    <div className="">
      <div className="cards-container">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className=" test relative shadow-xl  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
         <div className="img-cards">
          <Image src="/images/mediamovie.png"  width={300} height={200}/>
         </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            MEDIAMOVIE
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae repellendus ipsam ea magnam. Exercitationem laudantium, adipisci ipsum voluptate nihil, magni quibusdam reprehenderit quod rem alias vel suscipit hic sequi commodi!
          </p>

          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button>

          {/* Meaty part - Meteor effect */}
          {/* <Meteors number={0} /> */}
        </div>
      </div>
    </div>
  );
}
