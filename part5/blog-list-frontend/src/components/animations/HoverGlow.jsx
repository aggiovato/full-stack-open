import { motion } from "framer-motion";

const variants = (scale, firstColor, secondColor, blur, rotate) => ({
  initial: {
    scale: 1,
    textShadow: `0px 0px 0px ${firstColor}`,
    color: firstColor,
    rotate: 0,
  },
  hover: {
    scale: scale,
    textShadow: `0px 0px ${blur}px ${secondColor}`,
    color: secondColor,
    rotate: rotate,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
});

export const HoverGlow = ({
  children,
  scale = 1.05,
  firstColor = "#1f7a8d",
  secondColor = "#8fbcc6",
  blur = 2,
  rotate = 2,
  fontSize = "18px",
}) => {
  return (
    <motion.p
      variants={variants(scale, firstColor, secondColor, blur, rotate)}
      initial="initial"
      whileHover="hover"
      style={{
        fontSize: fontSize,
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      {children}
    </motion.p>
  );
};
