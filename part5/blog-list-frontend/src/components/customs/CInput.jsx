// STYLES
import { StyledInput, StyledLabel } from "@styles/Customs.styles";

// HELPERS
import { checkInputType } from "@utils/helpers";

// I18N
import { useIntl } from "react-intl";

const CInput = ({ label, name, data = {}, eventHandler }) => {
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
