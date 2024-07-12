// patientReducer.ts
import { ADD_PATIENT, UPDATE_PATIENT } from "./ActionType";
import { PatientState, initialPatientState } from "./InitialState";

const patientReducer = (
  state: PatientState = initialPatientState,
  action: any
): PatientState => {
  switch (action.type) {
    case ADD_PATIENT:
      return {
        ...state,
        patients: [...state.patients, action.payload],
      };
    case UPDATE_PATIENT:
      return {
        ...state,
        patients: state.patients.map((patient) =>
          patient.id === action.payload.id ? action.payload : patient
        ),
      };
    default:
      return state;
  }
};

export default patientReducer;
