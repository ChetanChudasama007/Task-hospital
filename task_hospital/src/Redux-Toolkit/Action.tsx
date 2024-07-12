import { ADD_PATIENT, UPDATE_PATIENT } from "./ActionType";
import { Patient } from "./InitialState";

export const addPatientAction = (patient: Omit<Patient, "id">) => ({
  type: ADD_PATIENT,
  payload: {
    ...patient,
    id: new Date().getTime(), // Generating a unique ID for each patient
  },
});

export const updatePatientAction = (patient: Patient) => ({
  type: UPDATE_PATIENT,
  payload: patient,
});
