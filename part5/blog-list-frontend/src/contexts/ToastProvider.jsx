// EXTERNAL MODULES
import { createContext, useState } from "react";
// STYLES
import {
  ToastContainer,
  ToastMessage,
  CloseButton,
} from "@styles/ToastProvider.styles";

/*********************************************************************************** */

// Context for global toast messages
const ToastContext = createContext(null);

// Context provider
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  // function to add a toast message
  const addToast = (message, type = "success") => {
    // Avoid duplicates
    const isDuplicate = toasts.some(
      (toast) => toast.message === message && toast.type === type
    );
    if (isDuplicate) return;

    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), type === "success" ? 3000 : 5000); // Remove toast after 3 or 5 seconds
  };

  // function to remove a toast message
  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer>
        {toasts.map((toast) => (
          <ToastMessage
            data-testid="toast-message"
            key={toast.id}
            type={toast.type}
          >
            <CloseButton
              key={`btn-${toast.id}`}
              onClick={() => removeToast(toast.id)}
            >
              ×
            </CloseButton>
            <span>{toast.message}</span>
          </ToastMessage>
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
};

export default ToastContext;
