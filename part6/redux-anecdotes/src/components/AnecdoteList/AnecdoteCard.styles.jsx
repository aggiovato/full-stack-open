import styled from "styled-components";
/******************************************************************************/
// STYLES
export const CardContainer = styled.div.attrs(() => ({
  className: `min-w-xs flex gap-2 md:gap-4`,
}))``;

export const MainContent = styled.div.attrs(() => ({
  className: `flex-1 px-4 py-6 md:p-6 bg-white text-slate-800 border border-slate-300 rounded-xl shadow-lg shadow-slate-200 hover:shadow-xl transition-shadow`,
}))``;

export const VotingSection = styled.div.attrs(() => ({
  className: `w-[100px] flex flex-col items-center gap-2 relative top-1 select-none`,
}))``;
