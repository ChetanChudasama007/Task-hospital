import styled from "@emotion/styled";

export const DashboardContainer = styled.main<{ isSidebarOpen: boolean }>`
  margin-left: ${(props) => (props.isSidebarOpen ? "250px" : "60px")};
  padding: 80px 20px 20px;
  transition: margin-left 0.3s;
  background-color: #ecf0f1;
  min-height: 100vh;
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewPatientButton = styled.button`
  height: 30px;
  color: #16a085;
  border-color: #16a085;
  font-size: 20px;
  cursor: pointer;
`;

export const SectionHeader = styled.p`
  width: 100%;
  background: lightgrey;
  padding: 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 20px;
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 200px;
`;

export const AddPatientButton = styled.button`
  height: 50px;
  color: #16a085;
  border-color: #16a085;
  font-size: 20px;
  cursor: pointer;
`;

export const Form = styled.form`
  padding: 20px;
`;

export const FormField = styled.div`
  margin-bottom: 10px;
`;

export const FormLabel = styled.label`
  margin-bottom: 5px;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 30px;
  font-size: 16px;
`;

export const FormFileInput = styled.input`
  font-size: 16px;
`;

export const FormButton = styled.button`
  height: 50px;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
  ${(props: { type: "submit" | "cancel" }) => {
    if (props.type === "submit") {
      return `
        background-color: #16a085;
        border-color: #16a085;
      `;
    } else if (props.type === "cancel") {
      return `
        background-color: #e74c3c;
        border-color: #e74c3c;
      `;
    }
    return "";
  }}
  margin-top: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ModalButton = styled.button`
  height: 50px;
  color: #ffffff;
  background-color: #e74c3c;
  border-color: #e74c3c;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  margin-left: 10px;
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 15px;
  margin-top: 3px;
  font-weight: 500;
`;
