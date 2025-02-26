import { motion } from 'framer-motion';

const WinWrapper = ({children}) => {
  return (
    <div className="relative">
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 4, opacity: 0.8 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          zIndex: -2,
        }}
        className="absolute top-1/2 left-1/2 -z-[3] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4c5b97]"
      />
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 4, opacity: 0.52 }}
        transition={{
          duration: 0.52,
          ease: "easeOut",
          zIndex: -2,
        }}
        className="absolute top-1/2 left-1/2 z-[-4] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2f3e75]"
      />

      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 4, opacity: 0.8 }}
        transition={{
          duration: 0.53,
          ease: "easeOut",
          zIndex: -2,
        }}
        className="absolute top-1/2 left-1/2 z-[-5] h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1a264d]"
      />
      {children}
    </div>
  );
};

export default WinWrapper;
