import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  ModalContainer,
  ModalContent,
  FormGroup,
  Label,
  Input,
  SubmitButton,
  CancelButton,
} from "./EditModalStyles";
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
