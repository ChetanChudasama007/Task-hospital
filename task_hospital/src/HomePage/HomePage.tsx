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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>Patients</h2>
        <button
          style={{
            height: "30px",
            color: "#16a085",
            borderColor: "#16a085",
            fontSize: "20px",
          }}
        >
          + New Patient
        </button>{" "}
      </div>
      <hr />
      <p style={{ width: "100%", background: "lightgrey", padding: "10px" }}>
        <span style={{ color: "#16a085" }}>Dashboard</span> / Patients
      </p>
      <input
        type="text"
        placeholder="Search"
        style={{ width: "100%", height: "40px", fontSize: "20px" }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <p>There are no patients yet, let's add the first one!</p>
        <button
          style={{
            height: "50px",
            color: "#16a085",
            borderColor: "#16a085",
            fontSize: "20px",
          }}
        >
          + New Patient
        </button>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
