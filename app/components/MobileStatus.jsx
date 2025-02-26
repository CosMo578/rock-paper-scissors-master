import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const MobileStatus = ({ status, playAgain }) => {
  return (
    <>
      {status && (
        <div className="flex flex-col items-center justify-center gap-4 self-center lg:hidden">
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
            className="lg:text-blood text-paper w-full cursor-pointer rounded-xl bg-white px-12 py-3 font-semibold"
            onClick={() => playAgain()}
          >
            PLAY AGAIN
          </button>
        </div>
      )}
    </>
  );
};

export default MobileStatus;
