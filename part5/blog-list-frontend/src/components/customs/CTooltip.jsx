import { useState } from "react";

import { TooltipContainer, Tooltip } from "@styles/Customs.styles";

const CTooltip = ({ children, tooltipText = "!!!" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleShowTooltip = () => setIsVisible(true);
  const handleHideTooltip = () => setIsVisible(false);
  return (
    <TooltipContainer
      onMouseEnter={handleShowTooltip}
      onMouseLeave={handleHideTooltip}
    >
      {isVisible && <Tooltip>{tooltipText}</Tooltip>}
      <div>{children}</div>
    </TooltipContainer>
  );
};

export default CTooltip;
