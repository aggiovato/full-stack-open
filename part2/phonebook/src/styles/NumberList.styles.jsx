import styled from "styled-components";
import { FaPhone } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

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
  width: 450px;

  @media (max-width: 768px) {
    width: 350px;
  }
`;

export const ListTitle = styled.h2`
  margin-bottom: 20px;
  margin-top: 0;
  font-size: 1.6rem;
  text-align: center;
  color: #5a5a5a;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const Number = styled.button`
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

  &:active {
    transform: translateY(1px);
    background-color: #d6d6d6;
    border: 1px solid #ccc;
  }
`;

export const NumberText = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #444;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const StyFaPhone = styled(FaPhone)`
  margin-left: 3px;
  color: #444;
  padding: 2px;
  transition: transform 0.4s ease-in-out, rotate 0.4s ease-in-out;
  transform: translateY(2px);
  transform: translateX(-2px);

  &:hover {
    transform: rotate(10deg) scale(1.15);
  }
`;

export const StyIoPerson = styled(IoPerson)`
  margin-right: 5px;
  color: #444;
  transition: transform 0.4s ease-in-out, rotate 0.4s ease-in-out;
  transform: translateY(2px);

  &:hover {
    transform: rotate(-15deg) scale(1.2);
  }
`;
