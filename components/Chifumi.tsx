import React, { useState } from "react";
import { GrPowerReset } from "react-icons/gr";

const choices = ["Rock", "Paper", "Scissors"];

const getRandomChoice = () =>
  choices[Math.floor(Math.random() * choices.length)];

const Chifumi = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [score, setScore] = useState({ player: 0, computer: 0 });
  const [win, setWin] = useState("");

  const determineWinner = (player: string, computer: string) => {
    if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Paper" && computer === "Rock") ||
      (player === "Scissors" && computer === "Paper")
    ) {
      setScore({ ...score, player: score.player + 1 });
      return "Win";
    } else if (player === computer) {
      return "Egality";
    } else {
      setScore({ ...score, computer: score.computer + 1 });
      return "Loose";
    }
  };

  const handleClick = (choice: string) => {
    const computerChoice = getRandomChoice();
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    const winner = determineWinner(choice, computerChoice);
    setWin(winner);
  };

  const resetGame = () => {
    setPlayerChoice("");
    setComputerChoice("");
    setScore({ player: 0, computer: 0 });
    setWin("");
  };

  return (
    <>
      <div className="game-container ">
        <div className=" shadow absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.70] bg-red-500  blur-3xl " />
        <h1>Chifumi</h1>
        <div className="btn">
          <button onClick={() => handleClick("Rock")}>Rock</button>
          <button onClick={() => handleClick("Paper")}>Paper</button>
          <button onClick={() => handleClick("Scissors")}>Scissors</button>
        </div>
        <p className="computer">Computer: {computerChoice}</p>
        <p className="result">{win} </p>
        <div className="score">
          <p>Player: {score.player}</p>
          <p>Computer: {score.computer}</p>
        </div>
        <button className="reset" onClick={resetGame}>
          <GrPowerReset />
        </button>
      </div>
    </>
  );
};

export default Chifumi;
