import React from "react";
import { Route, Routes } from "react-router-dom";
import ManageIntegrationsPage from "../ManageIntegrations";

const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route
          path="/manage-integrations"
          element={<ManageIntegrationsPage />}
        />
      </Routes>
    </>
  );
};

export default Dashboard;
