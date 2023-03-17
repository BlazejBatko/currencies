import React from "react";
import CustomButton from "../Button/CustomButton";
import "./CustomModal.css";
type Props = {
  isActive: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  title: string;
  acceptText?: string;
  rejectText?: string;
  onReject?: () => void;
  onAccept: () => void;
};

const CustomModal = ({
  isActive,
  children,
  handleClose,
  title,
  acceptText = "Continue",
  rejectText = "Cancel",
  onReject = () => {
    handleClose();
  },
  onAccept = () => {},
}: Props) => {
  const showHideClassName = isActive
    ? "modal display-block"
    : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal--background" >
        <div className="modal__content">
          <span className="modal__title">{title}</span>
          <div className="modal__body">{children}</div>
          <div className="modal__buttons-container">
            <CustomButton
              customClassName="modal__button--accept"
              callback={onAccept}
              content={"Continue"}
            />
            <CustomButton
              customClassName="modal__button--reject"
              callback={onReject}
              content={"Cancel"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomModal;
