import styled from "@emotion/styled";

export const LoginForm = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #007bff;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
`;
