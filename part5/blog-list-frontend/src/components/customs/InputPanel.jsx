import Input from "./Input";

const InputPanel = ({ data, eventHandler, styles }) => {
  return (
    <>
      {Object.keys(data).map((label) => (
        <Input
          key={label}
          label={label}
          data={data}
          eventHandler={eventHandler}
          styles={styles}
        />
      ))}
    </>
  );
};

export default InputPanel;
