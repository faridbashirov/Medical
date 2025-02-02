import React, { useEffect, useState } from "react";
import useLanguageFetch from '../../Hooks/useLanguageFetch';
import "./positionModal.css";

const PositionsModal = ({ isOpen, onClose, position }) => {
  const { data, loading, error } = useLanguageFetch('account/all_positions',localStorage.getItem("lang"));
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <ul>
          {data.filter((pos)=> pos.name.toLowerCase()==position.toLowerCase()).map((pos) => (
            <li key={pos.id} className="position-item">
              <strong>{pos.name}</strong>
              {pos.description && <p>{pos.description}</p>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PositionsModal;
