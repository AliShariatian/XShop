import { FC } from "react";
import { ToastContainer as Toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastContainer: FC = (): JSX.Element => {
   return <Toast position="bottom-right" limit={3} />;
};

export default ToastContainer;
