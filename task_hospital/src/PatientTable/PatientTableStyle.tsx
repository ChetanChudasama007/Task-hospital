import styled from "@emotion/styled";

export const TableContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const TableTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const TableElement = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #007bff;
  color: #fff;
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
`;

export const TableBody = styled.tbody`
  background-color: #f9f9f9;
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
`;

export const HeaderContainer = styled.div`
  height: 50px;
  background: white;
  margin-bottom: 20px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #2c3e50;
  color: white;
`;

export const MenuTitle = styled.div`
  font-size: 23px;
`;

export const AddButton = styled.div`
  font-size: 40px;
  cursor: pointer;
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

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 15px;
  margin-top: 3px;
  font-weight: 500;
`;
