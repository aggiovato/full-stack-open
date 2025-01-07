import styled, { keyframes } from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #033a4e;
  color: #e1e5f2;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  z-index: 10;
  user-select: none;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const UserName = styled.div`
  font-size: 18px;
  margin: 0;
  padding: 0;
  font-weight: bold;
  color: #46b9c3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  div {
    display: flex;
    gap: 1px;
  }

  span {
    color: #d5f8fd;
    font-weight: normal;
    font-size: 14px;
    font-style: italic;
  }
`;

const moveArrow = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(4px);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0);
  }
`;

const LogoutButton = styled.button`
  background: #d9534f;
  border: none;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.5s ease;

  &:hover {
    svg .arrow {
      animation: ${moveArrow} 0.7s ease-in-out infinite;
    }
  }

  svg {
    width: 24px;
    height: 24px;
    color: white;
    display: block;
    margin-left: 6px;
    margin-top: 4px;
  }
`;

export { Header, Title, UserInfo, UserName, LogoutButton };
