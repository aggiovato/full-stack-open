// CUSTOM COMPONENTS
import { CInput } from "@customs";
// PROP TYPES
import PropTypes from "prop-types";

/*********************************************************************************** */

const CInputsMapper = ({ mapper, eventHandlers, type }) => {
  const handlers =
    typeof eventHandlers === "function"
      ? Object.keys(mapper).map(() => eventHandlers)
      : eventHandlers;

  if (!Array.isArray(handlers)) {
    console.error(
      "CInputsMapper: 'eventHandlers' must be an array or a function"
    );
    return null;
  }

  return Object.keys(mapper).map((key, index) => (
    <CInput
      key={key}
      data={mapper}
      {...(type === "label" ? { label: key } : { name: key })}
      eventHandler={handlers[index]}
    />
  ));
};

export default CInputsMapper;

// PropTypes

CInputsMapper.propTypes = {
  mapper: PropTypes.object.isRequired,
  eventHandlers: PropTypes.func.isRequired || PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};
