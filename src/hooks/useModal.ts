import React, { useState } from "react";

const useModal = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return {
    isActive: show,
    handleShow,
    handleClose,
  };
};

export default useModal;
