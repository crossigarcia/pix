import React, { useState } from "react";
import "./grid-item.styles.scss";
import PictureModal from "../modal/modal.component";

const GridItem = ({ preview, largeImg, altText, link }) => {
   const [showModal, setShowModal] = useState(false);

   const toggleModal = () => {
      setShowModal(prevState => !prevState);
   }

   return (
      <div className="grid-item">
         <div className="img-container" onClick={toggleModal}>
            <img src={preview} alt={altText} className="img"></img>
         </div>
         
         <PictureModal showModal={showModal} toggleModal={toggleModal} imgSrc={largeImg} altText={altText} link={link}/>
      </div>
   )
};

export default GridItem;