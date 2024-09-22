import React from "react";
import { useGlobalContext } from "../context";

const Modal: React.FC = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h3>Modal</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          +
        </button>
      </div>
    </div>
  );
};

export default Modal;
