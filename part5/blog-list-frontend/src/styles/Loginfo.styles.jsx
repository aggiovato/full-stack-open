import styled, { keyframes } from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px;
  background-color: #033a4e;
  color: #e1e5f2;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  z-index: 100;
  user-select: none;

  @media (max-width: 550px) {
    padding: 20px 15px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  margin: 0;

  svg {
    width: 50px;
    height: 50px;
    margin-right: 15px;

    @media (max-width: 480px) {
      width: 45px;
      height: 45px;
      margin-right: 10px;
      margin-left: 0px;
    }
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 480px) {
    gap: 10px;
  }
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
      animation: ${moveArrow} 0.9s ease-in-out infinite;
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
