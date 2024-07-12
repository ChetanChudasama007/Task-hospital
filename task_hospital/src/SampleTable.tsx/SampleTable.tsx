// Table.tsx
import React from "react";
import styled from "@emotion/styled";

const TableContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TableTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const TableElement = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #007bff;
  color: #fff;
`;

const TableHeaderCell = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
`;

const TableBody = styled.tbody`
  background-color: #f9f9f9;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const SampleTable: React.FC = () => {
  return (
    <>
      <div
        style={{
          height: "50px",
          background: "white",
          marginBottom: "20px",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div style={{ fontSize: "23px" }}>Menu</div>
        <div style={{ fontSize: "40px" }}>+</div>
      </div>
      <TableContainer>
        <TableTitle>Sample Table View for All Tabular Dashboards</TableTitle>
        <TableElement>
          <TableHead>
            <tr>
              <TableHeaderCell>Client Name</TableHeaderCell>
              <TableHeaderCell>Job Type</TableHeaderCell>
              <TableHeaderCell>Appt. Date</TableHeaderCell>
              <TableHeaderCell>Assigned to</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>View</TableHeaderCell>
            </tr>
          </TableHead>
          <TableBody>
            {[...Array(5)].map((_, index) => (
              <tr key={index}>
                <TableCell>Client {index + 1}</TableCell>
                <TableCell>Type {index + 1}</TableCell>
                <TableCell>2024-07-12</TableCell>
                <TableCell>Assignee {index + 1}</TableCell>
                <TableCell>Status {index + 1}</TableCell>
                <TableCell>
                  <IconButton>
                    <img src="path/to/view-icon.png" alt="View" />
                  </IconButton>
                  <IconButton>
                    <img src="path/to/attachment-icon.png" alt="Attachment" />
                  </IconButton>
                  <IconButton>
                    <img src="path/to/edit-icon.png" alt="Edit" />
                  </IconButton>
                </TableCell>
              </tr>
            ))}
          </TableBody>
        </TableElement>
      </TableContainer>
    </>
  );
};

export default SampleTable;
