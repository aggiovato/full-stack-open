import styled from "styled-components";

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  margin-top: 80px;

  @media (max-width: 550px) {
    margin-top: 130px;
  }
`;

export const BlogCard = styled.div`
  background-color: #033a4e;
  border: 2px solid #033a4e;
  border-radius: 12px;
  padding: 20px;
  min-width: 700px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border: 2px solid #1f7a8c;
    box-shadow: 0 0 5px rgba(31, 122, 140, 0.73);
  }

  @media (max-width: 755px) {
    min-width: 100%;
  }
`;

export const BlogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;

  .info {
    display: flex;
    flex-direction: column;
  }

  .title {
    font-weight: bold;
    font-size: 19px;
    color: #d5f8fd;
  }

  .author {
    font-style: italic;
    font-size: 14px;
    color: #46b9c3;
    text-align: left;
    margin-top: 10px;
    margin-left: 10px;
  }

  button {
    width: 40px;
    height: 40px;
  }

  .show-hide {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
  }
`;

export const BlogDetails = styled.div`
  margin-top: 15px;
  user-select: none;

  .url {
    color: #83d9e2;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
      color: #d5f8fd;
    }
  }

  .likes {
    display: flex;
    align-items: center;
    gap: 5px;

    span {
      margin-top: 10px;
      color: #83d9e2;
    }
  }

  button {
    margin-top: 10px;
  }
`;

export const StyButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  &:hover {
    transform: scale(1.1);
  }
`;
