import React from "react";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-5 rounded-[20px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl mb-4">AI 라인업 추천</h2>

        <Image
          src="/images/Field.svg"
          alt="야구장"
          width={500} // 적절한 크기로 변경
          height={300} // 적절한 크기로 변경
          className="w-full h-auto" // 이미지 크기 자동 조정
        />
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded"
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default Modal;
