import { createContext, useReducer, useContext } from "react";

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "SHOW":
      return action.payload;
    case "HIDE":
      return "";
    default:
      return state;
  }
};

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notification, dispatchNotification] = useReducer(
    notificationReducer,
    ""
  );

  return (
    <NotificationContext.Provider
      value={{
        notification,
        dispatchNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  return useContext(NotificationContext);
};
