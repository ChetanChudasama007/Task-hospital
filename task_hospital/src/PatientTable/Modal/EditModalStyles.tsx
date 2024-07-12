import styled from "@emotion/styled";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
`;

export const FormGroup = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  font-size: 16px;
`;

export const SubmitButton = styled.button`
  height: 50px;
  color: #ffffff;
  background-color: #16a085;
  border-color: #16a085;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  height: 50px;
  color: #ffffff;
  background-color: #e74c3c;
  border-color: #e74c3c;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  margin-left: 10px;
`;
