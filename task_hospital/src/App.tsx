// App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Dashboard from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import PrivateRoute from "./PrivateRoute";
import SampleTable from "./PatientTable/PatientDetail";
import { addPatientAction } from "./Redux-Toolkit/Action";
import { useDispatch } from "react-redux";

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const dispatch = useDispatch();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const MainApp = () => (
    <>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Header />
      <Dashboard isSidebarOpen={isSidebarOpen} />
    </>
  );

  const handleAddPatient = (formData: any) => {
    dispatch(addPatientAction(formData));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/app" element={<PrivateRoute element={<MainApp />} />} />
        <Route
          path="/patient-list"
          element={
            <PrivateRoute
              element={<SampleTable onAddPatient={handleAddPatient} />}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
