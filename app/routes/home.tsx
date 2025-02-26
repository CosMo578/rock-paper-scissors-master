import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rock Paper Scissors Game" },
    { name: "description", content: "Welcome to Rock Paper Scissors Game!" },
  ];
}

export default function Home() {
  return (
    <main className="flex h-screen max-lg:max-h-screen flex-col items-center justify-center gap-24 overflow-hidden relative px-8">
      <div className="homeBg absolute top-0 right-0 bottom-0 left-0 z-[-2] max-h-screen">
        {[
          { title: "paper", style: { top: "10%", right: "-80%" } },
          {
            title: "rock",
            style: { left: "40%", top: "40%", translate: "-50%" },
          },
          { title: "scissors", style: { left: "-22%", top: "10%" } },
          { title: "lizard", style: { top: "65%", left: "-35%" } },
          { title: "spock", style: { top: "65%", left: "28%" } },
        ].map(({ title, style }) => (
          <button
            key={title}
            style={style}
            className={`${title} relative w-max cursor-pointer rounded-full p-5`}
          >
            <div className="optionContainer rounded-full bg-white p-10">
              <img
                className="max-size-20 object-contain lg:size-16"
                src={`/icon-${title}.svg`}
                alt={title}
              />
            </div>
          </button>
        ))}
      </div>

      <h1 className="text-center text-3xl font-semibold uppercase lg:text-6xl">
        Welcome
      </h1>

      <div className="flex flex-col items-start gap-3 font-semibold text-2xl lg:text-3xl">
        <button
          className="hover:text-paper cursor-pointer"
          onClick={() => {
            localStorage.clear();
          }}
        >
          Reset Scores
        </button>
        <Link
          className="hover:text-lizard cursor-pointer"
          to="rps"
        >
          Play Rock Paper Scissors
        </Link>
        <Link
          className="hover:text-scissors cursor-pointer"
          to="rpsls"
        >
          Play Rock Paper Scissors Lizzard Spock
        </Link>
      </div>
    </main>
  );
}
