// helpers
import animationTexts from "../utils/data/animationTexts.json";
import inputTypes from "../utils/data/inputTypes.json";

const checkInputType = (type) => {
  return inputTypes.includes(type) ? type : "text";
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const getRandomAnimationText = () => {
  const randomIndex = Math.floor(Math.random() * animationTexts.length);
  return animationTexts[randomIndex];
};

export default {
  capitalizeFirstLetter,
  checkInputType,
  getRandomAnimationText,
};
