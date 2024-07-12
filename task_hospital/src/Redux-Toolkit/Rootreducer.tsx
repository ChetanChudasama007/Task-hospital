// rootReducer.ts
import { combineReducers } from "redux";
import patientReducer from "./patientReducer";

const rootReducer = combineReducers({
  patients: patientReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
