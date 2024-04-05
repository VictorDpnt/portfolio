import React from "react";
import { MeteorsDemo } from "./Cardsmeteor";

const Projets = () => {
  const array = [
    {
      title: "MEDIAMOVIE",
      description:
        "Destination pour tout ce qui concerne le monde du cinéma et des séries ! Découvrez des informations complètes, les plateformes de diffusion, des bandes-annonces, ainsi que des recommandations de titres similaires. Incluant également un système de favoris.",
      img: "/images/mediamovie.png",
      link: "https://media-movie-app.netlify.app/",
      linkGithub: "https://github.com/VictorDpnt/MOVIE-APP",
    },
    {
      title: "CryptoWatch",
      description:
        "Explorez une liste complète des crypto-actifs les plus importants, accompagnée de graphiques détaillés sur leur évolution, tout en bénéficiant d'un système d'affichage personnalisé. ",
      img: "/images/crypto.PNG",
      link: "https://cryptowatch-analyzer.netlify.app/",
      linkGithub: "https://github.com/VictorDpnt/Crypto-APP",
    },
    {
      title: "INCONNU",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae repellendus ipsam ea magnam. Exercitationem laudantium, adipisci ipsum voluptate nihil, magni quibusdam reprehenderit quod rem alias vel suscipit hic sequi commodi!",
      img: "/images/mediamovie.png",
      link: "https://cryptowatch-analyzer.netlify.app/",
      linkGithub: "https://github.com/VictorDpnt/MOVIE-APP",
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
