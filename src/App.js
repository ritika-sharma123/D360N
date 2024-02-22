import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Login";
import styled from "styled-components";
import Business from "./pages/Business/AllBusiness";
import CreateNewBusiness from "./pages/Business/CreateNewBusiness";
import ManageIntegrationsPage from "./pages/ManageIntegrations";

import Dashboard from "./pages/DashBoard";
import React, { useState } from "react";
import Layout from "./components/Layout";
import ManageIntegrationInitiate from "./pages/ManageIntegrations/ManageIntegrationInitiate";

const Container = styled.div``;
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handelLogin = (username, passWord) => {
    if (username === "admin" && passWord === "password") {
      setIsLoggedIn(true);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <Layout />
          <Container>
            <Routes>
              <Route path="/" element={<Navigate replace to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/all-manage-integrations"
                element={<ManageIntegrationsPage />}
              />
              <Route
                path="/all-manage-integrations/:id"
                element={<ManageIntegrationInitiate />}
              />
            </Routes>
          </Container>
        </div>
      ) : (
        <LoginPage onLogin={handelLogin} />
      )}
    </div>
  );
};

export default App;
