import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

/**
 *
 * Styled components
 *
 */
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin: 20px auto;
  width: 300px;
`;

export const ListTitle = styled.h2`
  margin-bottom: 20px;
  margin-top: 0;
  font-size: 1.8rem;
  text-align: center;
`;

export const Number = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }
`;

export const NumberText = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
  color: #444;
`;

export const StyFaPlus = styled(FaPlus)`
  margin-left: 10px;
  color: #444;
  transition: transform 0.4s ease-in-out, rotate 0.4s ease-in-out;

  &:hover {
    transform: rotate(15deg) scale(1.2);
  }
`;
