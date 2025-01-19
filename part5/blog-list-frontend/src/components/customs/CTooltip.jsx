// EXTERNAL MODULES
import { useState } from "react";

// STYLES
import { TooltipContainer, Tooltip } from "@styles/Customs.styles";

const CTooltip = ({ children, tooltipText = "!!!", tt_position = "top" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleShowTooltip = () => setIsVisible(true);
  const handleHideTooltip = () => setIsVisible(false);
  return (
    <TooltipContainer
      onMouseEnter={handleShowTooltip}
      onMouseLeave={handleHideTooltip}
    >
      {isVisible && <Tooltip $tt_position={tt_position}>{tooltipText}</Tooltip>}
      <div>{children}</div>
    </TooltipContainer>
  );
};

export default CTooltip;
