import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useAuth0 } from "@auth0/auth0-react";

const NewModal = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <button onClick={onOpenModal}>Add Favourite</button>
      <Modal open={open} onClose={onCloseModal} center>
        <h3>Please Log in to save to Your Favourites:)</h3>
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </Modal>
    </div>
  );
};

export default NewModal