import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import './Modal.css';

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  if (!props.isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={props.toggle}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <p> 
          {props.children}
        </p>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement 
  );
}
