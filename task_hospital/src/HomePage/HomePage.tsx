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
  ErrorText,
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

  // State for validation errors
  const [errors, setErrors] = useState({
    clientName: "",
    jobType: "",
    applicationDate: "",
    assignedTo: "",
    status: "",
    file: "",
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Clear form and errors on modal close
    resetForm();
  };

  const resetForm = () => {
    setClientName("");
    setJobType("");
    setApplicationDate("");
    setAssignedTo("");
    setStatus("");
    setFile(null);
    setErrors({
      clientName: "",
      jobType: "",
      applicationDate: "",
      assignedTo: "",
      status: "",
      file: "",
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form fields
    if (!validateForm()) {
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

    // Clear form and close modal
    resetForm();
    setIsModalOpen(false);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      clientName: "",
      jobType: "",
      applicationDate: "",
      assignedTo: "",
      status: "",
      file: "",
    };

    if (!clientName) {
      newErrors.clientName = "Client Name is required";
      valid = false;
    }
    if (!jobType) {
      newErrors.jobType = "Job Type is required";
      valid = false;
    }
    if (!applicationDate) {
      newErrors.applicationDate = "Application Date is required";
      valid = false;
    }
    if (!assignedTo) {
      newErrors.assignedTo = "Assigned To is required";
      valid = false;
    }
    if (!status) {
      newErrors.status = "Status is required";
      valid = false;
    }
    if (!file) {
      newErrors.file = "File is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
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
            {errors.clientName && <ErrorText>{errors.clientName}</ErrorText>}
          </FormField>
          <FormField>
            <FormLabel>Job Type</FormLabel>
            <FormInput
              type="text"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            />
            {errors.jobType && <ErrorText>{errors.jobType}</ErrorText>}
          </FormField>
          <FormField>
            <FormLabel>Application Date</FormLabel>
            <FormInput
              type="date"
              value={applicationDate}
              onChange={(e) => setApplicationDate(e.target.value)}
            />
            {errors.applicationDate && (
              <ErrorText>{errors.applicationDate}</ErrorText>
            )}
          </FormField>
          <FormField>
            <FormLabel>Assigned To</FormLabel>
            <FormInput
              type="text"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
            />
            {errors.assignedTo && <ErrorText>{errors.assignedTo}</ErrorText>}
          </FormField>
          <FormField>
            <FormLabel>Status</FormLabel>
            <FormInput
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
            {errors.status && <ErrorText>{errors.status}</ErrorText>}
          </FormField>
          <FormField>
            <FormLabel>File</FormLabel>
            <FormFileInput type="file" onChange={handleFileChange} />
            <div>{errors.file && <ErrorText>{errors.file}</ErrorText>}</div>
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
