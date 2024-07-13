import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  ModalContainer,
  ModalContent,
  FormGroup,
  Label,
  Input,
  SubmitButton,
  CancelButton,
  ErrorText,
} from "./EditModalStyles"; // Import ErrorText for validation

import { Patient } from "../../Redux-Toolkit/InitialState";
import { updatePatientAction } from "../../Redux-Toolkit/Action";

const EditModal: React.FC<{ patient: Patient; onClose: () => void }> = ({
  patient,
  onClose,
}) => {
  const dispatch = useDispatch();
  const [clientName, setClientName] = useState(patient.clientName);
  const [jobType, setJobType] = useState(patient.jobType);
  const [applicationDate, setApplicationDate] = useState(
    patient.applicationDate
  );
  const [assignedTo, setAssignedTo] = useState(patient.assignedTo);
  const [status, setStatus] = useState(patient.status);
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState({
    clientName: "",
    jobType: "",
    applicationDate: "",
    assignedTo: "",
    status: "",
    file: "",
  });

  useEffect(() => {
    if (patient.file) {
      setFile(patient.file);
      console.log(patient);
    }
  }, [patient]);

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

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const updatedPatient = {
      ...patient,
      clientName,
      jobType,
      applicationDate,
      assignedTo,
      status,
      file,
    };

    dispatch(updatePatientAction(updatedPatient));
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Client Name</Label>
            <Input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
            {errors.clientName && <ErrorText>{errors.clientName}</ErrorText>}
          </FormGroup>
          <FormGroup>
            <Label>Job Type</Label>
            <Input
              type="text"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            />
            {errors.jobType && <ErrorText>{errors.jobType}</ErrorText>}
          </FormGroup>
          <FormGroup>
            <Label>Application Date</Label>
            <Input
              type="date"
              value={applicationDate}
              onChange={(e) => setApplicationDate(e.target.value)}
            />
            {errors.applicationDate && (
              <ErrorText>{errors.applicationDate}</ErrorText>
            )}
          </FormGroup>
          <FormGroup>
            <Label>Assigned To</Label>
            <Input
              type="text"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
            />
            {errors.assignedTo && <ErrorText>{errors.assignedTo}</ErrorText>}
          </FormGroup>
          <FormGroup>
            <Label>Status</Label>
            <Input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
            {errors.status && <ErrorText>{errors.status}</ErrorText>}
          </FormGroup>
          <FormGroup>
            <Label>File</Label>
            {file && ( // Display file details if file is present
              <div>
                <p>Current File: {file.name}</p>
                <p>
                  <a
                    href={URL.createObjectURL(file)}
                    download={file.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download File
                  </a>
                </p>
              </div>
            )}
            <Input type="file" onChange={handleFileChange} />
          </FormGroup>
          <div>
            <SubmitButton type="submit">Submit</SubmitButton>
            <CancelButton type="button" onClick={onClose}>
              Cancel
            </CancelButton>
          </div>
        </form>
      </ModalContent>
    </ModalContainer>
  );
};

export default EditModal;
