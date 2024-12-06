import { forwardRef, useEffect } from "react";
import {
  StyMessage,
  StyDiv,
  StyCloseIcon,
} from "@styles/MessageDialog.styles.jsx";

const MessageDialog = forwardRef(
  ({ message, handleMessage, duration = 3000 }, ref) => {
    useEffect(() => {
      ref.current?.showModal();
      const timer = setTimeout(() => {
        ref.current?.close();
        handleMessage("");
      }, duration);

      return () => clearTimeout(timer);
    }, [message, ref, duration]);

    const handleClose = () => {
      ref.current?.close();
      handleMessage("");
    };

    return (
      message && (
        <StyMessage ref={ref}>
          <StyDiv>
            {message}
            <StyCloseIcon onClick={handleClose}>
              <CloseIcon />
            </StyCloseIcon>
          </StyDiv>
        </StyMessage>
      )
    );
  }
);

// Helps to identify the component as
// it is created from a function like forwardRef
MessageDialog.displayName = "MessageDialog";
export default MessageDialog;

const CloseIcon = (props) => {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m7.757 16.243l8.486-8.486m0 8.486L7.757 7.757"
      ></path>
    </svg>
  );
};
