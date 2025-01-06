import { createContext, useState } from "react";

import {
  ToastContainer,
  ToastMessage,
  CloseButton,
} from "../styles/ToastProvider.styles";

// Context for global toast messages
const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "success") => {
    // Avoid duplicates
    const isDuplicate = toasts.some(
      (toast) => toast.message === message && toast.type === type
    );
    if (isDuplicate) return;

    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), type === "success" ? 2000 : 5000); // Remove toast after 3 or 5 seconds
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer>
        {toasts.map((toast) => (
          <ToastMessage key={toast.id} type={toast.type}>
            <span>{toast.message}</span>
            <CloseButton onClick={() => removeToast(toast.id)}>×</CloseButton>
          </ToastMessage>
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
};

export default ToastContext;
