// STYLES
import { StyledInput, StyledLabel } from "@styles/Customs.styles";

// HELPERS
import { capitalizeFirstLetter, checkInputType } from "@utils/helpers";

const CInput = ({ label, name, data = {}, eventHandler }) => {
  return (
    <div>
      {label && <StyledLabel>{capitalizeFirstLetter(label)}</StyledLabel>}
      <StyledInput
        type={checkInputType(label || name)}
        name={label || name}
        placeholder={name ? capitalizeFirstLetter(name) : ""}
        value={data[label] || data[name] || ""}
        onChange={eventHandler}
      />
    </div>
  );
};

export default CInput;
