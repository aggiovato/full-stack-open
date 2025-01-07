import styled from "styled-components";

export const BlogFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: rgba(3, 58, 78, 0.9);
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 20px auto;
  color: #e1e5f2;

  @media (max-width: 480px) {
    padding: 20px;
    max-width: 90%;
  }
`;

export const FormHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #d5f8fd;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    font-size: 20px;
    margin-top: 15px;
    margin-bottom: 25px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 95%;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  button {
    flex: 1;
    margin: 0 5px;
  }

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    margin-bottom: 20px;
    button {
      margin: 8px 10px;
    }
  }
`;
