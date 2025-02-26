import { useState, useEffect } from "react";

import { rpsls } from "../constants";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import PopupModal from "../components/Modal";
import MobileStatus from "../components/MobileStatus";

const secondGame = () => {
  const [openModal, setOpenModal] = useState(true);

  const [status, setStatus] = useState("");
  const [playerSelection, setPlayerSelection] = useState("");
  const [computerSelection, setComputerSelection] = useState("");

  const [playerScore, setPlayerScore] = useState(() => {
    if (typeof window !== "undefined") {
      const storedScore = localStorage.getItem("secondGameUserScore");
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

    const winConditions = new Set([
      "scissors-paper",
      "paper-rock",
      "rock-lizard",
      "lizard-spock",
      "spock-scissors",
      "scissors-lizard",
      "paper-spock",
      "rock-scissors",
      "lizard-paper",
      "spock-rock",
    ]);

    const playGame = (userChoice) => {
      const choices = ["rock", "paper", "scissors", "lizard", "spock"];
      const computerChoice = choices[Math.floor(Math.random() * 5)];

      setTimeout(() => {
        setComputerSelection(computerChoice);

        if (userChoice === computerChoice) {
          setStatus("draw");
        } else if (winConditions.has(`${userChoice}-${computerChoice}`)) {
          setStatus("win");
          setPlayerScore((prev) => prev + 1);
          localStorage.setItem("secondGameUserScore", playerScore + 1);
        } else {
          setStatus("lose");
        }
      }, 1000);
    };

    playGame(playerSelection);
  }, [playerSelection]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-between overflow-x-hidden px-8 py-10 max-md:gap-12">
      <Header logo="logo-bonus" playerScore={playerScore} />

      {playerSelection === "" ? (
        <Step1
          gameOptions={rpsls}
          width={329}
          height={313}
          setPlayerSelection={setPlayerSelection}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="329" height="313">
            <path
              fill="none"
              stroke="#000"
              strokeWidth="15"
              d="M164.5 9.27L9.26 122.06l59.296 182.495h191.888L319.74 122.06 164.5 9.271z"
              opacity=".2"
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
        image="image-rules-bonus"
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </section>
  );
};

export default secondGame;
