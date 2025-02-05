import React, { useEffect, useState } from "react";
import "./positionModal.css";
import { fetchAllPositions } from "../../store/reducers/positionsReducer";
import { useDispatch, useSelector } from "react-redux";

const PositionsModal = ({ isOpen, onClose, position }) => {
  const dispatch = useDispatch();
  const { positions } = useSelector((state) => state.positions);
  useEffect(()=>{
    dispatch(fetchAllPositions())
  },[])
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
          {positions.filter((pos)=> pos.name.toLowerCase()==position.toLowerCase()).map((pos) => (
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
