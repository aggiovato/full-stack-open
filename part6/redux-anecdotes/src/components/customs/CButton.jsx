import styled from "styled-components";

/******************************************************************************/

const CButton = ({ children, deepness = 1, isSmall = false, onClick }) => {
  return (
    <StyButton $deepness={deepness} $isSmall={isSmall} onClick={onClick}>
      {children}
    </StyButton>
  );
};

export default CButton;

/******************************************************************************/
// STYLES
const StyButton = styled.button.attrs((props) => ({
  className: `
    bg-slate-600 text-gray-100 rounded-md select-none transition-all duration-200
        ${props.$isSmall ? "w-[70px] py-1 px-1 text-sm" : "py-2 px-4 w-full"}
        ${props.$deepness === 1 ? "" : ""}
        ${props.$deepness === 2 ? "hover:bg-slate-700" : ""}
        ${props.$deepness === 3 ? "hover:bg-slate-700 active:bg-slate-800" : ""}
  `,
}))``;
