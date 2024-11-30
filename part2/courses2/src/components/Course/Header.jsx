import styled from "styled-components";

const Header = ({ course_name }) => (
  <HeaderContainer>
    <StyHeader>{course_name}</StyHeader>
  </HeaderContainer>
);

export default Header;

/**
 *
 * Styled components
 *
 */

const HeaderContainer = styled.div`
  background-color: #e2f1e7;
  color: #243642;
  width: 100%;
  text-align: center;
  height: 6rem;
  overflow: hidden;
`;

const StyHeader = styled.h2`
  margin: 0;
  padding: 20px;
  font-size: 1.5rem;
  word-wrap: break-word;
  white-space: normal;
`;
