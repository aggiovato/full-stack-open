import styled from "styled-components";

export const ToolBarContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  background-color: #033a4e;
  border-bottom: 1px solid #022b3a;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  with: calc(100% - 60px);
  margin: 0 auto;
  left: 30px;
  right: 30px;
  z-index: 500;

  @media (max-width: 550px) {
    width: calc(100% - 30px);
    left: 15px;
    right: 15px;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 10px;
  border: 1px solid #46b9c3;
  border-radius: 5px;
  background-color: #07536b; /* Fondo del input */
  color: #e1e5f2;
  font-family: inherit;
  font-size: 16px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    border-color: #1f9da9;
    box-shadow: 0 0 5px rgba(31, 157, 169, 0.5);
  }

  @media (max-width: 550px) {
    max-width: 100%;
  }
`;
