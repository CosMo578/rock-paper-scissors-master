import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import WinWrapper from "./WinWrapper";

const Step2 = ({ playerSelection, computerSelection, status, playAgain }) => {
  return (
    <section className="flex w-full items-start justify-center gap-20 max-lg:scale-[0.7] lg:mt-16">
      <div className="flex flex-col items-center justify-center gap-8 max-lg:flex-col-reverse">
        <h2 className="text-xl font-semibold lg:text-2xl">YOU PICKED</h2>

        {status === "win" ? (
          <WinWrapper>
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              className={`${playerSelection} w-max cursor-pointer rounded-full p-5`}
            >
              <div className="optionContainer rounded-full bg-white p-10">
                <img
                  className="size-24 object-contain"
                  src={`/icon-${playerSelection}.svg`}
                  alt={playerSelection}
                />
              </div>
            </motion.button>
          </WinWrapper>
        ) : (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className={`${playerSelection} w-max cursor-pointer rounded-full p-5`}
          >
            <div className="optionContainer rounded-full bg-white p-10">
              <img
                className="size-24 object-contain"
                src={`/icon-${playerSelection}.svg`}
                alt={playerSelection}
              />
            </div>
          </motion.button>
        )}
      </div>

      {status && (
        <div className="flex flex-col items-center justify-center gap-4 self-center max-lg:hidden">
          <AnimatePresence>
            <motion.h2
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              className="text-5xl font-black uppercase"
            >
              {status !== "draw" ? `you ${status}` : status}
            </motion.h2>
          </AnimatePresence>
          <button
            className="text-blood w-full cursor-pointer rounded-xl bg-white px-12 py-3 font-semibold"
            onClick={() => playAgain()}
          >
            PLAY AGAIN
          </button>
        </div>
      )}

      <div className="flex flex-col items-center justify-center gap-8 max-lg:flex-col-reverse">
        <h2 className="text-xl font-semibold lg:text-2xl">THE HOUSE PICKED</h2>

        {computerSelection ? (
          <>
            {status === "lose" ? (
              <WinWrapper>
                <motion.button
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                  className={`${computerSelection} relative z-10 w-max cursor-pointer rounded-full p-5`}
                >
                  <div className="optionContainer rounded-full bg-white p-10">
                    <img
                      className="size-24 object-contain"
                      src={`/icon-${computerSelection}.svg`}
                      alt={computerSelection}
                    />
                  </div>
                </motion.button>
              </WinWrapper>
            ) : (
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                className={`${computerSelection} relative z-10 w-max cursor-pointer rounded-full p-5`}
              >
                <div className="optionContainer rounded-full bg-white p-10">
                  <img
                    className="size-24 object-contain"
                    src={`/icon-${computerSelection}.svg`}
                    alt={computerSelection}
                  />
                </div>
              </motion.button>
            )}
          </>
        ) : (
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 0, opacity: 0 }}
            transition={{
              delay: 0.9,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className="bg-emptyBg rounded-full p-20"
          ></motion.div>
        )}
      </div>
    </section>
  );
};

export default Step2;
