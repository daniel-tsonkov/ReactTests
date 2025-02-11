import { toast } from 'react-toastify';

export const showToast = (type, msg = 'There are have any broblem') => {
  switch (type) {
    case 'SUCCESS':
      toast.success(msg, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      break;
    case 'ERROR':
      toast.error(msg, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      break;
    default:
      toast.error(msg, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return false;
  }
};
