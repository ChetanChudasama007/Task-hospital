// initialState.ts
export interface Patient {
  id: number;
  clientName: string;
  jobType: string;
  applicationDate: string;
  assignedTo: string;
  status: string;
  file: File | null;
}

export interface PatientState {
  patients: Patient[];
}

export const initialPatientState: PatientState = {
  patients: [],
};
