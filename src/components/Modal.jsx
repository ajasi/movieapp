import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const Modal = ({ open, children, onClose }) => {
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        onClose(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 bg-blue/90 z-10 backdrop-filter backdrop-blur-sm"></div>

      <div
        ref={menuRef}
        className="overflow-hidden fixed top-1/2 left-1/2 bg-purple/10 rounded-lg p-1 z-10 translate-x-[-50%] translate-y-[-50%]"
      >
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
