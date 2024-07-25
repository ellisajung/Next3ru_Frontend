import { type ModalProps } from "@/components/elisa/ReviewEditModal";
import { FC, useEffect } from "react";

const SeatInfoModal: FC<ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>
      <div id="seat-info-modal">
        <div></div>
      </div>
    </>
  );
};

export default SeatInfoModal;
