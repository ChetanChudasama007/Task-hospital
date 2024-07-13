import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux-Toolkit/Rootreducer";
import EditModal from "./Modal/EditModal";
import { Patient } from "../Redux-Toolkit/InitialState";
import {
  TableContainer,
  TableTitle,
  TableElement,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableCell,
  HeaderContainer,
  MenuTitle,
  AddButton,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  SubmitButton,
  CancelButton,
} from "./PatientTableStyle";
import Modal from "../Common/Modal";

interface SampleTableProps {
  onAddPatient: (formData: any) => void; // Handler function for adding a new patient
}

const SampleTable: React.FC<SampleTableProps> = ({ onAddPatient }) => {
  const dispatch = useDispatch();
  const patients = useSelector((state: RootState) => state.patients.patients);
  console.log("patients==>", patients);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);

  // State for the modal form inputs
  const [clientName, setClientName] = useState("");
  const [jobType, setJobType] = useState("");
  const [applicationDate, setApplicationDate] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [status, setStatus] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const openEditModal = (patient: Patient) => {
    setSelectedPatient(patient);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedPatient(null);
  };

  const addModalOpen = () => {
    setModalOpen(true);
    setClientName("");
    setJobType("");
    setApplicationDate("");
    setAssignedTo("");
    setStatus("");
    setFile(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !clientName ||
      !jobType ||
      !applicationDate ||
      !assignedTo ||
      !status ||
      !file
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const formData = {
      clientName,
      jobType,
      applicationDate,
      assignedTo,
      status,
      file,
    };

    onAddPatient(formData); // Call the parent handler to add the patient

    // Reset form fields
    setClientName("");
    setJobType("");
    setApplicationDate("");
    setAssignedTo("");
    setStatus("");
    setFile(null);
    setModalOpen(false); // Close modal after submission
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      setFile(fileList[0]);
    }
  };

  const handleViewClick = (patient: Patient) => {
    setSelectedPatient(patient);
    setViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setViewModalOpen(false);
    setSelectedPatient(null);
  };

  const handleDownload = (file: File) => {
    const fileURL = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = fileURL;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <HeaderContainer>
        <MenuTitle>Menu</MenuTitle>
        <AddButton onClick={addModalOpen}>+</AddButton>
      </HeaderContainer>
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
              <TableHeaderCell>Actions</TableHeaderCell>
            </tr>
          </TableHead>
          <TableBody>
            {patients?.map((patient: any, index: any) => (
              <tr key={index}>
                <TableCell>{patient.clientName}</TableCell>
                <TableCell>{patient.jobType}</TableCell>
                <TableCell>{patient.applicationDate}</TableCell>
                <TableCell>{patient.assignedTo}</TableCell>
                <TableCell>{patient.status}</TableCell>
                <TableCell
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <button onClick={() => handleViewClick(patient)}>View</button>
                  <button onClick={() => handleDownload(patient.file)}>
                    Attachment
                  </button>
                  <button onClick={() => openEditModal(patient)}>Edit</button>
                </TableCell>
              </tr>
            ))}
          </TableBody>
        </TableElement>
      </TableContainer>
      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
            <FormGroup>
              <Label>Client Name</Label>
              <Input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Job Type</Label>
              <Input
                type="text"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Application Date</Label>
              <Input
                type="date"
                value={applicationDate}
                onChange={(e) => setApplicationDate(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Assigned To</Label>
              <Input
                type="text"
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Status</Label>
              <Input
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>File</Label>
              <Input type="file" onChange={handleFileChange} />
            </FormGroup>
            <ButtonGroup>
              <SubmitButton type="submit">Submit</SubmitButton>
              <CancelButton onClick={() => setModalOpen(false)}>
                Cancel
              </CancelButton>
            </ButtonGroup>
          </form>
        </Modal>
      )}
      {selectedPatient && isEditModalOpen && (
        <EditModal patient={selectedPatient} onClose={handleCloseEditModal} />
      )}
      {selectedPatient && viewModalOpen && (
        <Modal isOpen={viewModalOpen} onClose={handleCloseViewModal}>
          <div>
            <p>
              <strong>Client Name:</strong> {selectedPatient?.clientName}
            </p>
            <p>
              <strong>Job Type:</strong> {selectedPatient?.jobType}
            </p>
            <p>
              <strong>Application Date:</strong>{" "}
              {selectedPatient?.applicationDate}
            </p>
            <p>
              <strong>Assigned To:</strong> {selectedPatient?.assignedTo}
            </p>
            <p>
              <strong>Status:</strong> {selectedPatient?.status}
            </p>
            {selectedPatient?.file && (
              <p>
                <strong>File:</strong>{" "}
                <a
                  href={URL.createObjectURL(selectedPatient?.file)}
                  download={selectedPatient?.file?.name}
                >
                  {selectedPatient?.file?.name}
                </a>
              </p>
            )}
            <div
              style={{ display: "flex", width: "100%", justifyContent: "end" }}
            >
              <CancelButton onClick={handleCloseViewModal}>Cancel</CancelButton>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SampleTable;
