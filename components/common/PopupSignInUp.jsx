"use client"
import React from 'react';
import LoginSignup from "./user-credentials/LoginSignup";
import { closeModal } from "@/features/modal/modalSlice"; // Import the closeModal action correctly
import { useDispatch, useSelector } from "react-redux";

const PopupSignInUp = () => {
  const dispatch = useDispatch();
  // Corrected useSelector to fetch isModalOpen from the modal state slice
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  // Function to close the modal by dispatching the closeModal action
  const handleModalClose = () => {
    dispatch(closeModal());
  };

  // Handling the visibility of the modal directly in the component's render logic
  if (!isModalOpen) return null;

  return (
    <div
      className="sign_up_modal modal show fade bd-example-modal-lg"
      style={{
        display: 'block', // Ensure the modal is displayed when it is open
        backgroundColor: 'rgba(0, 0, 0, 0.4)' // Modal backdrop
      }}
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
      onClick={handleModalClose} // Close modal when clicking on backdrop
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
        onClick={e => e.stopPropagation()} // Prevent clicks within the modal from closing it
      >
        <div className="modal-content">
          <button onClick={handleModalClose} style={{ position: 'absolute', right: '10px', top: '10px' }}>
            × Close
          </button>
          <LoginSignup />
        </div>
      </div>
    </div>
  );
};

export default PopupSignInUp;
