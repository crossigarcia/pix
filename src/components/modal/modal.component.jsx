import React from "react";
import "./modal.styles.scss";

const Modal = ({ showModal, toggleModal, imgSrc, altText }) => {
   return (
      <>
         {showModal ? (
            <div className="modal">
               <button type="button" name="close-modal-btn" className="close-btn" onClick={toggleModal}>CLOSE</button>
               <div className="modal-img-container">
                  <img src={imgSrc} alt={altText} className="modal-img" width={"750px"}></img>
               </div>
            </div>
         ) : null}
      </>
   )
};

export default Modal;