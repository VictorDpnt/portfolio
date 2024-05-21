import React from "react";
import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { TbSql } from "react-icons/tb";
import { MeteorsDemo } from "./Cardsmeteor";

const Projets = () => {
  const array = [
    {
      title: "MEDIAMOVIE",
      description:
        "Le site a été développé en React et est alimenté par l'API TMDB ! On y retrouve des informations complètes, les plateformes de diffusion, des bandes-annonces, ainsi que des recommandations de titres similaires. Incluant également un système de favoris avec le Local Storage.",
      img: "/images/mediamovie.png",
      link: "https://media-movie-app.netlify.app/",
      linkGithub: "https://github.com/VictorDpnt/MOVIE-APP",
      logo: [
        <GrReactjs className="logo-1" />,
        <SiRedux className="logo-2" />,
        <DiSass className="logo-3" />,
      ],
    },
    {
      title: "CryptoWatch",
      description:
        "Explorez une liste complète des crypto-actifs les plus importants, accompagnée de graphiques détaillés sur leur évolution, tout en bénéficiant d'un système d'affichage personnalisé. Ce dernier est alimenté par l'API CoinGecko ",
      img: "/images/crypto.PNG",
      link: "https://cryptowatch-analyzer.netlify.app/",
      linkGithub: "https://github.com/VictorDpnt/Crypto-APP",
      logo: [
        <GrReactjs className="logo-1" />,
        <SiRedux className="logo-2" />,
        <DiSass className="logo-3" />,
      ],
    },
    {
      title: "Animalib",
      description:
        "L'application est en cours de développement ! Celle-ci permettra aux utilisateurs de gérer : leurs rendez-vous, des fiches patients pour leurs animaux et d’accéder à un service de chat.",
      img: "/images/animalib.png",
      link: "https://github.com/VictorDpnt",
      linkGithub: "https://github.com/VictorDpnt",
      logo: [
        <SiRubyonrails className="logo-1" />,
        <TbSql className="logo-2" />,
        <FaBootstrap className="logo-3" />,
      ],
    },
  ];

  return (
    <div>
      <div className="projets">
        {array.map((projet, index) => (
          <MeteorsDemo key={index} projet={projet} />
        ))}
      </div>
    </div>
  );
};

export default Projets;
