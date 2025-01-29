// EXTERNAL MODULES
import { useState } from "react";
// STYLES
import styled from "styled-components";
// PROP TYPES
import PropTypes from "prop-types";

/*********************************************************************************** */

const CTooltip = ({ children, tooltipText = "!!!", tt_position = "top" }) => {
  const [isVisible, setIsVisible] = useState(false); // state for tooltip visibility

  // functions to show and hide the tooltip
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

/*********************************************************************************** */

// PropTypes

CTooltip.propTypes = {
  children: PropTypes.node.isRequired,
  tooltipText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  tt_position: PropTypes.string,
};

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Tooltip = styled.div`
  position: absolute;
  ${({ $tt_position }) =>
    $tt_position === "top"
      ? `
    bottom: 115%;
  `
      : `
    top: 115%;
  `}
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
  z-index: 200;
  max-width: 250px;
  word-wrap: break-word;
  white-space: normal;
  overflow-wrap: break-word;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  ${TooltipContainer}:hover & {
    opacity: 1;
    visibility: visible;
  }

  &::after {
    content: "";
    position: absolute;
    ${({ $tt_position }) =>
      $tt_position === "top"
        ? `
      top: 100%;
      border-color: rgba(0, 0, 0, 0.6) transparent transparent transparent;
    `
        : `
      bottom: 100%;
      border-color: transparent transparent rgba(0, 0, 0, 0.6) transparent;
    `}
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
  }
`;
