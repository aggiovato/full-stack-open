import { motion } from "framer-motion";

const bounceDownVariants = {
  hidden: {
    y: "-40vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 30,
      duration: 0.4,
    },
  },
};

const BounceDown = ({ children }) => {
  return (
    <motion.div
      variants={bounceDownVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

export default BounceDown;
