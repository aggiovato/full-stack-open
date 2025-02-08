import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => state.notification);

  if (!notification) return null;

  return (
    <div className="fixed min-w-[320px] top-5 md:top-3.5 left-1/2 transform -translate-x-1/2 py-4 px-6 bg-white text-slate-700 text-center z-50 border-slate-700 border-2 rounded-xl shadow-lg inset-shadow-slate-400 inset-shadow-sm md:shadow-xl shadow-slate-300 text-sm md:text-base">
      {notification.length > 50
        ? notification.substring(0, 50) + " ..."
        : notification}
    </div>
  );
};

export default Notification;
