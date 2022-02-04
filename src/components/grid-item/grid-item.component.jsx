import React, { useState } from "react";
import "./grid-item.styles.scss";
import Modal from "../modal/modal.component";

const GridItem = ({ preview, largeImg, altText }) => {
   const [showModal, setShowModal] = useState(false);

   const toggleModal = () => {
      setShowModal(prevState => !prevState);
   }

   return (
      <div className="grid-item">
         <div className="img-container" onClick={toggleModal}>
            <img src={preview} alt={altText} className="img"></img>
         </div>
         <Modal showModal={showModal} toggleModal={toggleModal} imgSrc={largeImg} altText={altText}/>
      </div>
   )
};

export default GridItem;