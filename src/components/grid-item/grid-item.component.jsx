import React, { useState } from "react";
import "./grid-item.styles.scss";
import PictureModal from "../modal/modal.component";
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
         <div className="btn-container">
               {/* <Button color="secondary" className="fave-btn"><FavoriteIcon/></Button> */}
               {/* <Button variant="outlined" color="secondary">Expand</Button> */}
         </div>
         
         <PictureModal showModal={showModal} toggleModal={toggleModal} imgSrc={largeImg} altText={altText} link={link}/>
      </div>
   )
};

export default GridItem;