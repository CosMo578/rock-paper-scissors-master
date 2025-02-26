import { useState, useEffect } from "react";

import { rps } from "../constants";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import PopupModal from "../components/Modal";
import MobileStatus from "../components/MobileStatus";

const firstGame = () => {
  const [openModal, setOpenModal] = useState(true);

  const [status, setStatus] = useState("");
  const [playerSelection, setPlayerSelection] = useState("");
  const [computerSelection, setComputerSelection] = useState("");

  const [playerScore, setPlayerScore] = useState(() => {
    if (typeof window !== "undefined") {
      const storedScore = localStorage.getItem("userScore");
      return storedScore ? Number(storedScore) : 0;
    }
    return 0;
  });

  const playAgain = () => {
    setPlayerSelection("");
    setComputerSelection("");
    setStatus("");
  };

  useEffect(() => {
    if (playerSelection === "") {
      return;
    }

    const playGame = (userChoice) => {
      const choices = ["rock", "paper", "scissors"];
      const computerChoice = choices[Math.floor(Math.random() * 3)];

      setTimeout(() => {
        setComputerSelection(computerChoice);

        if (userChoice === computerChoice) {
          setStatus("draw");
        } else if (
          (userChoice === "rock" && computerChoice === "scissors") ||
          (userChoice === "scissors" && computerChoice === "paper") ||
          (userChoice === "paper" && computerChoice === "rock")
        ) {
          setStatus("win");
          setPlayerScore((prev) => prev + 1);
          localStorage.setItem("userScore", playerScore + 1);
        } else {
          setStatus("lose");
        }
      }, 1000);
    };

    playGame(playerSelection);
  }, [playerSelection]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-between overflow-x-hidden px-8 py-10 max-md:gap-12">
      <Header logo="logo" playerScore={playerScore} />

      {playerSelection === "" ? (
        <Step1
          gameOptions={rps}
          width={313}
          height={278}
          setPlayerSelection={setPlayerSelection}
        >
          <svg
            className=""
            width="313"
            height="278"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="#000"
              strokeWidth="15"
              fill="none"
              opacity=".2"
              d="M156.5 262 300 8H13z"
            />
          </svg>
        </Step1>
      ) : (
        <Step2
          playerSelection={playerSelection}
          computerSelection={computerSelection}
          status={status}
          playAgain={playAgain}
        />
      )}

      <MobileStatus playAgain={playAgain} status={status} />

      <Footer setOpenModal={setOpenModal} />

      <PopupModal
        image="image-rules"
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </section>
  );
};

export default firstGame;
