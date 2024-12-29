import { useEffect } from "react";

const Message = ({ message, handleMessage }) => {
  useEffect(() => {
    if (!message.display) return;

    const timer = setTimeout(() => {
      handleMessage({ display: false, text: "", type: "error" });
    }, 3000);
    return () => clearTimeout(timer);
  }, [message.display, handleMessage]);

  const styles = {
    fontWeight: "bold",
    fontSize: "15px",
    padding: "10px",
    borderRadius: "5px",
    marginTop: "10px",
    marginBottom: "10px",
    ...(message.type === "error"
      ? { color: "red", backgroundColor: "#ffdbdb", border: "3px solid red" }
      : {
          color: "green",
          backgroundColor: "#e6ffe6",
          border: "3px solid green",
        }),
  };

  return message.display ? <div style={styles}>{message.text}</div> : null;
};

export default Message;
