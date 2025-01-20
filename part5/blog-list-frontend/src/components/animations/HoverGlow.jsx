import { motion } from "framer-motion";

const variants = (scale, firstColor, secondColor, blur) => ({
  initial: {
    scale: 1,
    textShadow: `0px 0px 0px ${firstColor}`,
  },
  hover: {
    scale: scale,
    textShadow: `0px 0px ${blur}px ${secondColor}`,
    transition: {
      duration: 0.5,
    },
  },
});

export const HoverGlow = ({
  children,
  scale = 1.05,
  firstColor = "#ffffff00",
  secondColor = "#1f7a8c",
  blur = 5,
}) => {
  return (
    <motion.p
      variants={variants(scale, firstColor, secondColor, blur)}
      initial="initial"
      whileHover="hover"
    >
      {children}
    </motion.p>
  );
};
