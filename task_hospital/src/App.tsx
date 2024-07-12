// App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./HomePage/Sidebar";
import Header from "./HomePage/Header";
import Dashboard from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import PrivateRoute from "./PrivateRoute";
import SampleTable from "./SampleTable.tsx/SampleTable";

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/app" element={<PrivateRoute element={<MainApp />} />} />
        <Route
          path="/patient-list"
          element={<PrivateRoute element={<SampleTable />} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
