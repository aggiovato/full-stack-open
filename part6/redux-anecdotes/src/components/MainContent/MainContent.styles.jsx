import styled from "styled-components";
/******************************************************************************/
// STYLES
export const MainContainer = styled.main.attrs(() => ({
  className: `max-w-7xl mx-auto flex flex-col justify-center items-center lg:items-start lg:grid lg:grid-cols-3 gap-6 p-2`,
}))``;

export const FormSection = styled.section.attrs(() => ({
  className: `max-w-xl min-w-2.5 mx-6 md:mx-6 lg:mx-4 order-1 lg:order-2 lg:col-span-1 bg-white p-6`,
}))``;

export const ListSection = styled.section.attrs(() => ({
  className: `mx-6 md:mx-6 order-2 lg:order-1 lg:col-span-2`,
}))``;
