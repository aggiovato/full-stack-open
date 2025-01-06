import { useState, useEffect } from "react";

import { StyledDecoration } from "../styles/LoginForm.styles";

import helper from "../utils/helpers";

const LinesAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationText, setAnimationText] = useState(
    helper.getRandomAnimationText()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setAnimationText(helper.getRandomAnimationText());
      setTimeout(() => setIsAnimating(false), 5000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <StyledDecoration>
      <div className={`bar-container ${isAnimating ? "animated" : ""}`}>
        <div className="line"></div>
        <span className="text">{animationText.line1}</span>
      </div>
      <div className={`bar-container ${isAnimating ? "animated" : ""}`}>
        <div className="line"></div>
        <span className="text">{animationText.line2}</span>
      </div>
      <div className={`bar-container ${isAnimating ? "animated" : ""}`}>
        <div className="line"></div>
        <span className="text">{animationText.line3}</span>
      </div>
    </StyledDecoration>
  );
};

export default LinesAnimation;
