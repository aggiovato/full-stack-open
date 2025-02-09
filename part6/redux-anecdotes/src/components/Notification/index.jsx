import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => state.notification);

  if (!notification) return null;

  return (
    <div className="fixed min-w-[320px] top-5 md:top-3.5 left-1/2 transform -translate-x-1/2 py-4 px-6 bg-emerald-600 text-slate-50 text-center z-50 rounded-xl text-sm md:text-base shadow-lg shadow-slate-400">
      {notification.length > 50
        ? notification.substring(0, 50) + " ..."
        : notification}
    </div>
  );
};

export default Notification;
