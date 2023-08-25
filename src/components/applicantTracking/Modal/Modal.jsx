import React from "react";

import './Modal.css'

const Modal = ({ onConfirm, onCancel, message }) => {

    const nameStartIndex = message.indexOf("delete") + 7;
    
    const name = message.substring(nameStartIndex);

  return (
    <div className="modal-deletion">

      <h2>
       {message.startsWith("Are you sure") && (
          <>
            {message.substring(0, nameStartIndex)}
            <span className="highlighted-text">{name}</span>
          </>
        )}
      </h2>

      <section className="modal-buttons">
        <button onClick={onConfirm} className="modal-btn">
          Confirm
        </button>
        <button onClick={onCancel} className="modal-btn">
          Cancel
        </button>
      </section>
    </div>
  );
};

export default Modal;
