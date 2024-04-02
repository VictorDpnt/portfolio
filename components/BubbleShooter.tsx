import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const BubbleShooter: React.FC = () => {
  const [messages, setMessages] = useState<JSX.Element[]>([]);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [score, setScore] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isScrolling) {
      interval = setInterval(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          <span key={key} className="bubble"></span>,
        ]);
      }, 600);
    } else {
      clearInterval(interval); // Arrêter l'intervalle si le défilement est désactivé
    }

    return () => clearInterval(interval); // Nettoyer l'intervalle lors du démontage du composant
  }, [isScrolling]);

  const keyMaker = () => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, 600); // 600 millisecondes = 0.6 seconde

    // Retourne une fonction de nettoyage pour arrêter l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  };

  const resetMessages = () => {
    setMessages([]);
  };

  const removeMessage = (indexToRemove: number) => {
    setMessages((prevMessages) =>
      prevMessages.filter((_, index) => index !== indexToRemove)
    );
  };

  const calcScore = () => {
    setScore(score + 1);
  };

  console.log(key);

  return (
    <div className="container.bubble">
      <AlertDialog>
        <AlertDialogTrigger>
          <span
            onClick={() => {
              setIsScrolling(true);
              keyMaker();
            }}
          >
            Open
          </span>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <div className="game-window">
            <h3 className="score">{score}</h3>
            <div>
              {messages.map((message, index) => (
                <span
                  key={index}
                  onClick={() => {
                    removeMessage(index);
                    calcScore();
                  }}
                >
                  {message}
                </span>
              ))}
            </div>
          </div>
          <AlertDialogCancel
            onClick={() => {
              setIsScrolling(false);
              resetMessages();
              setScore(0);
            }}
          >
            Close
          </AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default BubbleShooter;
