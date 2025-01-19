// EXTERNAL MODULES
import { useState, useEffect } from "react";

// STYLES
import { StyledDecoration } from "@styles/LoginForm.styles";

// HELPERS
import { getRandomAnimationText } from "@utils/helpers";

const LinesAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationText, setAnimationText] = useState(getRandomAnimationText());

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      const newText = getRandomAnimationText();
      newText === animationText
        ? setAnimationText(getRandomAnimationText())
        : setAnimationText(newText);
      setTimeout(() => setIsAnimating(false), 5000);
    }, 10000);

    return () => clearInterval(interval);
  }, [animationText]);

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
