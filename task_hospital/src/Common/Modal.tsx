// Modal.tsx
import React from "react";
import styled from "@emotion/styled";

const ModalOverlay = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalBody = styled.div`
  margin-top: 20px;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  height: 40px;
  color: #16a085;
  border-color: #16a085;
  font-size: 20px;
  margin-left: 10px;
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode; // Add this line
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h2>New Patient</h2>
          <button onClick={onClose} style={{ fontSize: "20px" }}>
            &times;
          </button>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
