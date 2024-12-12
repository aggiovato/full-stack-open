import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

/**
 *
 * Styled components
 *
 */

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 25px 35px;
  margin: 20px auto;
  max-width: 400px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    /* Tablet */
    padding: 20px 25px;
    max-width: 90%;
  }

  @media (max-width: 768px) {
    padding: 15px 20px;
    margin: 20px 15px;
    max-width: 100%;
  }
`;

export const FilterTitle = styled.h2`
  margin-bottom: 10px;
  margin-top: 0;
  color: #5a5a5a;
  font-size: 1.8rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const FilterLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FilterInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
  font-size: 1rem;
  font: inherit;
  outline: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &::placeholder {
    color: #ccc;
    font-size: 0.95rem;
    font-style: italic;
  }

  &:focus {
    border-color: #444;
    box-shadow: 0 0 5px rgba(36, 54, 66, 0.4);
  }

  @media (max-width: 768px) {
    /* Mobile */
    align-self: stretch;
    padding: 10px 10px;
    font-size: 0.9rem;
  }
`;

export const StyIoSearch = styled(IoSearch)`
  margin-left: 0;
  align-self: stretch;
  padding: 8px 10px;
  color: #ccc;
  background-color: #444;
  border-radius: 0 5px 5px 0;
  border: 1px solid #ccc;
  font-size: 1.63rem;
  transform: translateY(10px);
  transform: translateX(-1px);

  @media (max-width: 768px) {
    /* Mobile */
    font-size: 1.465rem;
  }
`;
