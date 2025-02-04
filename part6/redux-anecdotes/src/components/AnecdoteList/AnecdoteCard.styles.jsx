import styled from "styled-components";
/******************************************************************************/
// STYLES
export const CardContainer = styled.div.attrs(() => ({
  className: `min-w-xs max-w-[330px] md:min-w-2xl md:max-w-3xl flex gap-2 md:gap-4 mb-4`,
}))``;

export const MainContent = styled.div.attrs(() => ({
  className: `relative group flex-1 px-4 py-6 md:p-6 bg-white text-slate-800 border border-slate-300 rounded-xl shadow-lg shadow-slate-200 hover:shadow-xl transition-shadow text-clip break-words hyphens-auto overflow-hidden`,
}))``;

export const VotingSection = styled.div.attrs(() => ({
  className: `w-[100px] flex flex-col items-center gap-2 relative top-1 select-none`,
}))``;
