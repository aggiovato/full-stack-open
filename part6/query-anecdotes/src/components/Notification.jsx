import { useNotification } from "../contexts/NotificationContext";

const Notification = () => {
  const { notification } = useNotification();

  if (!notification) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 min-w-xs bg-gray-500 text-white text-center py-2 px-4 rounded-md shadow-md z-50">
      {notification}
    </div>
  );
};

export default Notification;
