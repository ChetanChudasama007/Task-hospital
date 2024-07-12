// Dashboard.tsx
import React from "react";
import styled from "@emotion/styled";

const DashboardContainer = styled.main<{ isSidebarOpen: boolean }>`
  margin-left: ${(props) => (props.isSidebarOpen ? "250px" : "60px")};
  padding: 80px 20px 20px;
  transition: margin-left 0.3s;
  background-color: #ecf0f1;
  min-height: 100vh;
`;

interface DashboardProps {
  isSidebarOpen: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ isSidebarOpen }) => {
  return (
    <DashboardContainer isSidebarOpen={isSidebarOpen}>
      <h2>Patients</h2>
      <p>Dashboard / Patients</p>
      <input type="text" placeholder="Search" />
      <div>
        <p>There are no patients yet, let's add the first one!</p>
        <button>New Patient</button>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
