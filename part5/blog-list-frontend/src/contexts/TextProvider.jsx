// CUSTOM COMPONENTS
import { CTooltip } from "@customs";

/*********************************************************************************** */

const TextProvider = ({ text, charLimitLarge = 50, charLimitSmall = 30 }) => {
  const isSmallScreen = window.innerWidth <= 768;
  const charLimit = isSmallScreen ? charLimitSmall : charLimitLarge;

  const shouldTruncate = text.length > charLimit;
  const displayText = shouldTruncate
    ? `${text.substring(0, charLimit)}...`
    : text;

  return shouldTruncate ? (
    <CTooltip tooltipText={shouldTruncate ? text : null}>
      <span className="text-provider">{displayText}</span>
    </CTooltip>
  ) : (
    <span className="text-provider">{displayText}</span>
  );
};

export default TextProvider;
