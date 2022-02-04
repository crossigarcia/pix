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
  height: '70vh',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '5px',
  boxShadow: 24,
  p: 5,
  display: 'flex',
  justifyContent: 'flex-start'
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
          <div className="large-image-container">
             <img className="modal-img" src={props.imgSrc} alt={props.altText}></img>
          </div>
        </Box>
      </Modal>
   )
}

export default PictureModal;
