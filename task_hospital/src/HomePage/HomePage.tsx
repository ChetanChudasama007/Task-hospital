import React, { useState } from "react";
import Modal from "../Common/Modal";
import { addPatientAction } from "../Redux-Toolkit/Action";
import { useDispatch } from "react-redux";
import {
  DashboardContainer,
  PageHeader,
  NewPatientButton,
  SectionHeader,
  SearchInput,
  EmptyStateContainer,
  AddPatientButton,
  Form,
  FormField,
  FormLabel,
  FormInput,
  FormFileInput,
  FormButton,
  ModalContent,
  ModalButton,
} from "./HomePageStyle";

interface DashboardProps {
  isSidebarOpen: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ isSidebarOpen }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clientName, setClientName] = useState("");
  const [jobType, setJobType] = useState("");
  const [applicationDate, setApplicationDate] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [status, setStatus] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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

    dispatch(addPatientAction(formData));

    setClientName("");
    setJobType("");
    setApplicationDate("");
    setAssignedTo("");
    setStatus("");
    setFile(null);
    setIsModalOpen(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      setFile(fileList[0]);
    }
  };

  return (
    <DashboardContainer isSidebarOpen={isSidebarOpen}>
      <PageHeader>
        <h2>Patients</h2>
        <NewPatientButton onClick={openModal}>+ New Patient</NewPatientButton>
      </PageHeader>
      <hr />
      <SectionHeader>
        <span style={{ color: "#16a085" }}>Dashboard</span> / Patients
      </SectionHeader>
      <SearchInput type="text" placeholder="Search" />
      <EmptyStateContainer>
        <p>There are no patients yet, let's add the first one!</p>
        <AddPatientButton onClick={openModal}>+ New Patient</AddPatientButton>
      </EmptyStateContainer>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <FormLabel>Client Name</FormLabel>
            <FormInput
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </FormField>
          <FormField>
            <FormLabel>Job Type</FormLabel>
            <FormInput
              type="text"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            />
          </FormField>
          <FormField>
            <FormLabel>Application Date</FormLabel>
            <FormInput
              type="date"
              value={applicationDate}
              onChange={(e) => setApplicationDate(e.target.value)}
            />
          </FormField>
          <FormField>
            <FormLabel>Assigned To</FormLabel>
            <FormInput
              type="text"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
            />
          </FormField>
          <FormField>
            <FormLabel>Status</FormLabel>
            <FormInput
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </FormField>
          <FormField>
            <FormLabel>File</FormLabel>
            <FormFileInput type="file" onChange={handleFileChange} />
          </FormField>
          <ModalContent>
            <FormButton type="submit">Submit</FormButton>
            <ModalButton onClick={closeModal}>Cancel</ModalButton>
          </ModalContent>
        </Form>
      </Modal>
    </DashboardContainer>
  );
};

export default Dashboard;
