// STYLES
import styled from "styled-components";
// HELPERS
import { checkInputType } from "@utils/helpers";
// I18N
import { useIntl } from "react-intl";

/*********************************************************************************** */

const CInput = ({ label, name, data = {}, eventHandler }) => {
  // translations
  const { formatMessage } = useIntl();
  const translated = formatMessage({ id: label || name });

  return (
    <div>
      {label && <StyledLabel>{translated}</StyledLabel>}
      <StyledInput
        type={checkInputType(label || name)}
        name={label || name}
        placeholder={name ? translated : ""}
        value={data[label] || data[name] || ""}
        onChange={eventHandler}
      />
    </div>
  );
};

export default CInput;

/*********************************************************************************** */

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #46b9c3;
  border-radius: 5px;
  font-family: inherit;
  font-size: 15px;
  background-color: #07536b;
  color: white;
  width: 100%;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    border-color: #1f9da9;
    box-shadow: 0 0 5px rgba(31, 157, 169, 0.5);
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 10px;
  }
`;

export const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #d5f8fd;
  margin-bottom: 8px;
  margin-left: 5px;
  display: block;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
