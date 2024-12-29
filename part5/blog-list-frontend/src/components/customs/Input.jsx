import helper from "../../utils/helpers";

const Input = ({ label, data, eventHandler, styles }) => {
  return (
    <div>
      {helper.capitalizeFirstLetter(label)}:
      <input
        type={helper.checkInputType(label)}
        name={label}
        style={styles}
        value={data[label]}
        onChange={eventHandler}
      ></input>
    </div>
  );
};

export default Input;
