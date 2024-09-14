import { toast } from "react-toastify";

// Success Notification
export const showSuccessNotification = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 3000,  // Close after 3 seconds
  });
};

// Error Notification
export const showErrorNotification = (message) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 3000,  // Close after 3 seconds
  });
};

  export default Notification;