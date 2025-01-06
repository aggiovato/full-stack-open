import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Ocupa todo el ancho */
  padding: 20px;
  background-color: #033a4e; /* Fondo oscuro */
  color: #e1e5f2; /* Texto claro */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  position: fixed; /* Fijar en la parte superior */
  top: 0;
  z-index: 10;

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
  gap: 15px; /* Espacio entre el texto y el botón */
`;

const UserName = styled.h3`
  font-size: 18px;
  margin: 0;
  font-weight: normal;
  color: #d5f8fd; /* Texto destacado */
`;

const LogoutButton = styled.button`
  padding: 8px 15px;
  background-color: #d9534f; /* Rojo para el botón */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c9302c; /* Hover más oscuro */
  }

  &:active {
    background-color: #a51e1b; /* Estado activo */
  }

  @media (max-width: 480px) {
    font-size: 12px; /* Texto más pequeño en móviles */
    padding: 6px 12px;
  }
`;

export { Header, Title, UserInfo, UserName, LogoutButton };
