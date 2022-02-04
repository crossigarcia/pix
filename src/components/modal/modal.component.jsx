import React from "react";
import "./modal.styles.scss";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60vw',
  height: 'auto',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '5px',
  boxShadow: 24,
  p: 5
};

const PictureModal = (props) => {

   return (
      <Modal
        open={props.showModal}
        onClose={props.toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-content">
             <img className="modal-img" src={props.imgSrc} alt={props.altText}></img>
             <div className="modal-details">
               <a href={props.link} className="modal-link" target="_blank" rel="noreferrer">Visit Pixabay to Download Image</a>
             </div>
          </div>
        </Box>
      </Modal>
   )
}

export default PictureModal;
